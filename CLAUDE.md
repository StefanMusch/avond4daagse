# Avondvierdaagse Drunen — Project Guide

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS)
- **Hosting:** Vercel (https://avond4daagse.vercel.app)
- **Repo:** https://github.com/StefanMusch/avond4daagse
- **CMS:** Tina CMS (nog te integreren)
- **Back-end:** Supabase (formulieren, inschrijvingen)
- **Fonts:** Quicksand (headings), Source Sans 3 (body) via next/font/google

## Deployen
```bash
cd avond4daagse
git add <bestanden>
git commit -m "beschrijving"
git push origin main
```
> GitHub is gekoppeld aan Vercel — elke push naar `main` triggert automatisch een deploy.

## Lessen & conventies
- **Productie-server:** `next build && next start` — de server herlaadt NIET na een rebuild, je moet een nieuwe starten op een andere poort of het proces herstarten
- **Dev server:** `npx next dev --port <poort>` — let op lock file in `.next/dev/lock`, verwijder als nodig
- **Turbopack root warning:** opgelost met `turbopack.root` in next.config.ts, maar moet absoluut pad zijn (Vercel logt een warning, is onschadelijk)
- **Fonts:** Gebruik `next/font/google` in layout.tsx, NIET `@import url()` in CSS — dat blokkeert rendering
- **Huisstijl:** Gebruiker kiest uit 4 varianten. Definitieve keuze nog niet gemaakt. Alle stijlen bewaren tot keuze gemaakt is
- **Taal:** Website is in het Nederlands

## Huidige stijlvarianten
| Route | Naam | Primair | Secundair | Accent |
|-------|------|---------|-----------|--------|
| /stijl-2 | Origineel (Terracotta & Bosgroen) | #E85D2A | #2B6B4F | #F5C842 |
| /stijl-2a | Framboos & Salie | #C2185B | #5C8A6E | #F4B942 |
| /stijl-3 | Dorpsfeest (Vlaggetjes) | #D4573B | #3A7D5C | #E8A547 |
| /stijl-4 | Avondwandeling (Zonsondergang) | #2D3B55 | #E8773A | #F5C84C |

## Roadmap

### Fase 1 — Stijlkeuze & Basisstructuur
- [x] Homepage framework met 4 stijlvarianten
- [x] Aftelklok op alle varianten
- [x] Inschrijfformulier (UI)
- [x] Sponsorlogo-sectie (placeholders)
- [x] FAQ accordion
- [x] Responsive navigatie (mobile hamburger menu)
- [x] Deploy naar Vercel
- [ ] **Definitieve stijlkeuze maken**
- [ ] Niet-gekozen stijlen opruimen

### Fase 2 — Alle pagina's bouwen
- [ ] Routes pagina (`/routes`) — detail per 3km, 5km, 8km met kaart
- [ ] Vrijwilligers pagina (`/vrijwilligers`) — info + aanmeldformulier
- [ ] Foto's pagina (`/fotos`) — galerij per editie/jaar
- [ ] Organisatie pagina (`/organisatie`) — bestuursleden + historie
- [ ] Sponsors pagina (`/sponsors`) — overzicht met logo's
- [ ] FAQ pagina (`/faq`) — uitgebreide versie
- [ ] Contact pagina (`/contact`) — contactgegevens + formulier

### Fase 3 — Back-end (Supabase)
- [ ] Supabase project opzetten en koppelen
- [ ] Database tabellen: inschrijvingen, vrijwilligers, contactberichten
- [ ] Inschrijfformulier koppelen aan Supabase
- [ ] Vrijwilligersformulier koppelen aan Supabase
- [ ] Contactformulier koppelen aan Supabase
- [ ] E-mailbevestiging na inschrijving
- [ ] Admin overzicht inschrijvingen (beschermd)

### Fase 4 — CMS (Tina CMS)
- [ ] Tina CMS installeren en configureren
- [ ] Content schema's definiëren (pagina-teksten, FAQ items, routes)
- [ ] Bestaande hardcoded teksten migreren naar Tina
- [ ] Admin route (`/admin`) inrichten
- [ ] Bestuursleden toegang geven

### Fase 5 — Afronding
- [ ] Echte foto's en sponsorlogo's plaatsen
- [ ] SEO optimalisatie (meta tags, Open Graph, sitemap)
- [ ] Custom domein koppelen (avondvierdaagsedrunen.nl)
- [ ] Performance audit (Lighthouse)
- [ ] Toegankelijkheid check (WCAG)
- [ ] Analytics (Vercel Analytics of Plausible)
