# Shreyas Melligeri — Portfolio

A personal portfolio for analytics, cloud, and applied-AI work, built with Next.js 16 (App Router) and hand-written CSS.

## Live

https://shreyas-melligeri.vercel.app

Deployed on Vercel. To ship an update:

```bash
npx vercel deploy --prod
```

`NEXT_PUBLIC_SITE_URL` is set to the production alias in the Vercel project, so social previews resolve against the canonical domain.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev     # local development
npm run lint    # eslint
npm run build   # production build
npm run start   # serve the production build
```

## Content

All profile copy, project details, links, experience, education, and skills live in:

```text
src/data/site.js
```

Page sections are composed in `src/app/page.js`. The visual system, responsive layout, and project visuals live in `src/app/globals.css`. The downloadable résumé is `public/Shreyas_V_Melligeri_Resume.pdf`.

## Social preview

`public/og.png` is the Open Graph/Twitter card. For production, set the public site URL so the preview resolves absolutely:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

On Vercel, `VERCEL_URL` is used automatically when `NEXT_PUBLIC_SITE_URL` is not set.

## Notes

- No profile photo is included; the `SM` monogram is intentional.
- Meridian has no public demo or repository link, so it is presented without an external link.
- The public page shows email, LinkedIn, GitHub, location, and résumé. The phone number is only in the résumé PDF.
