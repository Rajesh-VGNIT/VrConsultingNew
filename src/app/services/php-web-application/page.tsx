
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import FAQ from "../../../components/FAQ/FAQ";


export const metadata: Metadata = {
  title: "PHP Web Application | Vr web consulting",
  description: "This is PHP Web Application",
};
const Page = () => {
  const section = data.phpWebApplication;
  const legacy = section["legacy-application"]?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="PHP Web Application"
        description={
    <>
      A PHP web application is a dynamic website built with PHP,
      enabling server-side processing, database interaction,<br />
      and interactive user experiences.
    </>
  } />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold leading-relaxed mb-4">
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

        {/* WHY CHOOSE PHP */}
        <div>
          
            <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
               What we provide
              </p>
          <h2 className="text-xl font-semibold  mb-8 text-center">
            Why Choose PHP for Web Application Development?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.whyChoosePHP.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className="relative w-18 h-18 mb-4">
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

        {/*  SERVICES */}
        <div>
           <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
              What we provide
              </p>
          <h2 className="text-xl font-semibold mb-8 text-center">
           Our PHP Web Application Development Services:
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.services.map((item: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl  shadow hover:shadow-md transition"
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
                  <h3 className=" font-semibold text-lg mb-2">
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


        {/* legacy Application */}

        {data?.phpWebApplication?.legacyApplication?.map((legacy: any, index: number) => (
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
        
        <FAQ items={section?.whyChooseUs} />

        {/*  CTA */}
        <div className=" p-10 text-center">
          <h2 className="font-semibold text-xl mb-3">
            {section.cta.title}
          </h2>
          <p className="mb-6">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;