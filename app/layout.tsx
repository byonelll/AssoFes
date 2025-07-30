// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AssoFès – Associations étudiantes de Fès",
    template: "%s | AssoFès"
  },
  description:
    "AssoFès est la plateforme qui centralise toutes les associations étudiantes et initiatives communautaires de Fès. Trouvez facilement les associations, leurs événements et contacts.",
  keywords: [
    "associations étudiantes",
    "Fès",
    "universités",
    "Maroc",
    "étudiants",
    "clubs",
    "communauté",
  ],
  authors: [{ name: "AssoFès" }],
  creator: "AssoFès",
  publisher: "AssoFès",
  robots: {
    index: true,
    follow: true,
  },

  // SEO réseaux sociaux (Open Graph + Twitter)
  openGraph: {
    title: "AssoFès – Associations étudiantes de Fès",
    description:
      "Découvrez toutes les associations étudiantes et initiatives à Fès.",
    url: "https://associationfes.vercel.app",
    siteName: "AssoFès",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // à créer dans public/
        width: 1200,
        height: 630,
        alt: "AssoFès – Associations étudiantes de Fès",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AssoFès – Associations étudiantes de Fès",
    description:
      "Découvrez toutes les associations étudiantes et initiatives à Fès.",
    images: ["/og-image.jpg"], // même image que OpenGraph
    creator: "@assofes",
  },
  metadataBase: new URL("https://associationfes.vercel.app"), // ton domaine final
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
