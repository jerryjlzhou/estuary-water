import "~/styles/globals.css";

import { type Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

import { Navigation } from "~/app/_components/Navigation";
import { Footer } from "~/app/_components/Footer";

const BASE_URL = "https://estuarywater.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Estuary Mineral Water | Premium Australian Mineral Water",
    template: "%s | Estuary Mineral Water",
  },
  description:
    "Naturally alkaline mineral water from the Snowy Mountains of Australia. Glass-bottled purity for premium hospitality, sport, and lifestyle.",
  keywords: [
    "mineral water",
    "Australian mineral water",
    "premium water",
    "glass bottled water",
    "alkaline water",
    "Snowy Mountains water",
    "hospitality water",
    "Estuary Water",
  ],
  authors: [{ name: "Estuary Mineral Water" }],
  creator: "Estuary Mineral Water",
  icons: [
    { rel: "icon", url: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: BASE_URL,
    siteName: "Estuary Mineral Water",
    title: "Estuary Mineral Water | Premium Australian Mineral Water",
    description:
      "Naturally alkaline mineral water from the Snowy Mountains of Australia. Glass-bottled purity for premium hospitality, sport, and lifestyle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estuary Mineral Water | Premium Australian Mineral Water",
    description:
      "Naturally alkaline mineral water from the Snowy Mountains of Australia. Glass-bottled purity for premium hospitality, sport, and lifestyle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
