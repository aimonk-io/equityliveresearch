# Equity Live Research

Public marketing website for **EquityLiveResearch** ([equityliveresearch.com](https://equityliveresearch.com)),
a SEBI-registered Indian equity research & portfolio advisory firm.

Editorial navy + gold aesthetic (Newsreader serif + Archivo). Fully static —
no auth, no middleware, no backend.

- **Dev port:** 3002
- **Routes:** `/`, `/about`, `/services`, `/plans`, `/contact`
- **Stack:** Next.js App Router, Tailwind CSS v4, `next/font/google`

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:3002
pnpm build
pnpm lint
pnpm check-types
```

Copy `.env.example` to `.env.local` for local overrides.

## Deploy (Vercel)

Import [aimonk-io/equityliveresearch](https://github.com/aimonk-io/equityliveresearch)
in Vercel. `vercel.json` pins pnpm install/build and the `bom1` (Mumbai) region.

Set these environment variables in the Vercel project:

| Variable               | Production value                 |
| ---------------------- | -------------------------------- |
| `APP_ENV`              | `production`                     |
| `NEXT_PUBLIC_SITE_URL` | `https://equityliveresearch.com` |

## Before launch — fill in `src/config/site.ts`

All company details and page content live in
[`src/config/site.ts`](src/config/site.ts). Replace the placeholders:

- [ ] `phone` / `phoneDisplay` / `phoneHours`
- [ ] `email`
- [ ] `officeCity` / `officeCountry`
- [ ] `legalName`
- [ ] `sebiRegNo` (**required**)
- [ ] Wire or clearly label illustrative `ticker` / `snapshot` data
- [ ] Add `public/og.png` (1200×630) and reference it in `app/layout.tsx`
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://equityliveresearch.com` in production

## Contact form

The callback form validates client-side and shows a thank-you state — it does
**not** send anywhere yet. Wire `handleSubmit` before launch if you need leads.

## Compliance

- Returns are always **"expected"** and **market-linked** — never "guaranteed"
  or "assured".
- SEBI-mandated disclaimer sentences in the footer / risk band must not be
  paraphrased.
