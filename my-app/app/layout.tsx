import type { Metadata } from "next";
import { Geist, Geist_Mono, Kaisei_Decol, Outfit, Cinzel } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raku Harashima | Component Actor",
  description: "Portfolio of Raku Harashima, a Japanese actor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kaiseiDecol.variable} ${outfit.variable} ${cinzel.variable} antialiased font-sans text-slate-900 bg-slate-50 selection:bg-blue-200 cursor-none`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
