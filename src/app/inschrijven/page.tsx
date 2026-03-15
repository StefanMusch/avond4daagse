"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

interface Deelnemer {
  id: number;
  type: "deelnemer" | "begeleider";
  voornaam: string;
  achternaam: string;
  email: string;
  geboortedatum: string;
  afstand: string;
}

function createEmptyDeelnemer(id: number): Deelnemer {
  return { id, type: "deelnemer", voornaam: "", achternaam: "", email: "", geboortedatum: "", afstand: "" };
}

export default function InschrijvenPage() {
  const [deelnemers, setDeelnemers] = useState<Deelnemer[]>([createEmptyDeelnemer(1)]);

  const addDeelnemer = () => {
    setDeelnemers((prev) => [...prev, createEmptyDeelnemer(prev.length + 1)]);
  };

  const updateDeelnemer = (id: number, field: keyof Deelnemer, value: string) => {
    setDeelnemers((prev) => prev.map((d) => (d.id === id ? { ...d, [field]: value } : d)));
  };

  const afstanden = [
    { value: "3", label: "3 km", color: "#2B9AC8" },
    { value: "5", label: "5 km", color: "#E6007E" },
    { value: "7.5", label: "7,5 km", color: "#8CB808" },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title="Inschrijven" subtitle="Schrijf je in voor de 57e editie" />

      {/* Important info section */}
      <section className="relative py-16 px-4 bg-[#9B1B5A]">
        <svg className="absolute top-0 left-0 w-full -mt-1" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 L0,20 C240,50 480,0 720,30 C960,50 1200,10 1440,20 L1440,0 Z" fill="#9B1B5A" />
        </svg>

        <div className="max-w-3xl mx-auto pt-4">
          <div
            className="bg-[#FFF8F2] p-8 shadow-xl border-4 border-[#E6007E]"
            style={{ borderRadius: "4px 20px 4px 20px" }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#E6007E]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E6007E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-3">Belangrijke informatie</h3>
                <ul className="space-y-3 font-['Source_Sans_3'] text-[#4A4A4A]/80">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#8CB808] flex-shrink-0" />
                    De inschrijving is open van <strong>13 april</strong> tot en met <strong>1 juni 2026</strong>.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#2B9AC8] flex-shrink-0" />
                    Er is <strong>g&eacute;&eacute;n</strong> mogelijkheid om in te schrijven op 2 juni bij het Startbureau.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#E6007E] flex-shrink-0" />
                    <span className="font-bold text-[#E6007E]">
                      TIJDENS DE WANDELDAGEN (2 juni TOT EN MET 5 juni 2026) KAN ER NIET MEER WORDEN INGESCHREVEN!!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section className="py-20 px-4 bg-[#FFF8F2]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Quicksand'] font-bold text-3xl text-center text-[#4A4A4A] mb-3">
            Inschrijfformulier
          </h2>
          <p className="font-['Source_Sans_3'] text-center text-[#4A4A4A]/60 mb-10">
            Vul onderstaande gegevens in voor alle deelnemers.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {deelnemers.map((d, index) => (
              <div
                key={d.id}
                className="bg-white p-8 shadow-lg border-2 border-dashed border-[#E6007E]/30 mb-8"
                style={{ borderRadius: "4px 20px 4px 20px", transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-['Quicksand'] font-bold text-lg text-[#4A4A4A]">
                    Deelnemer {index + 1}
                  </h3>
                  <span
                    className="font-['Quicksand'] font-bold text-xs uppercase tracking-wider px-3 py-1 border-2 border-dashed"
                    style={{
                      borderColor: d.type === "begeleider" ? "#8CB808" : "#E6007E",
                      color: d.type === "begeleider" ? "#8CB808" : "#E6007E",
                      borderRadius: "4px 12px 4px 12px",
                    }}
                  >
                    {d.type}
                  </span>
                </div>

                {/* Type selection */}
                <div className="mb-5">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-2 text-sm">Type</label>
                  <div className="flex gap-4">
                    {(["deelnemer", "begeleider"] as const).map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={`type-${d.id}`}
                          value={type}
                          checked={d.type === type}
                          onChange={() => updateDeelnemer(d.id, "type", type)}
                          className="accent-[#E6007E]"
                        />
                        <span className="font-['Source_Sans_3'] text-[#4A4A4A] capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name fields */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Voornaam</label>
                    <input
                      type="text"
                      value={d.voornaam}
                      onChange={(e) => updateDeelnemer(d.id, "voornaam", e.target.value)}
                      className="w-full bg-[#FFF8F2] border-2 border-[#E6007E]/20 px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                      style={{ borderRadius: "4px 12px 4px 12px" }}
                      placeholder="Jan"
                    />
                  </div>
                  <div>
                    <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Achternaam</label>
                    <input
                      type="text"
                      value={d.achternaam}
                      onChange={(e) => updateDeelnemer(d.id, "achternaam", e.target.value)}
                      className="w-full bg-[#FFF8F2] border-2 border-[#E6007E]/20 px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                      style={{ borderRadius: "4px 12px 4px 12px" }}
                      placeholder="de Wandelaar"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">E-mailadres</label>
                  <input
                    type="email"
                    value={d.email}
                    onChange={(e) => updateDeelnemer(d.id, "email", e.target.value)}
                    className="w-full bg-[#FFF8F2] border-2 border-[#E6007E]/20 px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                    style={{ borderRadius: "4px 12px 4px 12px" }}
                    placeholder="jan@voorbeeld.nl"
                  />
                </div>

                {/* Geboortedatum */}
                <div className="mb-5">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">Geboortedatum</label>
                  <input
                    type="date"
                    value={d.geboortedatum}
                    onChange={(e) => updateDeelnemer(d.id, "geboortedatum", e.target.value)}
                    className="w-full bg-[#FFF8F2] border-2 border-[#E6007E]/20 px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                    style={{ borderRadius: "4px 12px 4px 12px" }}
                  />
                </div>

                {/* Afstand keuze */}
                <div>
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-2 text-sm">Welke afstand?</label>
                  <div className="flex gap-3">
                    {afstanden.map((opt) => (
                      <label key={opt.value} className="flex-1 cursor-pointer">
                        <input
                          type="radio"
                          name={`afstand-${d.id}`}
                          value={opt.value}
                          checked={d.afstand === opt.value}
                          onChange={() => updateDeelnemer(d.id, "afstand", opt.value)}
                          className="peer hidden"
                        />
                        <div
                          className="text-center py-3 px-2 border-2 border-dashed border-gray-300 bg-[#FFF8F2] font-['Quicksand'] font-bold peer-checked:border-solid transition-all"
                          style={{
                            borderRadius: "4px 12px 4px 12px",
                            ...(d.afstand === opt.value ? { borderColor: opt.color, color: opt.color } : {}),
                          }}
                        >
                          <div className="text-2xl font-bold">{opt.label.split(" ")[0]}</div>
                          <div className="text-xs text-[#4A4A4A]/60">km</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Add deelnemer button */}
            <div className="text-center mb-8">
              <button
                type="button"
                onClick={addDeelnemer}
                className="inline-flex items-center gap-2 px-8 py-4 font-['Quicksand'] font-bold text-[#E6007E] border-3 border-dashed border-[#E6007E] hover:bg-[#E6007E]/5 transition-colors"
                style={{ borderRadius: "4px 20px 4px 20px", borderWidth: "3px" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Deelnemer toevoegen
              </button>
            </div>

            {/* Payment info */}
            <div
              className="bg-[#8CB808]/10 p-6 mb-8 border-2 border-dashed border-[#8CB808]/30"
              style={{ borderRadius: "4px 16px 4px 16px" }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-[#8CB808] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70">
                  Betalen kan eenvoudig en veilig met <strong className="text-[#4A4A4A]">iDeal</strong>.
                </p>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-5 font-['Quicksand'] font-bold text-xl text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg"
              style={{ borderRadius: "4px 20px 4px 20px" }}
            >
              Inschrijven &amp; Betalen
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
