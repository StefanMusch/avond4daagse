"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Stijl 2: Warm & Gezellig ─── */
/* Kleuren: #E85D2A (terracotta), #2B6B4F (bosgroen), #F5C842 (geel) */
/* Fonts: Quicksand (headings), Source Sans 3 (body) */

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    "Home", "Routes", "Vrijwilligers", "Foto's", "Organisatie", "Sponsors", "FAQ", "Contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF9F0]/95 backdrop-blur-md border-b border-[#E85D2A]/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/stijl-2" className="font-['Quicksand'] font-bold text-xl" style={{ color: "#E85D2A" }}>
          <span className="text-[#2B6B4F]">Avond</span>4daagse
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l} href="#" className="font-['Source_Sans_3'] text-sm font-medium text-gray-600 hover:text-[#E85D2A] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6 text-[#E85D2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#FFF9F0] border-t border-[#E85D2A]/10 px-4 pb-4">
          {links.map((l) => (
            <a key={l} href="#" className="block py-2 font-['Source_Sans_3'] text-gray-600 hover:text-[#E85D2A]">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFF9F0]">
      {/* Decorative blobs */}
      <svg className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20" viewBox="0 0 500 500">
        <circle cx="400" cy="100" r="200" fill="#E85D2A" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15" viewBox="0 0 400 400">
        <circle cx="50" cy="350" r="250" fill="#2B6B4F" />
      </svg>
      <svg className="absolute top-1/3 left-1/4 w-[200px] h-[200px] opacity-20" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="#F5C842" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#F5C842]/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F5C842] rounded-full animate-pulse" />
            <span className="font-['Quicksand'] font-bold text-sm text-[#2B6B4F]">57e Editie &bull; 2 t/m 5 juni 2026</span>
          </div>
          <h1 className="font-['Quicksand'] font-bold text-4xl md:text-6xl text-gray-900 leading-tight mb-6">
            Héél Drunen<br />
            <span style={{ color: "#E85D2A" }}>wandelt weer!</span>
          </h1>
          <p className="font-['Source_Sans_3'] text-lg text-gray-600 mb-8 max-w-md">
            Vier avonden wandelplezier door het mooie Drunen. Voor gezinnen, vriendengroepen en iedereen die van een gezellige wandeling houdt.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#inschrijven" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-['Quicksand'] font-bold text-lg text-white bg-[#E85D2A] hover:bg-[#d14e1f] transition-colors shadow-lg shadow-[#E85D2A]/25">
              Schrijf je in
            </a>
            <a href="#routes" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-['Quicksand'] font-bold text-lg text-[#2B6B4F] border-2 border-[#2B6B4F]/30 hover:bg-[#2B6B4F]/5 transition-colors">
              Bekijk routes &rarr;
            </a>
          </div>
        </div>
        {/* Placeholder image area */}
        <div className="relative">
          <div className="bg-[#E85D2A]/10 rounded-3xl aspect-[4/3] flex items-center justify-center border-2 border-dashed border-[#E85D2A]/20">
            <div className="text-center">
              <div className="text-6xl mb-3">🚶‍♂️🚶‍♀️👨‍👩‍👧</div>
              <p className="font-['Source_Sans_3'] text-[#E85D2A]/60 text-sm">Foto van wandelaars</p>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
            <div className="font-['Quicksand'] font-bold text-2xl text-[#2B6B4F]">2.500+</div>
            <div className="font-['Source_Sans_3'] text-sm text-gray-500">deelnemers vorig jaar</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCards() {
  const cards = [
    { icon: "🌅", title: "4 Avonden", desc: "Dinsdag t/m vrijdag, start om 18:30 uur", bg: "#E85D2A" },
    { icon: "👨‍👩‍👧‍👦", title: "Voor het hele gezin", desc: "Van peuter tot opa & oma, iedereen is welkom", bg: "#2B6B4F" },
    { icon: "🎖️", title: "Medaille & meer", desc: "Iedere finisher ontvangt een mooie herinneringsmedaille", bg: "#F5C842" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-3xl p-8 text-white" style={{ backgroundColor: c.bg }}>
            <div className="text-4xl mb-4">{c.icon}</div>
            <h3 className="font-['Quicksand'] font-bold text-xl mb-2">{c.title}</h3>
            <p className="font-['Source_Sans_3'] text-white/80">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Routes() {
  const routes = [
    { km: "3", emoji: "🌿", label: "Ontdek", desc: "Perfect voor jonge kinderen en senioren. Een korte, gezellige ronde door het centrum van Drunen." },
    { km: "5", emoji: "🌳", label: "Geniet", desc: "De populairste route! Door de wijken en langs de mooiste plekjes van Drunen." },
    { km: "8", emoji: "🏞️", label: "Uitdaging", desc: "Voor de échte wandelaars. Een prachtige route door het buitengebied en de Loonse Duinen." },
  ];

  return (
    <section id="routes" className="py-20 px-4 bg-[#FFF9F0]">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-gray-900 mb-3">
          Kies je route
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-gray-500 mb-12 max-w-md mx-auto">
          Er is voor ieder wat wils — welke afstand past bij jou?
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {routes.map((r) => (
            <div key={r.km} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{r.emoji}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-['Quicksand'] font-bold text-5xl text-[#E85D2A]">{r.km}</span>
                <span className="font-['Quicksand'] font-bold text-xl text-[#E85D2A]">km</span>
              </div>
              <div className="font-['Quicksand'] font-bold text-gray-400 mb-3">{r.label}</div>
              <p className="font-['Source_Sans_3'] text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationForm() {
  return (
    <section id="inschrijven" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-gray-900 mb-3">
          Doe je mee?
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-gray-500 mb-8">
          Schrijf je in vóór 1 juni 2026. Tijdens de wandeldagen is geen inschrijving meer mogelijk.
        </p>
        <div className="bg-[#FFF9F0] rounded-3xl p-8 border border-[#E85D2A]/10">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-['Quicksand'] font-bold text-gray-700 mb-1 text-sm">Voornaam</label>
              <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E85D2A] focus:border-transparent" placeholder="Jan" />
            </div>
            <div>
              <label className="block font-['Quicksand'] font-bold text-gray-700 mb-1 text-sm">Achternaam</label>
              <input type="text" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E85D2A] focus:border-transparent" placeholder="de Wandelaar" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-gray-700 mb-1 text-sm">E-mailadres</label>
            <input type="email" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E85D2A] focus:border-transparent" placeholder="jan@voorbeeld.nl" />
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-gray-700 mb-1 text-sm">Geboortedatum</label>
            <input type="date" className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E85D2A] focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label className="block font-['Quicksand'] font-bold text-gray-700 mb-2 text-sm">Welke afstand?</label>
            <div className="flex gap-3">
              {["3 km", "5 km", "8 km"].map((km) => (
                <label key={km} className="flex-1 cursor-pointer">
                  <input type="radio" name="distance" className="peer hidden" />
                  <div className="text-center py-3 px-4 rounded-2xl border-2 border-gray-200 bg-white font-['Quicksand'] font-bold peer-checked:border-[#E85D2A] peer-checked:bg-[#E85D2A]/10 peer-checked:text-[#E85D2A] transition-colors hover:border-[#E85D2A]/50">
                    {km}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <button className="w-full py-4 rounded-2xl font-['Quicksand'] font-bold text-lg text-white bg-[#E85D2A] hover:bg-[#d14e1f] transition-colors shadow-lg shadow-[#E85D2A]/20">
            Inschrijven
          </button>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const sponsors = ["Albert Heijn", "Jumbo", "Rabobank", "NS", "Natuurmonumenten", "Gemeente Heusden"];

  return (
    <section className="py-16 px-4 bg-[#FFF9F0]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-['Quicksand'] font-bold text-sm uppercase tracking-widest text-[#E85D2A]/50 mb-8">
          Mede mogelijk gemaakt door
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((s) => (
            <div key={s} className="bg-white rounded-2xl h-20 flex items-center justify-center shadow-sm">
              <span className="font-['Source_Sans_3'] font-medium text-gray-400 text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Wat kost deelname?", a: "De inschrijfkosten zijn €5,- per persoon. Kinderen tot 4 jaar zijn gratis." },
    { q: "Kan ik me ter plekke inschrijven?", a: "Nee, inschrijving is alleen vooraf mogelijk tot en met 1 juni 2026." },
    { q: "Zijn honden toegestaan?", a: "Honden zijn welkom, mits aangelijnd." },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-[#FFF9F0] rounded-2xl group">
              <summary className="cursor-pointer p-5 font-['Quicksand'] font-bold text-gray-900 flex justify-between items-center list-none">
                {f.q}
                <span className="text-[#E85D2A] text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 font-['Source_Sans_3'] text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#2B6B4F] text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">
            <span className="text-[#F5C842]">Avond</span>4daagse Drunen
          </h3>
          <p className="font-['Source_Sans_3'] text-white/60 text-sm">
            Het gezelligste wandelevenement van de Langstraat. Al 57 jaar een begrip in Drunen en omstreken.
          </p>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Snel naar</h3>
          <div className="space-y-2 font-['Source_Sans_3'] text-sm text-white/60">
            <a href="#" className="block hover:text-[#F5C842]">Routes</a>
            <a href="#" className="block hover:text-[#F5C842]">Vrijwilligers</a>
            <a href="#" className="block hover:text-[#F5C842]">FAQ</a>
            <a href="#" className="block hover:text-[#F5C842]">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Contact</h3>
          <div className="font-['Source_Sans_3'] text-sm text-white/60 space-y-1">
            <p>info@avondvierdaagsedrunen.nl</p>
            <p>Drunen, Noord-Brabant</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/15 text-center font-['Source_Sans_3'] text-sm text-white/40">
        &copy; 2026 Avondvierdaagse Drunen
      </div>
    </footer>
  );
}

export default function Stijl2() {
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <NavBar />
      <Hero />
      <InfoCards />
      <Routes />
      <RegistrationForm />
      <Sponsors />
      <FAQ />
      <Footer />
      <Link href="/" className="fixed bottom-6 left-6 z-50 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-700 transition-colors">
        &larr; Terug naar overzicht
      </Link>
    </div>
  );
}
