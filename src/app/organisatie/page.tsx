import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getBoardMembers, getPageContent, getSiteSettings } from "@/lib/content";

const colors = ["#E6007E", "#2B9AC8", "#8CB808", "#9B1B5A"];
const rotations = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg", "-2deg", "1.5deg"];

export default function OrganisatiePage() {
  const bestuursleden = getBoardMembers();
  const page = getPageContent("organisatie");
  const settings = getSiteSettings();

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero
        title={page?.title ?? "Organisatie"}
        subtitle={page?.subtitle ?? "Stichting Avond4daagse Drunen"}
      />

      {/* Over de stichting */}
      <section className="py-16 px-4 bg-[#9B1B5A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-white mb-6 text-center">
            Over de stichting
          </h2>
          <div
            className="bg-[#FFF8F2] p-8 shadow-lg border-2 border-dashed border-[#E6007E]/30"
            style={{
              borderRadius: "4px 20px 4px 20px",
              transform: "rotate(-0.5deg)",
            }}
          >
            <p className="font-['Source_Sans_3'] text-[#4A4A4A] text-lg leading-relaxed">
              {page?.aboutText ??
                "De stichting is opgericht in 2010. De organiserende partijen besloten een juridisch zelfstandige organisatie op te richten, opdat een organisatie zou ontstaan die kan zorgen voor meer continu\u00EFteit."}
            </p>
          </div>
        </div>
      </section>

      {/* Historie */}
      <section className="py-16 px-4 bg-[#FFF8F2]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-[#4A4A4A] mb-6 text-center">
            Historie
          </h2>
          <div
            className="bg-white p-8 shadow-lg border-2 border-dashed border-[#8CB808]/40"
            style={{
              borderRadius: "20px 4px 20px 4px",
              transform: "rotate(0.5deg)",
            }}
          >
            <p className="font-['Source_Sans_3'] text-[#4A4A4A] text-lg leading-relaxed">
              {page?.historyText ??
                "De avond4daagse heeft in Drunen een lange historie en is ontstaan in de periode dat de Duinrakkers een wandelclub was in Drunen. Sindsdien zijn veel mensen bij de organisatie betrokken geweest."}
            </p>
          </div>
        </div>
      </section>

      {/* Bestuur */}
      <section className="py-16 px-4 bg-[#8CB808]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-white mb-12 text-center">
            Bestuur
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestuursleden.map((lid, i) => {
              const color = colors[i % colors.length];
              const rotate = rotations[i % rotations.length];
              return (
                <div
                  key={lid.name}
                  className="bg-[#FFF8F2] p-6 shadow-lg border-2 border-dashed hover:shadow-xl transition-shadow"
                  style={{
                    borderColor: color,
                    borderRadius: "4px 16px 4px 16px",
                    transform: `rotate(${rotate})`,
                  }}
                >
                  {/* Avatar placeholder */}
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-['Quicksand'] font-bold text-xl"
                    style={{ backgroundColor: color }}
                  >
                    {lid.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h3 className="font-['Quicksand'] font-bold text-lg text-[#4A4A4A] text-center mb-1">
                    {lid.name}
                  </h3>
                  <p
                    className="font-['Source_Sans_3'] text-sm text-center font-semibold"
                    style={{ color }}
                  >
                    {lid.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speciale vermelding */}
      <section className="py-16 px-4 bg-[#FFF8F2]">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="bg-white p-8 shadow-lg border-4 border-[#E6007E]"
            style={{
              borderRadius: "4px 20px 4px 20px",
              transform: "rotate(-1deg)",
            }}
          >
            <div className="text-4xl mb-4">&#9733;</div>
            <p className="font-['Source_Sans_3'] text-[#4A4A4A] text-lg leading-relaxed">
              {page?.specialMention ??
                "Speciale aandacht gaat uit naar onze routebouwer, Jo Leijtens, hij dient de avond4daagse al ruim 45 jaar."}
            </p>
          </div>
        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
