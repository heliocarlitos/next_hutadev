import Script from "next/script";
import "./globals.css";
import { Header } from "../components/header/header";
import * as fonts from "./fonts/fonts";

export const metadata = {
  metadataBase: new URL("https://nexthutadev.vercel.app/"),
  title: "HutaDev – Desenvolvimento Web",
  description:
    "Huta Dev oferece soluções digitais modernas que ajudam startups e programadores a crescer.",
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Huta Dev - Para startups e sites de negócio",
    description:
      "Transforme suas ideias em soluções digitais eficientes com Huta Dev.",
    url: "https://nexthutadev.vercel.app/",
    images: [{ url: "/demo-light.webp", width: 800, height: 600 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huta Dev - Para startups e sites de negócio",
    description:
      "Transforme suas ideias em soluções digitais eficientes com Huta Dev.",
    images: ["/demo-light.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://example.com/analytics.js"
        strategy="afterInteractive"
      />
      <Script src="https://example.com/chat.js" strategy="lazyOnload" />

      <html lang="pt" className="light">
        <body
          className={`${fonts.chakra.variable} ${fonts.fira.variable} ${fonts.outfit.variable} ${fonts.poppins.variable}`}
        >
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
