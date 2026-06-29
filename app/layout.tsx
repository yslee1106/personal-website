import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://leeyingsheng.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lee Ying Sheng — ECE @ SJTU",
  description:
    "Lee Ying Sheng — Electrical & Computer Engineering student at Shanghai Jiao Tong University, building across platforms, hardware, and AI. Projects, awards, and contact.",
  keywords: [
    "Lee Ying Sheng",
    "SJTU",
    "Electrical and Computer Engineering",
    "LaowaiCentral",
    "Product Manager",
    "Portfolio",
  ],
  authors: [{ name: "Lee Ying Sheng" }],
  openGraph: {
    title: "Lee Ying Sheng — ECE @ SJTU",
    description:
      "Building across platforms, hardware, and AI — projects, awards, and contact.",
    url: siteUrl,
    siteName: "Lee Ying Sheng",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Ying Sheng — ECE @ SJTU",
    description:
      "Building across platforms, hardware, and AI — projects, awards, and contact.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFCFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
