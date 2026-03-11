"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Er ging iets mis</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg"
        >
          Probeer opnieuw
        </button>
      </div>
    </div>
  );
}
