# Avondvierdaagse Drunen — Project Guide

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS)
- **Hosting:** Vercel (https://avond4daagse.vercel.app)
- **Repo:** https://github.com/StefanMusch/avond4daagse
- **CMS:** Tina CMS (TinaCloud gekoppeld, admin op `/admin`)
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

## BELANGRIJK: Content & Tina CMS regels

**Alle bewerkbare content MOET via Tina CMS werken.** Dit geldt voor nieuwe pagina's, secties, en teksten.

### Bij het toevoegen van nieuwe content of pagina's:
1. **Voeg ALTIJD eerst een collectie toe in `tina/config.ts`** met de juiste velden
2. **Maak een JSON bestand aan in `content/<collectienaam>/`** met de initiële data
3. **Laad de content in de pagina via `src/lib/content.ts`** — voeg een getter-functie en type toe
4. **Hardcode NOOIT teksten direct in pagina-componenten** — alle bewerkbare tekst moet uit de JSON content komen
5. **Commit altijd zowel het schema (`tina/config.ts`) als de content (`content/`) bestanden**
6. **Regenereer ALTIJD de Tina lock file en generated files** na schema-wijzigingen:
   ```bash
   # Start tinacms dev kort om tina-lock.json te updaten (BELANGRIJK!)
   npx tinacms dev -c "echo done" --port 5180
   # Daarna build voor generated files
   npx tinacms build --skip-cloud-checks
   # Stage alles
   git add tina/tina-lock.json
   git add -f tina/__generated__ public/admin/index.html
   ```
   **`tina-lock.json` is cruciaal** — TinaCloud gebruikt dit bestand om te indexeren, NIET `tina/config.ts` direct.
   `tinacms build` update de lock file NIET, alleen `tinacms dev` doet dat.
   Zonder bijgewerkte lock file krijg je een GraphQL schema mismatch in het admin panel.

### Checklist voor nieuwe pagina's:
- [ ] Collectie schema in `tina/config.ts`
- [ ] JSON content bestand(en) in `content/`
- [ ] Type + getter in `src/lib/content.ts`
- [ ] Pagina laadt content via getter (server component)
- [ ] Gedeelde componenten gebruiken: `NavBar`, `Footer`, `PageHero`, `Bunting`
- [ ] `tinacms dev` draaien om `tina-lock.json` te updaten, daarna `tinacms build --skip-cloud-checks`
- [ ] `tina/tina-lock.json` + `tina/__generated__` + `public/admin/index.html` mee committen

### Wat WEL hardcoded mag:
- Layout/structuur (kleuren, spacing, grid)
- Navigatie-links (staan in NavBar component)
- Statische UI-elementen (knoppen, iconen, decoratie)

### Wat NIET hardcoded mag:
- Paginatitels en beschrijvingen
- FAQ vragen en antwoorden
- Sponsor namen en logo's
- Bestuursleden namen en functies
- Route informatie
- Contact gegevens
- Evenement data (datum, editie, etc.)

## Content beheer (CMS)
- Content staat in `content/` directory als JSON bestanden
- Schema's gedefinieerd in `tina/config.ts`
- Pagina's laden content via `src/lib/content.ts` helper
- Admin panel: `/admin` (via TinaCloud)
- Dev met CMS: `npm run dev` (start Tina + Next.js samen)
- Build: `tinacms build --skip-cloud-checks && next build` (automatisch via `npm run build`)
- Env vars (in `.env` lokaal, in Vercel dashboard voor productie):
  - `NEXT_PUBLIC_TINA_CLIENT_ID`
  - `TINA_TOKEN`

### Content collecties
| Collectie | Pad | Beschrijving |
|-----------|-----|-------------|
| home | content/home/ | Homepage hero, info kaarten |
| route | content/routes/ | 3km, 5km, 7.5km routes |
| faqItem | content/faq/ | Veelgestelde vragen |
| sponsor | content/sponsors/ | Sponsor namen + logo's |
| boardMember | content/organisatie/ | Bestuursleden |
| volunteerGroup | content/vrijwilligers/ | Vrijwilligersgroepen |
| siteSettings | content/settings/ | Contact info, KvK etc. |

### Nieuwe collectie toevoegen (stap-voor-stap)
```
1. tina/config.ts     → voeg collectie toe aan schema.collections[]
2. content/<naam>/    → maak JSON bestand(en) aan
3. src/lib/content.ts → voeg TypeScript type + getter functie toe
4. src/app/<route>/   → importeer getter, laad data, render in component
5. npx tinacms dev -c "echo done" --port 5180 → update tina-lock.json (CRUCIAAL!)
6. npx tinacms build --skip-cloud-checks → regenereer generated files
7. git add tina/tina-lock.json && git add -f tina/__generated__ public/admin/index.html
8. git push           → TinaCloud indexeert automatisch
```

## Lessen & conventies
- **Productie-server:** `next build && next start` — de server herlaadt NIET na een rebuild
- **Dev server:** `npm run dev` (poort 5176) — let op lock file in `.next/dev/lock`
- **Turbopack root warning:** opgelost met `turbopack.root` in next.config.ts (Vercel warning is onschadelijk)
- **Fonts:** Gebruik `next/font/google` in layout.tsx, NIET `@import url()` in CSS
- **Taal:** Website is in het Nederlands
- **Componenten:** Gedeelde componenten in `src/components/` (NavBar, Footer, Bunting, Countdown, PageHero)

## Pagina's
| Route | Pagina | Content-driven | Status |
|-------|--------|----------------|--------|
| `/` | Homepage | Ja (home) | Klaar |
| `/routes` | Routes met kaart | Ja (route) | Klaar (Maps placeholder) |
| `/inschrijven` | Inschrijfformulier | Nee (formulier) | UI klaar (Supabase nog te koppelen) |
| `/vrijwilligers` | Vrijwilligers info | Deels | Klaar |
| `/fotos` | Fotogalerij | Nee (placeholders) | Klaar |
| `/organisatie` | Bestuur + historie | Deels | Klaar |
| `/sponsors` | Sponsors overzicht | Ja (sponsor) | Klaar (logo placeholders) |
| `/faq` | Veelgestelde vragen | Ja (faqItem) | Klaar |
| `/contact` | Contact + formulier | Nee (formulier) | UI klaar (Supabase nog te koppelen) |

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
- [x] TinaCloud account aanmaken en koppelen
- [x] Env vars instellen (lokaal + Vercel)
- [ ] Admin route (`/admin`) testen en valideren
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
