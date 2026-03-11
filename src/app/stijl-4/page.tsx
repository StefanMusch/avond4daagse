"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* ─── Stijl 4: Avondwandeling — Zonsondergang ─── */
/* Sfeer: Schemering, lantaarns, wandelpad, avondlucht */
/* Kleuren: #2D3B55 (nachtblauw), #E8773A (zonsondergang), #F5C84C (lantaarn), #F0E6D3 (zand) */

function Fireflies() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#F5C84C] rounded-full"
          style={{
            left: `${10 + (i * 37) % 80}%`,
            top: `${15 + (i * 23) % 60}%`,
            opacity: 0.4 + (i % 3) * 0.2,
            animation: `float ${3 + (i % 3)}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
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
    { label: "Dagen", val: time.d },
    { label: "Uren", val: time.h },
    { label: "Min", val: time.m },
    { label: "Sec", val: time.s },
  ];

  return (
    <div className="flex gap-3 justify-center mt-10">
      {units.map((u) => (
        <div key={u.label} className="bg-[#2D3B55]/80 backdrop-blur-md rounded-xl px-4 py-3 min-w-[72px] text-center border border-[#F5C84C]/30 shadow-[0_0_20px_rgba(245,200,76,0.15)]">
          <div className="font-['Quicksand'] font-bold text-2xl text-[#F5C84C]">{String(u.val).padStart(2, "0")}</div>
          <div className="font-['Source_Sans_3'] text-xs text-white/40 uppercase tracking-wider">{u.label}</div>
        </div>
      ))}
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Routes", "Vrijwilligers", "Foto's", "Organisatie", "Sponsors", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2D3B55]/90 backdrop-blur-md border-b border-[#F5C84C]/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/stijl-4" className="font-['Quicksand'] font-bold text-xl text-[#F5C84C]">
          ✦ Avond4daagse
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <a key={l} href="#" className="font-['Quicksand'] text-sm font-medium text-white/60 hover:text-[#F5C84C] transition-colors">{l}</a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          <svg className="w-6 h-6 text-[#F5C84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#2D3B55] border-t border-[#F5C84C]/10 px-4 pb-4">
          {links.map((l) => (
            <a key={l} href="#" className="block py-2 font-['Quicksand'] font-medium text-white/60 hover:text-[#F5C84C]">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #2D3B55 0%, #4A5580 20%, #8B6E5A 45%, #E8773A 65%, #F5C84C 80%, #F0E6D3 100%)"
      }} />

      <Fireflies />

      {/* Stars in top area */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              left: `${(i * 47) % 100}%`,
              top: `${(i * 13) % 30}%`,
              opacity: 0.3 + (i % 4) * 0.15,
              animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Landscape silhouette */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ height: "30vh" }}>
        {/* Far trees */}
        <path d="M0,120 Q100,60 200,100 Q300,50 400,90 Q500,40 600,80 Q700,30 800,70 Q900,50 1000,90 Q1100,60 1200,80 Q1300,40 1440,100 L1440,200 L0,200 Z" fill="#1a2636" opacity="0.5" />
        {/* Near ground */}
        <path d="M0,160 Q200,130 400,150 Q600,120 800,145 Q1000,130 1200,150 Q1400,140 1440,155 L1440,200 L0,200 Z" fill="#1a2636" opacity="0.7" />
        {/* Path/trail */}
        <path d="M680,200 Q700,170 710,155 Q720,145 740,140" fill="none" stroke="#F0E6D3" strokeWidth="3" opacity="0.3" />
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full pb-[35vh]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <span className="font-['Quicksand'] font-bold text-sm text-[#F5C84C]">✦ 57e Editie &bull; 2 t/m 5 juni 2026</span>
          </div>
          <h1 className="font-['Quicksand'] font-bold text-5xl md:text-7xl text-white leading-tight mb-4 drop-shadow-lg">
            Héél Drunen
          </h1>
          <h2 className="font-['Quicksand'] font-bold text-3xl md:text-5xl text-[#F5C84C] mb-8 drop-shadow-md">
            wandelt weer!
          </h2>
          <p className="font-['Source_Sans_3'] text-lg text-white/70 mb-10 max-w-lg mx-auto">
            Als de avondzon over Drunen schijnt, gaat het hele dorp op pad. Vier magische avonden vol wandelplezier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inschrijven" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-['Quicksand'] font-bold text-lg text-[#2D3B55] bg-[#F5C84C] hover:bg-[#f0c030] transition-colors shadow-lg shadow-[#F5C84C]/20">
              Schrijf je in
            </a>
            <a href="#routes" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-['Quicksand'] font-bold text-lg text-[#2D3B55] bg-white/90 hover:bg-white transition-colors">
              Bekijk routes
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-5 rounded-full font-['Quicksand'] font-bold text-lg text-[#2D3B55] bg-[#E8773A] hover:bg-[#d56930] transition-colors text-white">
              Word vrijwilliger
            </a>
          </div>
          <Countdown />
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-15px) translateX(8px); }
        }
        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

function InfoSection() {
  const items = [
    { icon: "🌅", title: "4 Avonden", desc: "Dinsdag t/m vrijdag, start om 18:30" },
    { icon: "👨‍👩‍👧‍👦", title: "Voor iedereen", desc: "Jong en oud, samen op pad" },
    { icon: "🏅", title: "Medaille", desc: "Alle finishers worden beloond" },
  ];

  return (
    <section className="py-20 px-4 bg-[#F0E6D3]">
      <div className="max-w-5xl mx-auto">
        {/* Trail line connecting items */}
        <div className="hidden md:block absolute left-1/2 w-0.5 bg-[#E8773A]/20" style={{ height: "200px" }} />
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={item.title} className="text-center relative">
              {/* Lantern icon */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl" style={{
                background: i === 0 ? "#E8773A" : i === 1 ? "#2D3B55" : "#F5C84C",
                boxShadow: `0 0 20px ${i === 0 ? "rgba(232,119,58,0.3)" : i === 1 ? "rgba(45,59,85,0.3)" : "rgba(245,200,76,0.3)"}`,
              }}>
                {item.icon}
              </div>
              <h3 className="font-['Quicksand'] font-bold text-xl text-[#2D3B55] mb-2">{item.title}</h3>
              <p className="font-['Source_Sans_3'] text-[#2D3B55]/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes() {
  const routes = [
    { km: "3", label: "Ontdek", desc: "Gezellige korte ronde door het centrum.", color: "#F5C84C", emoji: "🌿" },
    { km: "5", label: "Geniet", desc: "De populairste route door de mooiste wijken.", color: "#E8773A", emoji: "🌳" },
    { km: "8", label: "Uitdaging", desc: "Door het buitengebied en de Loonse Duinen.", color: "#2D3B55", emoji: "🏞️" },
  ];

  return (
    <section id="routes" className="py-20 px-4 bg-[#2D3B55] relative">
      <Fireflies />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-white mb-3">
          Kies je route
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-white/50 mb-12 max-w-md mx-auto">
          Elke route heeft zijn eigen charme
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {routes.map((r) => (
            <div key={r.km} className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F5C84C]/30 transition-colors group">
              {/* Glow effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full shadow-lg" style={{ backgroundColor: r.color, boxShadow: `0 0 15px ${r.color}60` }} />

              <div className="text-center pt-4">
                <div className="text-4xl mb-3">{r.emoji}</div>
                <div className="font-['Quicksand'] font-bold text-6xl text-white mb-1">{r.km}</div>
                <div className="font-['Quicksand'] font-bold text-lg mb-4" style={{ color: r.color }}>{r.label}</div>
                <p className="font-['Source_Sans_3'] text-white/50 text-sm">{r.desc}</p>
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
    <section id="inschrijven" className="py-20 px-4 bg-[#F0E6D3]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-[#2D3B55] mb-3">
          Wandel je mee?
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-[#2D3B55]/50 mb-8">
          Schrijf je in vóór 1 juni 2026
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#E8773A]/10">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-['Quicksand'] font-bold text-[#2D3B55] mb-1 text-sm">Voornaam</label>
              <input type="text" className="w-full bg-[#F0E6D3]/30 border border-[#2D3B55]/10 rounded-xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E8773A] focus:border-transparent" placeholder="Jan" />
            </div>
            <div>
              <label className="block font-['Quicksand'] font-bold text-[#2D3B55] mb-1 text-sm">Achternaam</label>
              <input type="text" className="w-full bg-[#F0E6D3]/30 border border-[#2D3B55]/10 rounded-xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E8773A] focus:border-transparent" placeholder="de Wandelaar" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-[#2D3B55] mb-1 text-sm">E-mailadres</label>
            <input type="email" className="w-full bg-[#F0E6D3]/30 border border-[#2D3B55]/10 rounded-xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E8773A] focus:border-transparent" placeholder="jan@voorbeeld.nl" />
          </div>
          <div className="mb-4">
            <label className="block font-['Quicksand'] font-bold text-[#2D3B55] mb-1 text-sm">Geboortedatum</label>
            <input type="date" className="w-full bg-[#F0E6D3]/30 border border-[#2D3B55]/10 rounded-xl px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:ring-2 focus:ring-[#E8773A] focus:border-transparent" />
          </div>
          <div className="mb-6">
            <label className="block font-['Quicksand'] font-bold text-[#2D3B55] mb-2 text-sm">Welke afstand?</label>
            <div className="flex gap-3">
              {[
                { km: "3 km", color: "#F5C84C" },
                { km: "5 km", color: "#E8773A" },
                { km: "8 km", color: "#2D3B55" },
              ].map((opt) => (
                <label key={opt.km} className="flex-1 cursor-pointer">
                  <input type="radio" name="distance" className="peer hidden" />
                  <div className="text-center py-3 rounded-xl border-2 border-[#2D3B55]/10 bg-[#F0E6D3]/30 font-['Quicksand'] font-bold text-[#2D3B55]/50 peer-checked:text-white peer-checked:shadow-md transition-all" style={{ ["--peer-bg" as string]: opt.color }}>
                    {opt.km}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <button className="w-full py-4 rounded-xl font-['Quicksand'] font-bold text-lg text-white bg-[#E8773A] hover:bg-[#d56930] transition-colors shadow-lg shadow-[#E8773A]/20">
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
    <section className="py-16 px-4 bg-[#F0E6D3]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-['Quicksand'] font-bold text-sm uppercase tracking-widest text-[#2D3B55]/30 mb-8">✦ Onze sponsors ✦</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((s) => (
            <div key={s} className="bg-white/60 rounded-xl h-20 flex items-center justify-center">
              <span className="font-['Source_Sans_3'] font-medium text-[#2D3B55]/30 text-sm">{s}</span>
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
    <section className="py-20 px-4 relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #F0E6D3 0%, #E8D5BC 50%, #4A5580 100%)"
    }}>
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-[#2D3B55] mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white/80 backdrop-blur-sm rounded-xl group shadow-sm">
              <summary className="cursor-pointer p-5 font-['Quicksand'] font-bold text-[#2D3B55] flex justify-between items-center list-none">
                {f.q}
                <span className="text-[#E8773A] text-xl group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-5 pb-5 font-['Source_Sans_3'] text-[#2D3B55]/60">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#2D3B55] text-white relative">
      <Fireflies />
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4 text-[#F5C84C]">✦ Avond4daagse Drunen</h3>
          <p className="font-['Source_Sans_3'] text-white/40 text-sm">Het mooiste wandelevenement van de Langstraat. Al 57 jaar, als de avondzon over Drunen schijnt.</p>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Snel naar</h3>
          <div className="space-y-2 font-['Source_Sans_3'] text-sm text-white/40">
            <a href="#" className="block hover:text-[#F5C84C]">Routes</a>
            <a href="#" className="block hover:text-[#F5C84C]">Vrijwilligers</a>
            <a href="#" className="block hover:text-[#F5C84C]">FAQ</a>
            <a href="#" className="block hover:text-[#F5C84C]">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">Contact</h3>
          <div className="font-['Source_Sans_3'] text-sm text-white/40 space-y-1">
            <p>info@avondvierdaagsedrunen.nl</p>
            <p>Drunen, Noord-Brabant</p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/10 text-center font-['Source_Sans_3'] text-xs text-white/20">
        &copy; 2026 Avondvierdaagse Drunen
      </div>
    </footer>
  );
}

export default function Stijl4() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <InfoSection />
      <Routes />
      <RegistrationForm />
      <Sponsors />
      <FAQ />
      <Footer />
      <Link href="/" className="fixed bottom-6 left-6 z-50 bg-[#2D3B55] text-[#F5C84C] px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-[#3d4d6a] transition-colors border border-[#F5C84C]/20">
        &larr; Terug
      </Link>
    </div>
  );
}
