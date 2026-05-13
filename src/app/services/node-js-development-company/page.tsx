// "use client";

import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Node Js Development | Best Node Js Development Company",
  description: "VR Consulting - An optimum place for Node Js development & one of the best Node Js development Companies in India where you will find best solutions.",
};
const Page = () => {
  const section = data["node-js-development-company"];


  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Node.js Development"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section?.title}
            </h1>
            <p className="text-gray-600">
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

        {/* node js content cards */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Why Choose Us for Node.js Development?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section?.["NodejsDevelopmentcard"]?.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className="relative w-18 h-18 mb-4">
                  <Image
                    src={item?.image || "/images/fallback.png"}
                    alt={item?.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {item?.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            {section?.cta4?.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section?.cta4?.description}
          </p>
          <p className="mb-6 mt-2 text-gray-600">
            {section?.cta4?.description1}
          </p>
           <p className="mb-6 mt-2 text-gray-600">
            {section?.cta4?.description2}
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;