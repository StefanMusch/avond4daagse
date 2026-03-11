import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Pagina niet gevonden</h2>
        <Link href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg inline-block">
          Terug naar overzicht
        </Link>
      </div>
    </div>
  );
}
