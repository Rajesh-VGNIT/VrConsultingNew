import type { Metadata } from "next";
import Script from "next/script";
import { Varela } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Whatsapp from "@/components/Whatsapp";
import AOSProvider from "@/components/AOSProvider";
import { Providers } from "./providers";

import "../styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";

const varela = Varela({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  verification: {
    google: "7DoRkc7DxBPqAYKB7QFGbTZEnl-IvxoBa9mz9_BBKww",
    other: {
      "msvalidate.01": "DDF7D94861D61A5EF703AB5621682E63",
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="msvalidate.01" content="DDF7D94861D61A5EF703AB5621682E63" />
      <body className={varela.className}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-52HH2LR');
          `}
        </Script>

        {/* MobileMonkey */}
        <Script
          src="https://static.mobilemonkey.com/js/mm_e83e0ada-6165-49a7-98cc-f0fb5ae7657e-34041163.js"
          strategy="afterInteractive"
        />

        {/* AOS Animation Initialization */}
        <AOSProvider />

        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-52HH2LR"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>

          <Whatsapp />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}