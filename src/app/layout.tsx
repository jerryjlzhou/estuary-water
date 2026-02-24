import "~/styles/globals.css";

import { type Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";

import { Navigation } from "~/app/_components/Navigation";
import { Footer } from "~/app/_components/Footer";

export const metadata: Metadata = {
  title: "Estuary Mineral Water | Premium Australian Mineral Water",
  description:
    "Naturally alkaline mineral water from the Snowy Mountains of Australia. Glass-bottled purity for premium hospitality and lifestyle.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
