import type { Metadata } from "next";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import LogoIntro from "@/components/LogoIntro";
import ScrollToTop from "@/components/ScrollToTop";

import { Outfit } from "next/font/google";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Gloock } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
// 1. Configure the primary font (Playfair Display)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
});

// 2. Configure a secondary font (Outfit) for more modern text
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Phong | Photography Portfolio",
  description: "A dynamic and collaborative photography portfolio",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    return null;
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${playfair.variable} ${gloock.variable} ${outfit.variable}`}
    >
      <body className="antialiased min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <LogoIntro />
          <CustomCursor />
          <ScrollToTop />
          <SmoothScrolling>
            <Navbar />
            {children}
            <Analytics />
          </SmoothScrolling>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
