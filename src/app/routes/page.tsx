import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getRoutes, getSiteSettings } from "@/lib/content";

const routeStyles = [
  { color: "#2B9AC8", rotate: "-1.5deg" },
  { color: "#E6007E", rotate: "0deg" },
  { color: "#8CB808", rotate: "1.5deg" },
];

export default function RoutesPage() {
  const routeData = getRoutes();
  const settings = getSiteSettings();

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title="Routes" subtitle="Kies de afstand die bij jou past" />

      <section className="relative py-20 px-4 bg-[#9B1B5A]">
        <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#9B1B5A" />
        </svg>

        <div className="max-w-5xl mx-auto pt-8">
          <div className="grid md:grid-cols-1 gap-10">
            {routeData.map((r, i) => {
              const style = routeStyles[i % routeStyles.length];
              const km = r.distance.replace(/[^0-9,\.]/g, "");
              return (
                <div
                  key={r.name}
                  className="bg-[#FFF8F2] shadow-xl overflow-hidden"
                  style={{ borderRadius: "4px 20px 4px 20px", transform: `rotate(${style.rotate})` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="font-['Quicksand'] font-bold text-7xl md:text-8xl" style={{ color: style.color }}>
                          {km}
                        </span>
                        <span className="font-['Quicksand'] font-bold text-2xl text-[#4A4A4A]/60">km</span>
                      </div>
                      <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-3">{r.name}</h3>
                      <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 mb-6 leading-relaxed">{r.description}</p>

                      {r.highlights.length > 0 && (
                        <ul className="mb-4 space-y-1">
                          {r.highlights.map((h) => (
                            <li key={h.text} className="flex items-center gap-2 font-['Source_Sans_3'] text-sm text-[#4A4A4A]/70">
                              <span style={{ color: style.color }}>&#9679;</span> {h.text}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="border-t-2 border-dashed pt-4 space-y-2" style={{ borderColor: style.color + "40" }}>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" style={{ color: style.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-['Source_Sans_3'] text-sm text-[#4A4A4A]/70">Start: 18:30 uur</span>
                        </div>
                        {r.startLocation && (
                          <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" style={{ color: style.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-['Source_Sans_3'] text-sm text-[#4A4A4A]/70">{r.startLocation}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="md:w-1/2 p-6 md:p-10 flex items-center justify-center">
                      {r.mapEmbedUrl ? (
                        <iframe
                          src={r.mapEmbedUrl}
                          className="w-full aspect-[4/3] border-0"
                          style={{ borderRadius: "4px 12px 4px 12px" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      ) : (
                        <div
                          className="w-full aspect-[4/3] bg-[#E8E8E8] flex flex-col items-center justify-center border-2 border-dashed"
                          style={{ borderColor: style.color + "40", borderRadius: "4px 12px 4px 12px" }}
                        >
                          <svg className="w-12 h-12 mb-3" style={{ color: style.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="font-['Quicksand'] font-bold text-[#4A4A4A]/40 text-lg">Routekaart volgt</span>
                          <span className="font-['Source_Sans_3'] text-[#4A4A4A]/30 text-sm mt-1">{r.distance} route</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t-2 border-dashed mx-6" style={{ borderColor: style.color + "30" }} />
                  <div className="px-6 py-3 flex items-center justify-between">
                    <span className="font-['Quicksand'] font-bold text-xs uppercase tracking-wider" style={{ color: style.color }}>
                      Avond4daagse Drunen 2026
                    </span>
                    <span className="font-['Source_Sans_3'] text-xs text-[#4A4A4A]/40">
                      2 t/m 5 juni
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FFF8F2]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-[#4A4A4A] mb-4">Klaar om mee te wandelen?</h2>
          <p className="font-['Source_Sans_3'] text-[#4A4A4A]/60 mb-8">
            Schrijf je in en kies de route die het beste bij jou past!
          </p>
          <Link
            href="/inschrijven"
            className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg"
            style={{ borderRadius: "4px 20px 4px 20px" }}
          >
            Schrijf je in!
          </Link>
        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
