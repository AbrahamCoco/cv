import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data/profile";
import { PersonJsonLd } from "@/components/PersonJsonLd";
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

// TODO: replace with your real production domain once you have one —
// this is required for Next to resolve absolute OG/Twitter image URLs
// and is used by sitemap.ts / robots.ts too.
const SITE_URL = "https://abrahamcocoletzi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: `${profile.shortBio} Portafolio y currículum de ${profile.name}, ${profile.title} en ${profile.location}.`,
  keywords: [
    "Abraham Cocoletzi",
    "Ingeniero de Software Full Stack",
    "Desarrollador Full Stack Tlaxcala",
    "Java Spring Boot",
    "React Next.js",
    "Portafolio desarrollador",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  icons: {
    icon: "/cool.png",
  },
  openGraph: {
    type: "profile",
    locale: "es_MX",
    url: SITE_URL,
    siteName: `${profile.name} — Portafolio`,
    title: `${profile.name} — ${profile.title}`,
    description: profile.shortBio,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.shortBio,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-panel focus:px-4 focus:py-2 focus:text-ink focus:border focus:border-border"
        >
          Saltar al contenido principal
        </a>
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
