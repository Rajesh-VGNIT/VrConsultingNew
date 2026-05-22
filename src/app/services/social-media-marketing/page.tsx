
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing | VR Consulting",
  description: "Social Media Marketing in Noida, India, Delhi NCR | VR Consulting",
};
const Page = () => {
  const section = data.SocialMediaMarketing;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Social Media Marketing"
        description="" />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section.description}
            </p>
            <p className="text-gray-600 mt-2 text-sm leading-6">
              {section.description1}
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-[500px]  h-120 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className=" rounded-xl"
            />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Page;