import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import GoogleTagManager from "./components/GoogleTagManager";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const metadata = {
  title: "ENSO LIVING",
  description: "ENSO LIVING - Your home for sustainable living",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-5ZS2J3NB";
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
      <link rel="preload" as="image" href="/hero-desktop-building.avif"/>
      <link rel="preload" as="image" href="/building-mask-mobile.avif"/>
      <link rel="preload" as="image" href="/hero-desktop-building.avif"/>

        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <GoogleTagManager gtmId={GTM_ID} />
        <noscript
          dangerouslySetInnerHTML={{
            __html:`
            <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                    height="0" 
                    width="0" 
                    style="display:none;visibility:hidden">
            </iframe>
            `
          }}
        />

      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Script
          id="to-top"
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
      </body>
    </html>
  );
}
