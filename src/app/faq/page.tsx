"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const faqs = [
  {
    q: "Vanaf wanneer kan ik me inschrijven voor de Avond4daagse Drunen 2026?",
    a: "De inschrijving is open van 13 april tot en met 1 juni 2026.",
  },
  {
    q: "Hoe schrijf ik een gezin of groep in?",
    a: "Als eerste vul je de gegevens van het gezinshoofd of groepshoofd in die ook verantwoordelijk is voor de betaling. Geef aan of hij/zij meedoet als deelnemer of begeleider en vul verdere gegevens in. Daarna kun je op hetzelfde inschrijfformulier klikken op de button 'Deelnemer toevoegen' en het invullen van die gegevens wijst zichzelf.",
  },
  {
    q: "Ik kan een dag niet meelopen, kan ik toch meedoen?",
    a: "Ja hoor, als je om een goede reden verhinderd bent en maar drie dagen mee kunt lopen krijg je toch je medaille en diploma.",
  },
  {
    q: "Inschrijven lukt niet, ongeldig mailadres",
    a: "Neem contact op met het Startbureau via de contactpagina.",
  },
  {
    q: "Ik ontvang geen bevestigingsmail van de inschrijving.",
    a: "Het kan zijn dat de bevestigingsmail in uw map ongewenste mail/spam terecht is gekomen, of toch een foutje in het mailadres. Neem contact op met het inschrijfbureau.",
  },
  {
    q: "Krijgen kinderen een diploma en medaille als ze 1 dag niet meelopen?",
    a: "Ja hoor, als de kinderen 3 dagen meelopen krijgen ze toch een medaille en diploma.",
  },
  {
    q: "Mijn kind heeft geen e-mailadres, maar daar wordt wel om gevraagd.",
    a: "Als jij je als gezin/groep inschrijft, is het veld 'e-mailadres' bij de deelnemers niet verplicht. Deze kun je dus leeg laten.",
  },
  {
    q: "Hoe kan ik de opgegeven afstand wijzigen?",
    a: "Stuur een mailtje naar het Inschrijfbureau met naam en inschrijfnummer(s). De afstand wordt dan gewijzigd.",
  },
  {
    q: "Krijg ik als begeleider/ouder een medaille?",
    a: "Schrijf je in als Begeleider, dan krijg je geen medaille. Wens je wel een medaille, schrijf je dan in als Deelnemer.",
  },
  {
    q: "Gevonden voorwerpen",
    a: "Ben je iets verloren? Geef het door via het contactformulier; misschien is het bij de organisatie afgegeven.",
  },
];

const colors = ["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"];

export default function FAQPage() {
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
                  <span className="pr-4">{f.q}</span>
                  <span
                    className="text-2xl shrink-0 group-open:rotate-45 transition-transform"
                    style={{ color }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 font-['Source_Sans_3'] text-[#4A4A4A]/70 leading-relaxed">
                  {f.a}
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
