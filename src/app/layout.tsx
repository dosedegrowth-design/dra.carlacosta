import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

// Body — Plus Jakarta Sans (proxy moderna do Body Text Large)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Display — Cormorant Garamond (serif elegante, proxy da Lovelace)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3d4a3a" },
    { media: "(prefers-color-scheme: dark)", color: "#2c3629" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "anestesista São Paulo",
    "anestesiologia ambulatorial",
    "sedação consciente",
    "medicina da dor",
    "anestesista para clínicas",
    "anestesia dermatológica",
    "anestesia odontológica",
    "anestesia cirurgia plástica",
    "anestesia estética",
    "Dra. Carla Costa",
    "anestesista particular",
    "avaliação pré-anestésica",
    "sedação endovenosa",
    "anestesia bucomaxilofacial",
    "anestesiologia SP",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Healthcare",
  classification: "Medical Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Anestesiologia Ambulatorial`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
    creator: "@dracarlacostac",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/logo-carla.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/logo/logo-carla.png",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "São Paulo",
    "DC.title": SITE.name,
    "DC.creator": SITE.name,
    "DC.language": "pt-BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body>{children}</body>
    </html>
  );
}
