
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import FAQ from "../../../components/FAQ/FAQ";


export const metadata: Metadata = {
  title: "Flutter Development Company in Noida, India | VR Consulting",
  description: "Looking for the best Flutter development company in Noida, India? VR Consulting is the right choice for you that yield the best solutions at very affordable price.",
};
const Page = () => {
  const section = data.FlutterApplicationDevelopment;
  const legacy = section["legacy-application"]?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Mobile Apps with Flutter"
        description="" />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600">
              {section.description}
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-[500px]  h-110 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* Why Choose Flutter for Mobile */}
        <div>
          
            <p className="text-sm mb-3 text-center text-blue-600  uppercase">
               What we provide
              </p>
          <h2 className="text-xl font-semibold mb-8 text-center">
            Why Choose Flutter for Mobile App Development?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.whyChooseFlutter.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className=" relative w-18 h-18 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/*  Flutter Application Development */}
        <div>
           <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
              What we provide
              </p>
          <h2 className="text-xl font-semibold mb-8 text-center">
           Our Flutter Application Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.FlutterApplicationService.map((item: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="relative w-full h-18 flex-shrink-0 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* App Maintenance and Support */}

        {data?.FlutterApplicationDevelopment?.AppMaintenanceSupport?.map((legacy: any, index: number) => (
  <div key={index} className="w-full mx-auto">
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">
      
      <div className="relative w-30 h-30 flex-shrink-0">
        <Image
          src={legacy?.image || "/images/fallback.png"}
          alt={legacy?.title || "image"}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">
          {legacy?.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {legacy?.description}
        </p>
      </div>

    </div>
  </div>
))}
        {/* WHY CHOOSE US */}
        
        <div className="faq-wrapper">
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>
          <h2 className="text-xl text-center font-semibold mb-8">
               Why Choose VR Web Consulting?
          </h2>
          <FAQ items={section?.whyChooseUs} />
        </div>

        {/*  CTA */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            {section.cta.title}
          </h2>
          <p className="mb-6 text-gray-600">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;