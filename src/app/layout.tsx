import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatButton } from "@/components/layout/whatsapp-float-button";
import { JsonLd, localBusinessJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const GOOGLE_TAG_MANAGER_ID = "GTM-MF4HNWD4";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Multilimp Higienização | Americana e região",
    template: "%s | Multilimp Higienização",
  },
  description:
    "Higienização e impermeabilização de estofados em Americana, Santa Bárbara d’Oeste, Nova Odessa, Sumaré, Hortolândia, Limeira e Paulínia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${plexSans.variable} h-full antialiased`}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            className="invisible hidden"
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        {/* The glass nav floats over the page. Every route opens with a navy
            hero that reserves its height through `--header-h` in globals.css,
            so no spacer is needed here. */}
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
