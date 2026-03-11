import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

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
      <body className={`${quicksand.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
