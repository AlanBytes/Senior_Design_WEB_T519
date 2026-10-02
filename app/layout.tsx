import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Interactive Automated Kitting and Fulfillment System | T520",
  description:
    "T520 senior design project at the FAMU-FSU College of Engineering, 2026–2027, sponsored by Rockwell Automation: a portable automated system that kits, verifies, packages, and labels LEGO-style builds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable} antialiased`}>
      <body className="min-h-full">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
