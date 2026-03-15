import Image from "next/image";
import Link from "next/link";
import Bunting from "./Bunting";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Routes", href: "/routes" },
  { label: "Inschrijven", href: "/inschrijven" },
  { label: "Vrijwilligers", href: "/vrijwilligers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

interface FooterProps {
  settings?: {
    address?: string;
    postalCode?: string;
    phone?: string;
    email?: string;
    kvk?: string;
    footerDescription?: string;
  };
}

export default function Footer({ settings }: FooterProps = {}) {
  const address = settings?.address ?? "Rijnring 32";
  const postalCode = settings?.postalCode ?? "5152 RA Drunen";
  const phone = settings?.phone ?? "06-17891087";
  const email = settings?.email ?? "info@avondvierdaagsedrunen.nl";
  const kvk = settings?.kvk ?? "52048659";
  const description =
    settings?.footerDescription ??
    "Het gezelligste wandelfeest van de Langstraat. Al 57 jaar lang brengt de Avondvierdaagse Drunen jong en oud samen voor vier avonden wandelplezier!";

  return (
    <footer className="relative bg-[#3A3A3A] text-white pt-2">
      <Bunting colors={["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"]} />

      <div className="max-w-5xl mx-auto px-4 pb-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Avond4daagse"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="font-['Quicksand'] font-bold text-sm text-[#2B9AC8]">
              Drunen
            </span>
          </div>
          <p className="font-['Source_Sans_3'] text-white/50 text-sm">
            {description}
          </p>
        </div>

        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">
            Snel naar
          </h3>
          <div className="space-y-2 font-['Source_Sans_3'] text-sm text-white/50">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block hover:text-[#E6007E] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-['Quicksand'] font-bold text-lg mb-4">
            Contact
          </h3>
          <div className="font-['Source_Sans_3'] text-sm text-white/50 space-y-1">
            <p>Stichting Avondvierdaagse Drunen</p>
            <p>{address}</p>
            <p>{postalCode}</p>
            <p className="mt-3">
              <a
                href={`tel:${phone.replace(/-/g, "")}`}
                className="hover:text-[#E6007E] transition-colors"
              >
                {phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${email}`}
                className="hover:text-[#E6007E] transition-colors"
              >
                {email}
              </a>
            </p>
            <p className="mt-3 text-white/30">KvK: {kvk}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center font-['Source_Sans_3'] text-xs text-white/30">
        &copy; 2026 Stichting Avondvierdaagse Drunen
      </div>
    </footer>
  );
}
