"use client";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Varela } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import Whatsapp from "@/components/Whatsapp";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";

/* AOS */
import AOS from "aos";
import "aos/dist/aos.css";



const varela = Varela({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  /* ================= AOS INIT ================= */

   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
 
    <html suppressHydrationWarning lang="en">

      <head />

      <body className={`${varela?.className ?? ""}`}>
  
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