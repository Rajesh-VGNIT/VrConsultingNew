// "use client";

import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

import pageMetadata from "@/data/metadata.json";

export const metadata = pageMetadata["ios-application-development"];
const Page = () => {
  const section = data["IOSApplicationDevelopment"];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="IOS Application Development"
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

          <div className="relative w-full max-w-[450px] h-110 p-6 ml-auto">
            <Image
              src={section?.heroImage || "/images/fallback.png"}
              alt="hero"
              fill
              className="object-cover rounded-xl "
            />
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Page;