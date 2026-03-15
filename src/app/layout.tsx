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
  title: "Avondvierdaagse Drunen — Héél Drunen wandelt weer!",
  description:
    "De 57e editie van de Avondvierdaagse Drunen. 2 t/m 5 juni 2026. Kies uit 3, 5 of 7,5 kilometer.",
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
