import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertio.com.au"),
  title: "Vertio | Digital Health Compliance Platform",
  description:
    "Digital Health Compliance. Accelerated. Assured. Integrate with Australia's digital health ecosystem faster, without compromising confidence.",
  keywords: [
    "digital health",
    "health compliance",
    "Australia",
    "My Health Record",
    "healthcare API",
    "medical software compliance",
    "health tech",
  ],
  authors: [{ name: "Vertio" }],
  creator: "Vertio",
  publisher: "Vertio",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://vertio.com.au",
    siteName: "Vertio",
    title: "Vertio | Digital Health Compliance Platform",
    description:
      "Digital Health Compliance. Accelerated. Assured. Integrate with Australia's digital health ecosystem faster.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vertio - Digital Health Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertio | Digital Health Compliance Platform",
    description:
      "Digital Health Compliance. Accelerated. Assured. Integrate with Australia's digital health ecosystem faster.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
