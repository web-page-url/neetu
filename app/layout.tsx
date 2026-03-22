import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Neetu | Aspiring Educator",
  description: "Neetu  | Aspiring Educator. Dedicated and Passionate Aspiring Educator.",
  keywords: ["Neetu", "Aspiring Educator", "Geography Teacher", "History Teacher", "B.Ed Candidate", "Portfolio", "Educator"],
  authors: [{ name: "Neetu " }],
  metadataBase: new URL("https://neetu.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neetu | Aspiring Educator",
    description: "Dedicated and passionate aspiring educator currently pursuing Bachelor of Education (B.Ed.).",
    url: "https://neetu.vercel.app",
    siteName: "Neetu's Portfolio",
    images: [
      {
        url: "/generated/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neetu Kannaujiya Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neetu Kannaujiya | Aspiring Educator",
    description: "Dedicated and passionate aspiring educator. Aspiring teacher dedicated to student growth.",
    images: ["/generated/og-image.jpg"],
  },
  icons: {
    icon: "/generated/favicon-32x32.png",
    shortcut: "/generated/favicon-32x32.png",
    apple: "/generated/apple-touch-icon.png",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${quicksand.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
