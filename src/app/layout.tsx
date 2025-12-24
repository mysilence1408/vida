import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import { ViewTransitions } from "next-view-transitions";

const sedgewick = Electrolize({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vida-seven.vercel.app"
);

export const metadata: Metadata = {
  title: {
    default: "VIDA Medicals",
    template: "%s | VIDA Medicals",
  },
  description:
    "VIDA Medicals is a Canadian AI platform building accurate mammography models that deliver a reliable second look and structured imaging insights.",
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero.jpeg"],
  },
  openGraph: {
    title: "VIDA Medicals",
    description:
      "VIDA Medicals is a Canadian AI platform building accurate mammography models that deliver a reliable second look and structured imaging insights.",
    url: "/",
    siteName: "VIDA Medicals",
    type: "website",
    images: [
      {
        url: "/images/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "VIDA Medicals OG image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <meta name="theme-color" content="#000000" /> {/* Set theme color */}
        </head>
        <body
          className={`${sedgewick.className} antialiased bg-[#f5f5ff] text-black dark:bg-[#202938] dark:text-white`}
        >
          <Suspense>
            <ScrollToTop>{children}</ScrollToTop>
          </Suspense>
        </body>
      </html>
    </ViewTransitions>
  );
}
