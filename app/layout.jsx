import React from "react";
import "./globals.css";
import { Roboto, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "@/store/Providers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const fair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-fair",
});

const lpmq = localFont({
  src: "../public/fonts/LPMQ.ttf",
  variable: "--font-lpmq",
});

const surahName = localFont({
  src: "../public/fonts/surah-name.ttf",
  variable: "--font-surahName",
});

export const metadata = {
  title: "The Noble Quran",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-py-24">
      <body className={`${roboto.variable} ${fair.variable} ${lpmq.variable} ${surahName.variable} font-roboto`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
