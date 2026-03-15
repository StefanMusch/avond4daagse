import Bunting from "./Bunting";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-16 overflow-hidden bg-[#FFF8F2]">
      <Bunting />

      <div className="max-w-4xl mx-auto px-4 pt-4 pb-16 text-center">
        <h1 className="font-['Quicksand'] font-bold text-4xl md:text-6xl text-[#4A4A4A] leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="font-['Source_Sans_3'] text-lg md:text-xl text-[#4A4A4A]/70 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Wavy divider */}
      <svg
        className="w-full -mb-1"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,60 480,0 720,30 C960,60 1200,10 1440,40 L1440,60 L0,60 Z"
          fill="#8CB808"
        />
      </svg>
    </section>
  );
}
