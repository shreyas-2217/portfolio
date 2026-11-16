import { IBM_Plex_Mono, Lexend, Meow_Script, Reddit_Sans } from "next/font/google";
import BriefDialog from "@/components/BriefDialog";
import ClarityThread from "@/components/ClarityThread";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const sans = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const script = Meow_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-meow",
  display: "swap",
});

const accent = Reddit_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-reddit",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shreyas Melligeri — Analytics, Cloud & Applied AI",
  description:
    "Portfolio of Shreyas Melligeri, a BCA student at CHRIST, Bengaluru, building analytics tools and AI-assisted products.",
  keywords: [
    "Shreyas Melligeri",
    "data analyst",
    "cloud",
    "applied AI",
    "Python",
    "SQL",
    "portfolio",
  ],
  openGraph: {
    title: "Shreyas Melligeri — Analytics, Cloud & Applied AI",
    description:
      "I make sense of messy data — then build small, honest products with it.",
    type: "website",
    locale: "en_IN",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shreyas Melligeri — Analytics, Cloud & Applied AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyas Melligeri — Analytics, Cloud & Applied AI",
    description:
      "I make sense of messy data — then build small, honest products with it.",
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: "#fefefe",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${script.variable} ${accent.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <noscript>
          <style>{`.reveal-motion{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Cursor />
        <ScrollProgress />
        <ClarityThread />
        <SiteHeader />        <BriefDialog />
        {children}
      </body>
    </html>
  );
}
