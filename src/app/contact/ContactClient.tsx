"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

interface Bureau {
  title: string;
  description: string;
  buttonText: string;
  email: string;
}

interface FooterSettings {
  address?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  kvk?: string;
  footerDescription?: string;
}

interface ContactClientProps {
  title: string;
  subtitle: string;
  bureaus: Bureau[];
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  footerSettings?: FooterSettings;
}

const cardColors = ["#E6007E", "#2B9AC8", "#8CB808"];
const cardRotations = ["-1.5deg", "1deg", "-1deg"];

export default function ContactClient({
  title,
  subtitle,
  bureaus,
  address,
  postalCode,
  phone,
  email,
  footerSettings,
}: ContactClientProps) {
  const [form, setForm] = useState({ naam: "", email: "", vraag: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will connect to Supabase later
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2]">
      <NavBar />
      <PageHero title={title} subtitle={subtitle} />

      {/* Contact cards */}
      <section className="py-16 px-4 bg-[#9B1B5A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {bureaus.map((b, i) => {
            const color = cardColors[i % cardColors.length];
            const rotate = cardRotations[i % cardRotations.length];
            const href = b.email
              ? `mailto:${b.email}`
              : "#contactform";
            return (
              <div
                key={b.title}
                className="bg-[#FFF8F2] p-8 shadow-lg border-2 border-dashed text-center hover:shadow-xl transition-shadow"
                style={{
                  borderColor: color,
                  borderRadius: "4px 20px 4px 20px",
                  transform: `rotate(${rotate})`,
                }}
              >
                <h3
                  className="font-['Quicksand'] font-bold text-xl mb-3"
                  style={{ color }}
                >
                  {b.title}
                </h3>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70 mb-6">
                  {b.description}
                </p>
                <a
                  href={href}
                  className="inline-block px-6 py-3 font-['Quicksand'] font-bold text-sm text-white transition-colors"
                  style={{
                    backgroundColor: color,
                    borderRadius: "4px 12px 4px 12px",
                  }}
                >
                  {b.buttonText}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact details */}
      <section className="py-16 px-4 bg-[#FFF8F2]">
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white p-8 shadow-lg border-2 border-dashed border-[#E6007E]/30 mb-12"
            style={{
              borderRadius: "20px 4px 20px 4px",
              transform: "rotate(0.5deg)",
            }}
          >
            <h3 className="font-['Quicksand'] font-bold text-xl text-[#4A4A4A] mb-4">
              Contactgegevens
            </h3>
            <div className="font-['Source_Sans_3'] text-[#4A4A4A]/80 space-y-2">
              <p className="font-semibold">
                Stichting Avond4daagse Drunen
              </p>
              <p>{address}, {postalCode}</p>
              <p>Tel: {phone}</p>
              <p>
                Penningmeester:{" "}
                <a
                  href={`mailto:penningmeester@avond4daagsedrunen.nl`}
                  className="text-[#E6007E] hover:underline"
                >
                  penningmeester@avond4daagsedrunen.nl
                </a>
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div id="contactform">
            <h2 className="font-['Quicksand'] font-bold text-3xl text-[#4A4A4A] mb-8 text-center">
              Stuur ons een bericht
            </h2>

            {submitted ? (
              <div
                className="bg-[#8CB808]/10 border-2 border-dashed border-[#8CB808] p-8 text-center"
                style={{
                  borderRadius: "4px 20px 4px 20px",
                  transform: "rotate(-0.5deg)",
                }}
              >
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="font-['Quicksand'] font-bold text-xl text-[#8CB808] mb-2">
                  Bedankt voor je bericht!
                </h3>
                <p className="font-['Source_Sans_3'] text-[#4A4A4A]/70">
                  We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 shadow-xl border-4"
                style={{
                  borderColor: "#E6007E",
                  borderRadius: "4px 20px 4px 20px",
                }}
              >
                <div className="mb-4">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">
                    Naam *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.naam}
                    onChange={(e) =>
                      setForm({ ...form, naam: e.target.value })
                    }
                    className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                    placeholder="Je naam"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors"
                    placeholder="je@email.nl"
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-['Quicksand'] font-bold text-[#4A4A4A] mb-1 text-sm">
                    Uw vraag *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.vraag}
                    onChange={(e) =>
                      setForm({ ...form, vraag: e.target.value })
                    }
                    className="w-full bg-white border-2 border-[#E6007E]/20 rounded-lg px-4 py-3 font-['Source_Sans_3'] focus:outline-none focus:border-[#E6007E] transition-colors resize-vertical"
                    placeholder="Stel hier je vraag..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-['Quicksand'] font-bold text-lg text-white bg-[#E6007E] hover:bg-[#cc006e] transition-colors shadow-lg"
                  style={{ borderRadius: "4px 16px 4px 16px" }}
                >
                  Versturen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer settings={footerSettings} />
    </div>
  );
}
