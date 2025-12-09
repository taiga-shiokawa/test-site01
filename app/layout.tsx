import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"]
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Lustre Nail Atelier",
  description: "恵比寿のプライベートネイルサロン。質感と艶にこだわったデザインで、指先から気分を上げるサロンサイト。"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
