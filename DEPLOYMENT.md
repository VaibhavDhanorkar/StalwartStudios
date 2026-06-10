# Stalwart Studios — Deployment Guide

## Prerequisites
- Node.js 20+
- A GitHub account
- A Vercel account (free tier works fine)
- Domain: stalwartstudios.in (or any domain)

---

## 1. Push to GitHub

```bash
cd stalwart-studios
git init
git add .
git commit -m "Initial commit: Stalwart Studios website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stalwart-studios-website.git
git push -u origin main
```

---

## 2. Deploy to Vercel (Recommended — Free)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `stalwart-studios-website` repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Your site is live at `your-project.vercel.app`

### Connect your domain (stalwartstudios.in)

1. In Vercel project → **Settings → Domains**
2. Add `stalwartstudios.in` and `www.stalwartstudios.in`
3. Vercel will show you DNS records to add
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Add the provided **A record** and **CNAME record**
6. Wait 5–30 minutes for DNS to propagate
7. Vercel auto-issues a free SSL certificate

---

## 3. Alternative: Netlify Deploy

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=.next
```

Or connect GitHub repo via netlify.com dashboard (similar to Vercel steps).

---

## 4. Environment Variables (Future Use)

When you add a contact form backend or CMS:

```bash
# .env.local (never commit this)
NEXT_PUBLIC_SITE_URL=https://stalwartstudios.in
CONTACT_FORM_API_KEY=your_key_here
```

In Vercel: **Settings → Environment Variables → Add**

---

## 5. OG Image

Create a 1200×630px image and save it as `public/og-image.png` before deploying.
This appears when your site is shared on social media.

---

## 6. Analytics (Optional)

Add Vercel Analytics for free traffic insights:

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```tsx
import { Analytics } from "@vercel/analytics/react";
// Add <Analytics /> before </body>
```

---

## 7. Continuous Deployment

Once connected to Vercel + GitHub:
- Every push to `main` auto-deploys production
- Every pull request creates a preview URL
- Zero downtime deployments

---

## File Structure Reference

```
stalwart-studios/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (all sections)
│   ├── globals.css         # Design tokens, global styles
│   ├── privacy-policy/
│   ├── terms/
│   └── refund-policy/
├── components/
│   ├── Logo.tsx            # Stalwart Studios wordmark
│   ├── Navigation.tsx      # Sticky nav with mobile menu
│   ├── HeroSection.tsx     # Hero with headline + CTA
│   ├── HeroGeometric.tsx   # SVG geometric composition
│   ├── FocusChampSection.tsx # Featured product
│   ├── WhySection.tsx      # 4-column principles
│   ├── FutureProducts.tsx  # Coming soon products
│   ├── AboutSection.tsx    # Studio story + mission
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer with links
├── public/
│   ├── focus-champ-icon.png
│   ├── focus-champ-home.png
│   ├── focus-champ-alt.png
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Adding New Products

To add a product page (e.g., `/products/broker-pilot`):

1. Create `app/products/broker-pilot/page.tsx`
2. Add a product component in `components/`
3. Update `FutureProducts.tsx` with a link when ready

---

## Support

For any deployment issues, email: support@stalwartstudios.in
