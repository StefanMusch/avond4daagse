import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const sections = [
  {
    title: "Sponsoring en catering",
    desc: "We leggen de deelnemers graag in de watten, geven hun op tijd een knabbeltje en wat te drinken. Dat wordt mogelijk gemaakt door een langdurige en goede relatie met verschillende sponsors.",
    color: "#E6007E",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 003 15.546M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18z" />
      </svg>
    ),
    rotate: "-1.5deg",
  },
  {
    title: "Verkeersregelaars",
    desc: "Veiligheid is ieder jaar een onderwerp dat onze volledige aandacht heeft. Onze verkeersregelaars, zij volgen ieder jaar opnieuw een opleiding, zorgen voor een veilige oversteek.",
    color: "#2B9AC8",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    rotate: "1deg",
  },
  {
    title: "Startbureau",
    desc: "Om ervoor te zorgen dat alle inschrijvingen op de juiste manier verwerkt worden. Inschrijven kan via onze webwinkel, betalen kan met iDeal en de startkaarten worden bij vertrek en finish gescand.",
    color: "#8CB808",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    rotate: "-0.5deg",
  },
  {
    title: "Hand- en spandiensten",
    desc: "Een groepje mensen dat de hele week actief is bij het inrichten en verplaatsen van de startlocatie. Dranghekken, vlaggen en spandoeken.",
    color: "#9B1B5A",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    rotate: "1.5deg",
  },
  {
    title: "Voorlopers en opruimers",
    desc: "Vlak voor de start de routemarkering controleren. Na de laatste wandelaar de markeringen weer weghalen.",
    color: "#2B9AC8",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    rotate: "-1deg",
  },
];

export default function VrijwilligersPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title="Vrijwilligers" subtitle="Meer dan honderd mensen maken het mogelijk" />

      {/* Content sections */}
      <section className="relative py-20 px-4 bg-[#9B1B5A]">
        <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#9B1B5A" />
        </svg>

        <div className="max-w-4xl mx-auto pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className={`bg-[#FFF8F2] p-8 shadow-lg ${i === sections.length - 1 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}
                style={{
                  borderRadius: "4px 20px 4px 20px",
                  transform: `rotate(${s.rotate})`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0"
                    style={{ backgroundColor: s.color, borderRadius: "4px 12px 4px 12px" }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A]">{s.title}</h3>
                </div>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 bg-[#FFF8F2]">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="bg-[#8CB808] p-10 shadow-xl text-white"
            style={{ borderRadius: "4px 20px 4px 20px", transform: "rotate(-1deg)" }}
          >
            <h2 className="font-['Quicksand'] font-bold text-2xl md:text-3xl mb-4">
              Wil jij ook graag helpen?
            </h2>
            <p className="font-['Source_Sans_3'] text-white/80 mb-3 text-lg">
              Meldt je als vrijwilliger bij onze secretaris,
            </p>
            <p className="font-['Quicksand'] font-bold text-xl mb-6">
              Nicole Bakker &mdash; 06-17891087
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-[#8CB808] bg-white hover:bg-[#FFF8F2] transition-colors shadow-lg"
              style={{ borderRadius: "4px 20px 4px 20px" }}
            >
              Word vrijwilliger
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
