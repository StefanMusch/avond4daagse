"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const tabs = [
  { id: "2025", label: "2025 - 56e editie" },
  { id: "historie", label: "Door de jaren heen" },
];

const fotoDagen = [
  { dag: "Dinsdag", datum: "20-05-2025", fotos: 12 },
  { dag: "Woensdag", datum: "21-05-2025", fotos: 12 },
  { dag: "Donderdag", datum: "22-05-2025", fotos: 12 },
  { dag: "Vrijdag", datum: "23-05-2025", fotos: 12 },
];

const colors = ["#E6007E", "#2B9AC8", "#8CB808", "#9B1B5A"];

export default function FotosPage() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title="Foto's" subtitle="Herinneringen aan de Avond4daagse" />

      <section className="relative py-20 px-4 bg-[#9B1B5A]">
        <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#9B1B5A" />
        </svg>

        <div className="max-w-5xl mx-auto pt-8">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 font-['Quicksand'] font-bold text-lg transition-all ${
                  activeTab === tab.id
                    ? "bg-[#FFF8F2] text-[#E6007E] shadow-lg"
                    : "bg-transparent text-white/60 border-2 border-dashed border-white/30 hover:border-white/60"
                }`}
                style={{ borderRadius: "4px 16px 4px 16px" }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 2025 tab content */}
          {activeTab === "2025" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fotoDagen.map((d, i) => (
                <div
                  key={d.datum}
                  className="bg-[#FFF8F2] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                  style={{
                    borderRadius: "4px 20px 4px 20px",
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                  }}
                >
                  {/* Photo placeholder */}
                  <div className="aspect-[4/3] bg-[#E8E8E8] flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-10" style={{ background: `linear-gradient(135deg, ${colors[i]}22, ${colors[i]}44)` }} />
                    <svg
                      className="w-12 h-12 mb-2 transition-transform group-hover:scale-110"
                      style={{ color: colors[i] }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-['Source_Sans_3'] text-[#4A4A4A]/30 text-sm">Foto&apos;s volgen</span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-['Quicksand'] font-bold text-[#4A4A4A]">{d.dag}</h3>
                        <p className="font-['Source_Sans_3'] text-sm text-[#4A4A4A]/50">{d.datum}</p>
                      </div>
                      <span
                        className="font-['Quicksand'] font-bold text-xs px-3 py-1 border-2 border-dashed"
                        style={{ borderColor: colors[i], color: colors[i], borderRadius: "4px 8px 4px 8px" }}
                      >
                        {d.fotos} foto&apos;s
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Historie tab content */}
          {activeTab === "historie" && (
            <div className="text-center py-16">
              <div
                className="bg-[#FFF8F2] inline-block p-12 shadow-lg"
                style={{ borderRadius: "4px 20px 4px 20px", transform: "rotate(-1deg)" }}
              >
                <svg className="w-16 h-16 mx-auto mb-4 text-[#E6007E]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-2">
                  Binnenkort beschikbaar
                </h3>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/50">
                  We zijn bezig met het digitaliseren van foto&apos;s uit eerdere edities.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
