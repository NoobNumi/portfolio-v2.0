import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niña Gillian Villamin - Portfolio",
  description: "A showcase of my work and skills",
  keywords: ["portfolio", "web development", "programming"],
  authors: [
    {
      name: "Niña Gillian Villamin - Portfolio",
      url: "https://github.com/NoobNumi",
    },
  ],
  openGraph: {
    title: "Nin's Portfolio",
    description: "A showcase of my work and skills",
    url: "http://ninv.me/",
    siteName: "Niña Gillian Villamin - Portfolio",
    images: [
      {
        url: "/logo_new.png",
        width: 1200,
        height: 630,
        alt: "Niña Gillian Villamin - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
