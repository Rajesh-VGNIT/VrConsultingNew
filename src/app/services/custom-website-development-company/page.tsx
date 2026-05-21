
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Custom Website Development Services Company in India - VR Consulting",
  description: "One of the best custom web development company in India that offers custom website design & development services. Get a free quote for your business website design now!.",
};
const Page = () => {
  const section = data.WebDevelopmentServices;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Best Web Development Services"
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