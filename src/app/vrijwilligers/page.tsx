import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getVolunteerGroups, getPageContent, getSiteSettings } from "@/lib/content";

const groupColors = ["#E6007E", "#2B9AC8", "#8CB808", "#9B1B5A", "#2B9AC8", "#E6007E", "#8CB808"];
const groupRotations = ["-1.5deg", "1deg", "-0.5deg", "1.5deg", "-1deg", "0.5deg", "-1.5deg"];

export default function VrijwilligersPage() {
  const groups = getVolunteerGroups();
  const pageContent = getPageContent("vrijwilligers");
  const settings = getSiteSettings();

  const title = pageContent?.title ?? "Vrijwilligers";
  const subtitle = pageContent?.subtitle ?? "Meer dan honderd mensen maken het mogelijk";
  const ctaTitle = pageContent?.ctaTitle ?? "Wil jij ook graag helpen?";
  const ctaDescription = pageContent?.ctaDescription ?? "Meldt je als vrijwilliger bij onze secretaris,";
  const ctaContactName = pageContent?.ctaContactName ?? "Nicole Bakker";
  const ctaContactPhone = pageContent?.ctaContactPhone ?? "06-17891087";

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title={title} subtitle={subtitle} />

      {/* Content sections */}
      <section className="relative py-20 px-4 bg-[#9B1B5A]">
        <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#9B1B5A" />
        </svg>

        <div className="max-w-4xl mx-auto pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            {groups.map((s, i) => (
              <div
                key={s.name}
                className={`bg-[#FFF8F2] p-8 shadow-lg ${i === groups.length - 1 && groups.length % 2 !== 0 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""}`}
                style={{
                  borderRadius: "4px 20px 4px 20px",
                  transform: `rotate(${groupRotations[i % groupRotations.length]})`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0 text-2xl"
                    style={{ backgroundColor: groupColors[i % groupColors.length], borderRadius: "4px 12px 4px 12px" }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A]">{s.name}</h3>
                </div>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 leading-relaxed">{s.description}</p>
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
              {ctaTitle}
            </h2>
            <p className="font-['Source_Sans_3'] text-white/80 mb-3 text-lg">
              {ctaDescription}
            </p>
            <p className="font-['Quicksand'] font-bold text-xl mb-6">
              {ctaContactName} &mdash; {ctaContactPhone}
            </p>
            <a
              href={`tel:${ctaContactPhone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center px-10 py-5 font-['Quicksand'] font-bold text-lg text-[#8CB808] bg-white hover:bg-[#FFF8F2] transition-colors shadow-lg"
              style={{ borderRadius: "4px 20px 4px 20px" }}
            >
              Word vrijwilliger
            </a>
          </div>
        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
