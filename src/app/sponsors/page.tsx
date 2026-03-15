"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const sponsors = [
  "Bakker Allard",
  "Bloemist van Brunschot",
  "Albert Heijn",
  "SNS Bank",
  "Van Bokhoven",
  "Van Erp Containers",
  "Jumbo",
  "Natuurmonumenten",
  "NGCM",
  "NS Wandelbewust",
  "Rabobank",
  "Moop",
  "Hydro Aluminium",
  "De Harlekijn",
  "Klerks Financiele Diensten",
];

const colors = ["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero
        title="Sponsors"
        subtitle="Zonder hen is het niet mogelijk"
      />

      {/* Intro */}
      <section className="py-16 px-4 bg-[#9B1B5A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-['Source_Sans_3'] text-white/90 text-lg leading-relaxed">
            Hieronder een overzicht van onze sponsors. Zonder onze sponsors is
            de organisatie van onze Avond4daagse niet mogelijk.
          </p>
        </div>
      </section>

      {/* Sponsor grid */}
      <section className="py-16 px-4 bg-[#FFF8F2]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors.map((sponsor, i) => {
              const color = colors[i % colors.length];
              const rotation = ((i % 5) - 2) * 1.2;
              return (
                <div
                  key={sponsor}
                  className="bg-white h-28 flex items-center justify-center shadow-md border-2 border-dashed hover:shadow-lg transition-shadow"
                  style={{
                    borderColor: color,
                    borderRadius:
                      i % 2 === 0
                        ? "4px 16px 4px 16px"
                        : "16px 4px 16px 4px",
                    transform: `rotate(${rotation}deg)`,
                  }}
                >
                  <span className="font-['Source_Sans_3'] font-semibold text-[#4A4A4A]/50 text-sm text-center px-3">
                    {sponsor}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#8CB808]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-white mb-4">
            Word sponsor van de Avond4daagse Drunen!
          </h2>
          <p className="font-['Source_Sans_3'] text-white/90 text-lg mb-8">
            Neem contact op met Sandra van den Hoven of Christel Brok-Stravers
            via ons contactformulier.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg"
            style={{ borderRadius: "4px 20px 4px 20px" }}
          >
            Neem contact op
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
