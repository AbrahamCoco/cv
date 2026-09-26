import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abraham Cocoletzi — Ingeniero de Software",
  description:
    "Portafolio y currículum vitae de Abraham Cocoletzi Zempoalteca - Ingeniero de Software Full Stack Jr.",
  icons: {
    icon: "/cool.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-ink font-sans antialiased selection:bg-blue/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
