/**
 * Sanity Webhook → On-demand ISR revalidation
 *
 * In Sanity Studio (sanity.io/manage → Your Project → API → Webhooks):
 *  URL:    https://yourdomain.com/api/revalidate?secret=YOUR_SECRET
 *  Filter: _type in ["hero","product","featuredProduct","whySection","aboutSection","siteSettings"]
 *  Projection: { _type }
 *  Secret: match SANITY_REVALIDATE_SECRET in your .env.local / Vercel env vars
 */
import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Revalidation secret not configured on server" },
      { status: 500 }
    );
  }

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    revalidatePath("/", "layout");

    const body = await req.json().catch(() => ({}));
    const type = (body?._type as string) ?? "unknown";

    return NextResponse.json({
      revalidated: true,
      timestamp: new Date().toISOString(),
      documentType: type,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error during revalidation", error: String(err) },
      { status: 500 }
    );
  }
}
