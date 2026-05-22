// "use client";

import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc..",
};
const Page = () => {
  const section = data["PerformanceTesting"];


  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Performance Testing"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section?.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section?.description}
            </p>

          </div>

          <div className="relative w-full max-w-[500px] h-110 ml-auto">
            <Image
              src={section?.heroImage || "/images/fallback.png"}
              alt="hero"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/*Key Aspects of Our Performance Testing Services*/}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">
            Key Aspects of Our Functional Testing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section?.["PerformanceTestingcard"]?.map((item: any, i: number) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="flex items-center justify-center w-22 h-22 rounded-[22px] border-2 border-blue-300 shadow-xl group-hover:scale-105 transition duration-500">

                    {/* Inner White Layer */}
                    <div className="flex items-center justify-center w-[62px] h-[62px] rounded-[18px] bg-white">
                      <div className="relative w-15 h-15">
                        <Image
                          src={item?.image || "/images/fallback.png"}
                          alt={item?.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition">
                    {item?.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>




        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            {section?.cta?.title}
          </h2>

          <p className="mb-6 text-gray-600 text-sm leading-6">
            {section?.cta?.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;