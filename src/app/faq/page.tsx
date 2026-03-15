import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { getFAQs } from "@/lib/content";

const colors = ["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"];

export default function FAQPage() {
  const faqs = getFAQs();

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero
        title="Veelgestelde vragen"
        subtitle="Alles wat je wilt weten"
      />

      <section className="py-16 px-4 bg-[#9B1B5A]">
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((f, i) => {
            const color = colors[i % colors.length];
            const rotation = ((i % 3) - 1) * 0.7;
            return (
              <details
                key={i}
                className="bg-[#FFF8F2] shadow-md group"
                style={{
                  borderRadius: "4px 16px 4px 16px",
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <summary className="cursor-pointer p-5 font-['Quicksand'] font-bold text-[#4A4A4A] flex justify-between items-center list-none border-l-4 border-dashed"
                  style={{ borderLeftColor: color }}
                >
                  <span className="pr-4">{f.question}</span>
                  <span
                    className="text-2xl shrink-0 group-open:rotate-45 transition-transform"
                    style={{ color }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 font-['Source_Sans_3'] text-[#4A4A4A]/70 leading-relaxed">
                  {f.answer}
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
