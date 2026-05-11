"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Varela } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import Whatsapp from "@/components/Whatsapp";
import { FaWhatsapp } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";
import useFadeIn from "@/hooks/useFadeIn";


const varela = Varela({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
    useFadeIn();
  return (
    <html suppressHydrationWarning lang="en">

      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${varela?.className ?? ""}`}>
        
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