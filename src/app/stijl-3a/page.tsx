"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

/* ─── Stijl 3a: Dorpsfeest — Logokleuren ─── */
/* Kleuren uit het officiële logo: */
/* #E6007E (magenta), #9B1B5A (bordeaux), #8CB808 (limegroen), #2B9AC8 (blauw) */
/* Achtergrond: #FFF8F2 (warm crème) */

function Bunting({ colors = ["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"] }: { colors?: string[] }) {
  return (
    <svg className="w-full h-16 md:h-20" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0,8 Q300,2 600,8 Q900,14 1200,8" fill="none" stroke="#9B1B5A" strokeWidth="2" opacity="0.4" />
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 35 + i * 65;
        const sag = Math.sin((i / 17) * Math.PI) * 6;
        const color = colors[i % colors.length];
        return (
          <polygon
            key={i}
            points={`${x - 14},${8 + sag} ${x + 14},${8 + sag} ${x},${42 + sag}`}
            fill={color}
            opacity="0.85"
            style={{ transform: `rotate(${Math.sin(i * 0.7) * 8}deg)`, transformOrigin: `${x}px ${8 + sag}px` }}
          />
        );
      })}
    </svg>
  );
}

function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date("2026-06-02T18:30:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Dagen", val: time.d, color: "#E6007E" },
    { label: "Uren", val: time.h, color: "#9B1B5A" },
    { label: "Min", val: time.m, color: "#8CB808" },
    { label: "Sec", val: time.s, color: "#2B9AC8" },
  ];

  return (
    <div className="flex gap-4 justify-center mt-8">
      {units.map((u, i) => (
        <div
          key={u.label}
          className="bg-white shadow-lg px-4 py-3 min-w-[72px] text-center border-2 border-dashed"
          style={{ borderColor: u.color, borderRadius: "4px 12px 4px 12px", transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
        >
          <div className="font-['Quicksand'] font-bold text-3xl" style={{ color: u.color }}>{String(u.val).padStart(2, "0")}</div>
          <div className="font-['Source_Sans_3'] text-xs text-[#4A4A4A]/60 uppercase tracking-wider">{u.label}</div>
        </div>
      ))}
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Routes", "Vrijwilligers", "Foto's", "Organisatie", "Sponsors", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF8F2]/95 backdrop-blur-md border-b-2 border-dashed border-[#E6007E]/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/stijl-3a" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Avond4daagse" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex gap-5">
          {links.map((l) => (
            <a key={l} href="#" className="font-['Quicksand'] text-sm font-bold text-[#4A4A4A] hover:text-[#E6007E] transition-colors">
              {l}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6 text-[#E6007E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#FFF8F2] border-t-2 border-dashed border-[#E6007E]/20 px-4 pb-4">
          {links.map((l) => (
            <a key={l} href="#" className="block py-2 font-['Quicksand'] font-bold text-[#4A4A4A] hover:text-[#E6007E]">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden bg-[#FFF8F2]">
      <Bunting />
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-16 text-center">
        {/* Logo with Drunen */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Avond4daagse"
            width={400}
            height={160}
            className="mx-auto w-[280px] md:w-[400px] h-auto"
            priority
          />
          <div className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-[#2B9AC8] -mt-1 tracking-wide">
            Drunen
          </div>
        </div>

        {/* Badge */}
        <div className="inline-block mb-6 relative">
          <div className="bg-[#E6007E] text-white font-['Quicksand'] font-bold text-sm px-6 py-2 rounded-sm" style={{ transform: "rotate(-2deg)" }}>
            57e Editie &bull; 2 t/m 5 juni 2026
          </div>
        </div>

        <h1 className="font-['Quicksand'] font-bold text-4xl md:text-6xl text-[#4A4A4A] leading-tight mb-4">
          Héél Drunen
        </h1>
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-5xl mb-8" style={{ color: "#E6007E", transform: "rotate(-1deg)" }}>
          wandelt weer!
        </h2>

        <p className="font-['Source_Sans_3'] text-lg text-[#4A4A4A]/70 mb-10 max-w-lg mx-auto">
          Vier avonden feest, wandelplezier en gezelligheid door het mooie Drunen. Jong en oud, iedereen doet mee!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#inschrijven" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg" style={{ borderRadius: "4px 20px 4px 20px" }}>
            Schrijf je in!
          </a>
          <a href="#routes" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-[#8CB808] hover:bg-[#8CB808]/10 transition-colors" style={{ borderRadius: "20px 4px 20px 4px", borderWidth: "3px", borderStyle: "solid", borderColor: "#8CB808" }}>
            Bekijk routes
          </a>
          <a href="#" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#2B9AC8] hover:bg-[#2488b2] transition-colors" style={{ borderRadius: "4px 20px 4px 20px" }}>
            Word vrijwilliger
          </a>
        </div>

        <Countdown />
      </div>

      {/* Wavy divider */}
      <svg className="w-full -mb-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,40 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#8CB808" />
      </svg>
    </section>
  );
}

function InfoCards() {
  const cards = [
    { icon: "🎪", title: "4 Feestelijke avonden", desc: "Dinsdag t/m vrijdag, start om 18:30", bg: "#E6007E", rotate: "-2deg" },
    { icon: "👨‍👩‍👧‍👦", title: "Het hele dorp doet mee", desc: "Van peuter tot opa & oma, iedereen is welkom", bg: "#2B9AC8", rotate: "1deg" },
    { icon: "🏅", title: "Medaille voor iedereen", desc: "Alle finishers krijgen een mooie herinnering", bg: "#8CB808", rotate: "-1deg" },
  ];

  return (
    <section className="py-16 px-4 bg-[#8CB808]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((c) => (
          <div
            key={c.title}
            className="bg-[#FFF8F2] rounded-sm p-8 shadow-lg hover:shadow-xl transition-shadow"
            style={{ transform: `rotate(${c.rotate})` }}
          >
            <div className="text-5xl mb-4">{c.icon}</div>
            <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-2">{c.title}</h3>
            <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Routes() {
  const routes = [
    { km: "3", label: "Ontdek", desc: "Gezellige korte ronde door het centrum. Ideaal voor kleintjes!", color: "#2B9AC8", icon: "🐣" },
    { km: "5", label: "Geniet", desc: "De populairste route! Langs de mooiste plekjes van Drunen.", color: "#E6007E", icon: "🌷" },
    { km: "8", label: "Uitdaging", desc: "Door het buitengebied en de Loonse Duinen. Voor de doorzetters!", color: "#8CB808", icon: "🦊" },
  ];

  return (
    <section id="routes" className="relative py-20 px-4 bg-[#FFF8F2]">
      {/* Top wave */}
      <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#8CB808" />
      </svg>

      <div className="max-w-5xl mx-auto pt-8">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-[#4A4A4A] mb-3">
          Kies je route
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-[#4A4A4A]/60 mb-12 max-w-md mx-auto">
          Welke afstand past bij jou? Er is voor ieder wat wils!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {routes.map((r, i) => (
            <div key={r.km} className="relative" style={{ transform: `rotate(${i === 1 ? '0' : i === 0 ? '-1.5' : '1.5'}deg)` }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-dashed" style={{ borderColor: r.color }}>
                <div className="p-3 text-center text-white font-['Quicksand'] font-bold" style={{ backgroundColor: r.color }}>
                  {r.icon} {r.label}
                </div>
                <div className="p-6 text-center">
                  <div className="font-['Quicksand'] font-bold text-6xl mb-1" style={{ color: r.color }}>{r.km}</div>
                  <div className="font-['Quicksand'] font-bold text-xl mb-4" style={{ color: r.color }}>kilometer</div>
                  <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 text-sm">{r.desc}</p>
                </div>
                <div className="border-t-2 border-dashed mx-4" style={{ borderColor: r.color + "40" }} />
                <div className="p-3 text-center">
                  <span className="font-['Quicksand'] font-bold text-xs uppercase tracking-wider" style={{ color: r.color }}>
                    Avond4daagse Drunen 2026
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistrationForm() {
  return (
    <section id="inschrijven" className="relative py-20 px-4 bg-[#E6007E]/5">
      <Bunting colors={["#E6007E", "#8CB808", "#2B9AC8"]} />

      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-[#4A4A4A] mb-3">
          Doe je mee?
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-[#4A4A4A]/60 mb-8">
          Schrijf je in vóór 1 juni 2026!
        </p>

        <div className="bg-[#FFF8F2] p-8 shadow-xl border-4" style={{ borderColor: "#E6007E", borderRadius: "4px 20px 4px 20px" }}>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Voornaam</label>
              <input type="text" className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors" placeholder="Jan" />
            </div>
            <div>
              <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Achternaam</label>
              <input type="text" className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors" placeholder="de Wandelaar" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">E-mailadres</label>
            <input type="email" className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors" placeholder="jan@voorbeeld.nl" />
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Geboortedatum</label>
            <input type="date" className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors" />
          </div>
          <div className="mb-6">
            <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-2 text-sm">Welke afstand?</label>
            <div className="flex gap-3">
              {[
                { km: "3 km", color: "#2B9AC8", icon: "🐣" },
                { km: "5 km", color: "#E6007E", icon: "🌷" },
                { km: "8 km", color: "#8CB808", icon: "🦊" },
              ].map((opt) => (
                <label key={opt.km} className="flex-1 cursor-pointer">
                  <input type="radio" name="distance" className="peer hidden" />
                  <div className="text-center py-3 px-2 border-2 border-dashed border-gray-300 bg-white font-['Quicksand'] font-bold peer-checked:border-solid transition-colors" style={{ borderRadius: "4px 12px 4px 12px" }}>
                    <div className="text-xl">{opt.icon}</div>
                    <div className="text-sm text-[#4A4A4A]">{opt.km}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <button className="w-full py-4 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg" style={{ borderRadius: "4px 16px 4px 16px" }}>
            Inschrijven!
          </button>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const sponsors = ["Albert Heijn", "Jumbo", "Rabobank", "NS", "Natuurmonumenten", "Gemeente Heusden"];
  return (
    <section className="py-16 px-4 bg-[#FFF8F2]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-['Quicksand'] font-bold text-sm uppercase tracking-widest text-[#4A4A4A]/40 mb-8">
          Mede mogelijk gemaakt door
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((s, i) => (
            <div key={s} className="bg-white h-20 flex items-center justify-center shadow-sm border-2 border-dashed border-[#E6007E]/15" style={{ borderRadius: "4px 12px 4px 12px", transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
              <span className="font-['Source_Sans_3'] font-medium text-[#4A4A4A]/40 text-sm">{s}</span>
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
    <section className="py-20 px-4 bg-[#9B1B5A]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-white mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={f.q} className="bg-[#FFF8F2] shadow-md group" style={{ borderRadius: "4px 16px 4px 16px", transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
              <summary className="cursor-pointer p-5 font-['Quicksand'] font-bold text-[#4A4A4A] flex justify-between items-center list-none">
                {f.q}
                <span className="text-[#E6007E] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 font-['Source_Sans_3'] text-[#4A4A4A]/70">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#3A3A3A] text-white pt-2">
      <Bunting colors={["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"]} />
      <div className="max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <Image src="/logo.png" alt="Avond4daagse" width={150} height={50} className="h-12 w-auto brightness-0 invert" />
            <span className="font-['Quicksand'] font-bold text-sm text-[#2B9AC8]">Drunen</span>
          </div>
          <p className="font-['Source_Sans_3'] text-white/50 text-sm">Het gezelligste wandelfeest van de Langstraat. Al 57 jaar!</p>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Snel naar</h3>
          <div className="space-y-2 font-['Source_Sans_3'] text-sm text-white/50">
            <a href="#" className="block hover:text-[#E6007E]">Routes</a>
            <a href="#" className="block hover:text-[#E6007E]">Vrijwilligers</a>
            <a href="#" className="block hover:text-[#E6007E]">FAQ</a>
            <a href="#" className="block hover:text-[#E6007E]">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Contact</h3>
          <div className="font-['Source_Sans_3'] text-sm text-white/50 space-y-1">
            <p>info@avondvierdaagsedrunen.nl</p>
            <p>Drunen, Noord-Brabant</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center font-['Source_Sans_3'] text-xs text-white/30">
        &copy; 2026 Avondvierdaagse Drunen
      </div>
    </footer>
  );
}

export default function Stijl3a() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <Hero />
      <InfoCards />
      <Routes />
      <RegistrationForm />
      <Sponsors />
      <FAQ />
      <Footer />
      <Link href="/" className="fixed bottom-6 left-6 z-50 bg-[#9B1B5A] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-[#7d1548] transition-colors">
        &larr; Terug
      </Link>
    </div>
  );
}
