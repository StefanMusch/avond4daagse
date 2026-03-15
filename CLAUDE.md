# Avondvierdaagse Drunen — Project Guide

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS)
- **Hosting:** Vercel (https://avond4daagse.vercel.app)
- **Repo:** https://github.com/StefanMusch/avond4daagse
- **CMS:** Tina CMS (schema klaar, TinaCloud nog te koppelen)
- **Back-end:** Supabase (formulieren, inschrijvingen — nog te koppelen)
- **Fonts:** Quicksand (headings), Source Sans 3 (body) via next/font/google

## Huisstijl
Gekozen stijl: **Dorpsfeest — Logokleuren (stijl-3a)**

| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Magenta | #E6007E | Primaire actieknop, accenten |
| Bordeaux | #9B1B5A | Secties, achtergronden |
| Limegroen | #8CB808 | Routes, succes |
| Blauw | #2B9AC8 | Links, info |
| Warm crème | #FFF8F2 | Achtergrond |
| Tekst | #4A4A4A | Body tekst |

## Deployen
```bash
cd avond4daagse
git add <bestanden>
git commit -m "beschrijving"
git push origin main
```
> GitHub is gekoppeld aan Vercel — elke push naar `main` triggert automatisch een deploy.

## Content beheer (CMS)
- Content staat in `content/` directory als JSON bestanden
- Schema's gedefinieerd in `tina/config.ts`
- Pagina's laden content via `src/lib/content.ts` helper
- **Om TinaCloud te koppelen:**
  1. Account aanmaken op tina.io
  2. Project koppelen aan GitHub repo
  3. `NEXT_PUBLIC_TINA_CLIENT_ID` en `TINA_TOKEN` instellen als env vars
  4. Build script aanpassen: `"build": "tinacms build && next build"`
  5. Admin beschikbaar op `/admin`

### Content collecties
| Collectie | Pad | Beschrijving |
|-----------|-----|-------------|
| home | content/home/ | Homepage hero, info kaarten |
| routes | content/routes/ | 3km, 5km, 7.5km routes |
| faqItem | content/faq/ | Veelgestelde vragen |
| sponsor | content/sponsors/ | Sponsor namen + logo's |
| boardMember | content/organisatie/ | Bestuursleden |
| volunteerGroup | content/vrijwilligers/ | Vrijwilligersgroepen |
| siteSettings | content/settings/ | Contact info, KvK etc. |

## Lessen & conventies
- **Productie-server:** `next build && next start` — de server herlaadt NIET na een rebuild
- **Dev server:** `npm run dev` (poort 5176) — let op lock file in `.next/dev/lock`
- **Turbopack root warning:** opgelost met `turbopack.root` in next.config.ts (Vercel warning is onschadelijk)
- **Fonts:** Gebruik `next/font/google` in layout.tsx, NIET `@import url()` in CSS
- **Taal:** Website is in het Nederlands
- **Componenten:** Gedeelde componenten in `src/components/` (NavBar, Footer, Bunting, Countdown, PageHero)

## Pagina's
| Route | Pagina | Status |
|-------|--------|--------|
| `/` | Homepage | Klaar |
| `/routes` | Routes met kaart | Klaar (Maps placeholder) |
| `/inschrijven` | Inschrijfformulier | UI klaar (Supabase nog te koppelen) |
| `/vrijwilligers` | Vrijwilligers info | Klaar |
| `/fotos` | Fotogalerij | Klaar (placeholders) |
| `/organisatie` | Bestuur + historie | Klaar |
| `/sponsors` | Sponsors overzicht | Klaar (logo placeholders) |
| `/faq` | Veelgestelde vragen | Klaar |
| `/contact` | Contact + formulier | UI klaar (Supabase nog te koppelen) |

## Roadmap

### Fase 1 — Stijlkeuze & Basisstructuur
- [x] Homepage framework met stijlvarianten
- [x] Aftelklok
- [x] Inschrijfformulier (UI)
- [x] Sponsorlogo-sectie (placeholders)
- [x] FAQ accordion
- [x] Responsive navigatie (mobile hamburger menu)
- [x] Deploy naar Vercel
- [x] Definitieve stijlkeuze: Dorpsfeest logokleuren
- [x] Niet-gekozen stijlen opgeruimd

### Fase 2 — Alle pagina's bouwen
- [x] Routes pagina (`/routes`) — detail per 3km, 5km, 7.5km met kaart placeholder
- [x] Inschrijven pagina (`/inschrijven`) — formulier met deelnemer-beheer
- [x] Vrijwilligers pagina (`/vrijwilligers`) — groepen + aanmeld-CTA
- [x] Foto's pagina (`/fotos`) — galerij met tabs per jaar
- [x] Organisatie pagina (`/organisatie`) — bestuursleden + historie
- [x] Sponsors pagina (`/sponsors`) — overzicht + word sponsor CTA
- [x] FAQ pagina (`/faq`) — 10 vragen met accordion
- [x] Contact pagina (`/contact`) — contactkaarten + formulier

### Fase 3 — CMS (Tina CMS)
- [x] Tina CMS installeren
- [x] Content schema's definiëren (tina/config.ts)
- [x] JSON content bestanden aanmaken
- [x] Pagina's migreren naar content-driven (homepage, FAQ, sponsors, routes)
- [ ] TinaCloud account aanmaken en koppelen
- [ ] Admin route (`/admin`) activeren
- [ ] Bestuursleden toegang geven

### Fase 4 — Back-end (Supabase)
- [ ] Supabase project opzetten en koppelen
- [ ] Database tabellen: inschrijvingen, vrijwilligers, contactberichten
- [ ] Inschrijfformulier koppelen aan Supabase
- [ ] Vrijwilligersformulier koppelen aan Supabase
- [ ] Contactformulier koppelen aan Supabase
- [ ] E-mailbevestiging na inschrijving
- [ ] Admin overzicht inschrijvingen (beschermd)

### Fase 5 — Afronding
- [ ] Echte foto's en sponsorlogo's plaatsen
- [ ] Google Maps routes invullen (embed URLs in content/routes/)
- [ ] SEO optimalisatie (meta tags, Open Graph, sitemap)
- [ ] Custom domein koppelen (avondvierdaagsedrunen.nl)
- [ ] Performance audit (Lighthouse)
- [ ] Toegankelijkheid check (WCAG)
- [ ] Analytics (Vercel Analytics of Plausible)
