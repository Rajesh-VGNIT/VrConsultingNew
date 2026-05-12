// "use client";

import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codeigniter Framework Development | Vr Consulting",
  description: "This is Codeigniter Framework Development",
};
const Page = () => {
  const section = data["codeigniter-framework"];


  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Codeigniter Framework Development"
        description="CodeIgniter is a lightweight PHP framework for building fast, secure, and dynamic web applications efficiently."
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
            <p className="text-gray-600 mt-2">
              {section?.subdescription}
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

        {/* UNIQUE CONTENT CARDS */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-500 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Here are some key aspects of our unique content development proces
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section?.["unique-contentcard"]?.map((item: any, i: number) => (
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

       
        {/* clear and concise / CLEAR SECTION */}
        <div>
          {section?.ClearAndConcise?.map((item: any, i: number) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

              <div className="relative w-30 h-30 flex-shrink-0">
                <Image
                  src={item?.image || "/images/fallback.png"}
                  alt={item?.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {item?.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item?.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10">
          <h2 className="text-xl font-bold mb-3">
            {section?.cta1?.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section?.cta1?.description}
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;