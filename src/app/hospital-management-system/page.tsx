
"user client"
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";

import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};
const Page = () => {
  const section = data.HospitalManagementSystem;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Hospital Management System"
        description="Hospital Management System streamlines patient records, appointments, billing, staff management, and healthcare operations for improved efficiency and care." />

      {/* HERO */}
            <section className="relative mt-7 mb-7 overflow-hidden bg-[#0B1120] flex items-center">
      
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1E1B4B]"></div>
      
              {/* Glow Effects */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>
      
              {/* SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="pattern"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2" fill="white" />
                  </pattern>
                </defs>
      
                <rect width="100%" height="100%" fill="url(#pattern)" />
              </svg>
      
              {/* Content */}
              <div className="relative z-10 w-full px-6 py-10 lg:px-20">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
      
                  {/* Left Content */}
                  <div>
      
                    {/* Heading */}
                    <h1 className="text-3xl md:text-3xl font-black leading-tight text-white">
                      {section?.title}
                    </h1>
      
                    {/* Gradient Divider */}
                    <div className="mt-8 flex items-center gap-3">
                      <div className="w-20 h-[5px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                      <div className="w-4 h-4 rounded-full border-2 border-blue-800 bg-blue-500"></div>
                    </div>
      
                    {/* Description */}
                    <p className="mt-8 text-sm text-gray-300 leading-7 max-w-2xl">
                      {section?.description}
                    </p>
      
                  
      
                  </div>
      
                  {/* Right Image */}
                  <div className="relative flex justify-center lg:justify-end">
      
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 rounded-[40px] blur-2xl opacity-30 scale-95"></div>
      
                    {/* Image Card */}
                    <div className="relative w-full max-w-[450px] h-[400px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-cyan-500/10 z-10"></div>
      
                      <Image
                        src={section?.heroImage || "/images/fallback.png"}
                        alt="hero"
                        fill
                        className="object-cover"
                      />
                    </div>
      
                  </div>
                </div>
              </div>
            </section>
    </>
  );
};

export default Page;