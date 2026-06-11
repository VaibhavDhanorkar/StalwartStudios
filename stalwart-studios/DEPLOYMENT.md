# Stalwart Studios — Deployment Guide

## Prerequisites
- Node.js 20+
- A GitHub account
- A Vercel account (free tier works)
- A Sanity account (free tier works) — sanity.io
- Domain: stalwartstudios.in

---

## Part 1 — Deploy the Website (Next.js)

### 1. Push to GitHub
```bash
cd stalwart-studios
git init
git add .
git commit -m "Initial commit: Stalwart Studios website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stalwart-studios.git
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New → Project**
2. Import `stalwart-studios` from GitHub
3. Vercel auto-detects Next.js — click **Deploy**
4. Live at `your-project.vercel.app`

### 3. Connect your domain
1. Vercel project → **Settings → Domains** → Add `stalwartstudios.in`
2. Add the DNS records shown in Vercel at your domain registrar:
   - **A record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
3. Wait 5–30 min → SSL auto-issued ✓

---

## Part 2 — Set Up Sanity CMS

### 1. Create your Sanity project
```bash
cd stalwart-studios-cms
npm install
npx sanity init --project YOUR_PROJECT_ID --dataset production
```
Or create a new project at [sanity.io/manage](https://sanity.io/manage).

### 2. Push schemas to Sanity
```bash
cd stalwart-studios-cms
cp .env.example .env
# Edit .env and add your SANITY_STUDIO_PROJECT_ID
npm run deploy
```
This deploys the Studio to `https://your-project.sanity.studio`

### 3. Add env vars to Vercel
In Vercel → **Settings → Environment Variables**, add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID   = abc123xyz     (from sanity.io/manage)
NEXT_PUBLIC_SANITY_DATASET      = production
SANITY_REVALIDATE_SECRET        = any-random-string-you-choose
```
Then **Redeploy** once for vars to take effect.

### 4. Set up the webhook (instant updates)
In [sanity.io/manage](https://sanity.io/manage) → Your Project → **API → Webhooks → Create**:
- **Name:** Vercel ISR Revalidate
- **URL:** `https://stalwartstudios.in/api/revalidate?secret=YOUR_SECRET`
- **Trigger on:** Create, Update, Delete
- **Filter:** `_type in ["hero","product","featuredProduct","whySection","aboutSection","siteSettings"]`

Now every save in the CMS instantly refreshes the live site.

### 5. Seed initial content
In the Sanity Studio (your-project.sanity.studio):
1. Go to **Homepage → Hero** → fill in all fields → Publish
2. Go to **Products** → Create → fill in Focus Champ details → Publish
3. Go to **Homepage → Featured Product** → select Focus Champ → Publish
4. Fill in **Why Section**, **About Section**, **Site Settings**

---

## Part 3 — SVG Logo Files (in /public)

| File | Use |
|------|-----|
| `logo-horizontal.svg` | Navbar, email headers |
| `logo-stacked.svg` | App splash screens, social bios |
| `logo-icon.svg` | App icons, Play Store developer page |
| `favicon.svg` | Browser tab |

---

## File Structure
```
stalwart-studios/          ← Next.js website
├── app/
│   ├── page.tsx           ← Homepage (fetches from Sanity)
│   ├── layout.tsx
│   ├── globals.css
│   ├── api/revalidate/    ← Webhook endpoint
│   ├── privacy-policy/
│   ├── terms/
│   └── refund-policy/
├── components/
│   ├── Logo.tsx           ← Archway SVG logo
│   ├── Navigation.tsx
│   ├── HeroSection.tsx    ← 3-col layout with phone mockup
│   ├── HeroGeometric.tsx  ← Warm amber composition
│   ├── FocusChampSection.tsx
│   ├── WhySection.tsx
│   ├── FutureProducts.tsx
│   ├── AboutSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── lib/
│   ├── sanity.client.ts   ← Sanity client (safe build guard)
│   ├── sanity.fetch.ts    ← Typed fetch helpers with fallbacks
│   ├── sanity.image.ts    ← Image URL builder
│   └── sanity.queries.ts  ← All GROQ queries
├── sanity/schemas/        ← Schema source (synced to CMS)
├── public/
│   ├── logo-horizontal.svg
│   ├── logo-stacked.svg
│   ├── logo-icon.svg
│   ├── favicon.svg
│   ├── focus-champ-icon.png
│   ├── focus-champ-home.png
│   └── focus-champ-alt.png
└── .env.local.example

stalwart-studios-cms/      ← Standalone Sanity Studio
├── schemas/               ← Same schemas, deployed to sanity.studio
├── sanity.config.ts
└── package.json
```

---

## Continuous Deployment
- Push to `main` → Vercel auto-deploys (60 second ISR cache)
- Sanity save → Webhook fires → Instant revalidation
- Pull requests → Vercel preview URL generated automatically
