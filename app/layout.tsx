import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vaibhav Zade",
  description:
  "UG Scholar | MERN Stack Developer | Data Analyst | Web Developer | Deep learning | BIT'25",
  generator: "Next.js",
  applicationName: "Vaibhav Zade",
  keywords: [
    "developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Vaibhav Zade",
    description:
      "UG Scholar | MERN Stack Developer | Data Analyst | Web Developer | Deep learning | BIT'25",
    url: "https://portfolio-ar.vercel.app/",
    siteName: "www.vaibhavzade.com",
    images: [
      {
        url: "https://github.com/sanjay-ar/Portfolio/assets/95616838/7017e6ec-5e2d-403b-8bc1-fee8c9774fd9",
        width: 1200,
        height: 630,
        alt: "vaibhav — MERN Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
