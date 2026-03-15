"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/routes" },
  { label: "Inschrijven", href: "/inschrijven" },
  { label: "Vrijwilligers", href: "/vrijwilligers" },
  { label: "Foto's", href: "/fotos" },
  { label: "Organisatie", href: "/organisatie" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF8F2]/95 backdrop-blur-md border-b-2 border-dashed border-[#E6007E]/20">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Avond4daagse Drunen"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-['Quicksand'] text-sm font-bold text-[#4A4A4A] hover:text-[#E6007E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6 text-[#E6007E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FFF8F2] border-t-2 border-dashed border-[#E6007E]/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-['Quicksand'] font-bold text-[#4A4A4A] hover:text-[#E6007E]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
