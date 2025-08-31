import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "plyr/dist/plyr.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Niña Gillian Villamin - Web Developer Portfolio",
  description:
    "Explore the portfolio of Niña Gillian Villamin, a passionate web developer specializing in modern web technologies and creative solutions.",
  keywords: [
    "Niña Gillian Villamin",
    "portfolio",
    "web developer",
    "frontend",
    "JavaScript",
    "React",
    "Next.js",
    "programming",
    "UI/UX",
  ],
  authors: [
    {
      name: "Niña Gillian Villamin",
      url: "https://github.com/NoobNumi",
    },
  ],
  openGraph: {
    title: "Niña Gillian Villamin - Web Developer Portfolio",
    description:
      "Explore the portfolio of Niña Gillian Villamin, a passionate web developer specializing in modern web technologies and creative solutions.",
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
  twitter: {
    card: "summary_large_image",
    title: "Niña Gillian Villamin - Web Developer Portfolio",
    description:
      "Explore the portfolio of Niña Gillian Villamin, a passionate web developer specializing in modern web technologies and creative solutions.",
    images: ["/logo_new.png"],
    creator: "@NoobNumi",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "http://ninv.me/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
