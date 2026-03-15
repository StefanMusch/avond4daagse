import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Avondvierdaagse Drunen
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          5 opties &mdash; welke wordt het?
        </p>
        <div className="grid gap-6">
          <Link
            href="/stijl-2"
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4"
            style={{ borderLeftColor: "#E85D2A" }}
          >
            <div className="flex gap-3 mb-3 justify-center">
              <span className="w-8 h-8 rounded-full" style={{ background: "#E85D2A" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#2B6B4F" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#F5C842" }} />
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "#E85D2A" }}>
              Origineel &mdash; Terracotta &amp; Bosgroen
            </h2>
            <p className="text-gray-500 text-sm">Warm &amp; Gezellig layout</p>
          </Link>

          <Link
            href="/stijl-2a"
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4"
            style={{ borderLeftColor: "#C2185B" }}
          >
            <div className="flex gap-3 mb-3 justify-center">
              <span className="w-8 h-8 rounded-full" style={{ background: "#C2185B" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#5C8A6E" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#F4B942" }} />
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "#C2185B" }}>
              Framboos &amp; Salie
            </h2>
            <p className="text-gray-500 text-sm">Warm &amp; Gezellig layout, andere kleuren</p>
          </Link>

          <Link
            href="/stijl-3"
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4"
            style={{ borderLeftColor: "#E8A547" }}
          >
            <div className="flex gap-3 mb-3 justify-center">
              <span className="w-8 h-8 rounded-full" style={{ background: "#E8A547" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#D4573B" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#3A7D5C" }} />
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "#D4573B" }}>
              Dorpsfeest &mdash; Vlaggetjes &amp; Slingers
            </h2>
            <p className="text-gray-500 text-sm">Feestelijke kermis-sfeer, gebogen secties, speelse kaarten</p>
          </Link>

          <Link
            href="/stijl-3a"
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4"
            style={{ borderLeftColor: "#E6007E" }}
          >
            <div className="flex gap-3 mb-3 justify-center">
              <span className="w-8 h-8 rounded-full" style={{ background: "#E6007E" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#9B1B5A" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#8CB808" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#2B9AC8" }} />
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "#E6007E" }}>
              Dorpsfeest &mdash; Logokleuren
            </h2>
            <p className="text-gray-500 text-sm">Stijl 3 met officieel logo + kleuren, &quot;Drunen&quot; verwerkt</p>
          </Link>

          <Link
            href="/stijl-4"
            className="block p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow border-l-4"
            style={{ borderLeftColor: "#5B4A8A" }}
          >
            <div className="flex gap-3 mb-3 justify-center">
              <span className="w-8 h-8 rounded-full" style={{ background: "#2D3B55" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#E8773A" }} />
              <span className="w-8 h-8 rounded-full" style={{ background: "#F5C84C" }} />
            </div>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "#2D3B55" }}>
              Avondwandeling &mdash; Zonsondergang
            </h2>
            <p className="text-gray-500 text-sm">Schemering-sfeer, lantaarns, wandelpad door de pagina</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
