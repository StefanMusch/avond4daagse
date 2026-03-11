import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avondvierdaagse Drunen — Vergelijk Huisstijlen",
  description: "Kies een huisstijl voor de Avondvierdaagse Drunen website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
