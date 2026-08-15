import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GS Vitaliza | Higienização de Estofados em Taboão da Serra",
    template: "%s | GS Vitaliza",
  },
  description:
    "Higienização profissional de sofás, colchões, bancos automotivos e tapetes com atendimento a domicílio em Taboão da Serra, Osasco e região.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plexSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        {/* Every page's first section is a navy hero; this spacer matches that
            color so the floating glass nav visually sits on top of one
            continuous surface instead of exposing a blank strip above it. */}
        <div aria-hidden="true" className="h-[74px] bg-navy sm:h-[82px] lg:h-[92px]" />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
