
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Responsive Website Design & Development Services in Delhi, India",
  description: "How to recognize the best & cheapest responsive website designing & development service provider India? We are here to help you to find the best solutions.",
};
const Page = () => {
  const section = data.ResponsiveWebsiteDesigning;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Responsive Website Designing"
        description="" />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600">
              {section.description}
            </p>
             <p className="text-gray-600 mt-2">
              {section.description1}
            </p>
             <p className="text-gray-600 mt-2">
              {section.description2}
            </p>
             <p className="text-gray-600 mt-2">
              {section.description3}
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