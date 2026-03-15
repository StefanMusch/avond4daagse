import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Bunting from "@/components/Bunting";
import Countdown from "@/components/Countdown";
import { getHomeContent, getSponsors, getFAQs, getRoutes, getSiteSettings } from "@/lib/content";
import type { HomeContent, SponsorContent, FAQContent, RouteContent } from "@/lib/content";

function Hero({ content }: { content: HomeContent }) {
  return (
    <section className="relative pt-16 overflow-hidden bg-[#FFF8F2]">
      <Bunting />
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-16 text-center">
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

        <div className="inline-block mb-6 relative">
          <div className="bg-[#E6007E] text-white font-['Quicksand'] font-bold text-sm px-6 py-2 rounded-sm" style={{ transform: "rotate(-2deg)" }}>
            {content.edition}
          </div>
        </div>

        <h1 className="font-['Quicksand'] font-bold text-4xl md:text-6xl text-[#4A4A4A] leading-tight mb-4">
          {content.heroTitle}
        </h1>
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-5xl mb-8" style={{ color: "#E6007E", transform: "rotate(-1deg)" }}>
          {content.heroSubtitle}
        </h2>

        <p className="font-['Source_Sans_3'] text-lg text-[#4A4A4A]/70 mb-10 max-w-lg mx-auto">
          {content.heroDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inschrijven" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg" style={{ borderRadius: "4px 20px 4px 20px" }}>
            Schrijf je in!
          </Link>
          <Link href="/routes" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-[#8CB808] hover:bg-[#8CB808]/10 transition-colors" style={{ borderRadius: "20px 4px 20px 4px", borderWidth: "3px", borderStyle: "solid", borderColor: "#8CB808" }}>
            Bekijk routes
          </Link>
          <Link href="/vrijwilligers" className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#2B9AC8] hover:bg-[#2488b2] transition-colors" style={{ borderRadius: "4px 20px 4px 20px" }}>
            Word vrijwilliger
          </Link>
        </div>

        <Countdown />
      </div>

      <svg className="w-full -mb-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,40 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z" fill="#8CB808" />
      </svg>
    </section>
  );
}

function InfoCards({ cards }: { cards: HomeContent["infoCards"] }) {
  const rotations = ["-2deg", "1deg", "-1deg"];
  return (
    <section className="py-16 px-4 bg-[#8CB808]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="bg-[#FFF8F2] rounded-sm p-8 shadow-lg hover:shadow-xl transition-shadow"
            style={{ transform: `rotate(${rotations[i % rotations.length]})` }}
          >
            <div className="text-5xl mb-4">{c.icon}</div>
            <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-2">{c.title}</h3>
            <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70">{c.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Routes({ routes, title, subtitle }: { routes: RouteContent[]; title: string; subtitle: string }) {
  const colors = ["#2B9AC8", "#E6007E", "#8CB808"];
  const icons = ["🐣", "🌷", "🦊"];

  return (
    <section className="relative py-20 px-4 bg-[#FFF8F2]">
      <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#8CB808" />
      </svg>

      <div className="max-w-5xl mx-auto pt-8">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-[#4A4A4A] mb-3">
          {title}
        </h2>
        <p className="font-['Source_Sans_3'] text-center text-[#4A4A4A]/60 mb-12 max-w-md mx-auto">
          {subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {routes.map((r, i) => {
            const color = colors[i % colors.length];
            const icon = icons[i % icons.length];
            const km = r.distance.replace(/[^0-9.,]/g, "");
            return (
              <div key={r.name} className="relative" style={{ transform: `rotate(${i === 1 ? '0' : i === 0 ? '-1.5' : '1.5'}deg)` }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-dashed" style={{ borderColor: color }}>
                  <div className="p-3 text-center text-white font-['Quicksand'] font-bold" style={{ backgroundColor: color }}>
                    {icon} {r.name}
                  </div>
                  <div className="p-6 text-center">
                    <div className="font-['Quicksand'] font-bold text-6xl mb-1" style={{ color }}>{km}</div>
                    <div className="font-['Quicksand'] font-bold text-xl mb-4" style={{ color }}>kilometer</div>
                    <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 text-sm">{r.description}</p>
                  </div>
                  <div className="border-t-2 border-dashed mx-4" style={{ borderColor: color + "40" }} />
                  <div className="p-3 text-center">
                    <span className="font-['Quicksand'] font-bold text-xs uppercase tracking-wider" style={{ color }}>
                      Avond4daagse Drunen 2026
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/routes" className="inline-flex items-center gap-2 font-['Quicksand'] font-bold text-[#E6007E] hover:text-[#cc006e] transition-colors">
            Bekijk alle routes met kaart &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

function RegistrationCTA({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative py-20 px-4 bg-[#E6007E]/5">
      <Bunting colors={["#E6007E", "#8CB808", "#2B9AC8"]} />
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-[#4A4A4A] mb-3">
          {title}
        </h2>
        <p className="font-['Source_Sans_3'] text-[#4A4A4A]/60 mb-8">
          {description}
        </p>
        <Link
          href="/inschrijven"
          className="inline-flex items-center justify-center px-12 py-5 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg"
          style={{ borderRadius: "4px 20px 4px 20px" }}
        >
          Ga naar inschrijven &rarr;
        </Link>
      </div>
    </section>
  );
}

function SponsorsSection({ sponsors }: { sponsors: SponsorContent[] }) {
  return (
    <section className="py-16 px-4 bg-[#FFF8F2]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-['Quicksand'] font-bold text-sm uppercase tracking-widest text-[#4A4A4A]/40 mb-8">
          Mede mogelijk gemaakt door
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {sponsors.map((s, i) => (
            <div key={s.name} className="bg-white h-20 flex items-center justify-center shadow-sm border-2 border-dashed border-[#E6007E]/15" style={{ borderRadius: "4px 12px 4px 12px", transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}>
              <span className="font-['Source_Sans_3'] font-medium text-[#4A4A4A]/40 text-sm">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/sponsors" className="inline-flex items-center gap-2 font-['Quicksand'] font-bold text-[#E6007E] hover:text-[#cc006e] transition-colors">
            Alle sponsors bekijken &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQPreview({ faqs }: { faqs: FAQContent[] }) {
  const previewFaqs = faqs.slice(0, 3);
  return (
    <section className="py-20 px-4 bg-[#9B1B5A]">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-['Quicksand'] font-bold text-3xl md:text-4xl text-center text-white mb-12">
          Veelgestelde vragen
        </h2>
        <div className="space-y-4">
          {previewFaqs.map((f, i) => (
            <details key={f.question} className="bg-[#FFF8F2] shadow-md group" style={{ borderRadius: "4px 16px 4px 16px", transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
              <summary className="cursor-pointer p-5 font-['Quicksand'] font-bold text-[#4A4A4A] flex justify-between items-center list-none">
                {f.question}
                <span className="text-[#E6007E] text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-5 pb-5 font-['Source_Sans_3'] text-[#4A4A4A]/70">{f.answer}</div>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/faq" className="inline-flex items-center gap-2 font-['Quicksand'] font-bold text-white hover:text-[#FFF8F2]/80 transition-colors">
            Alle veelgestelde vragen &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const homeContent = getHomeContent();
  const sponsors = getSponsors();
  const faqs = getFAQs();
  const routes = getRoutes();
  const settings = getSiteSettings();

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <Hero content={homeContent} />
      <InfoCards cards={homeContent.infoCards} />
      <Routes routes={routes} title={homeContent.routeSectionTitle} subtitle={homeContent.routeSectionSubtitle} />
      <RegistrationCTA title={homeContent.ctaTitle} description={homeContent.ctaDescription} />
      <SponsorsSection sponsors={sponsors} />
      <FAQPreview faqs={faqs} />
      <Footer settings={settings} />
    </div>
  );
}
