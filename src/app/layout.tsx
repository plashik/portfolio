import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { ButtonGlowSync } from "@/components/ButtonGlowSync";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description: `${site.focusLine}. ${site.tagline}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ButtonGlowSync />
        {children}
      </body>
    </html>
  );
}
