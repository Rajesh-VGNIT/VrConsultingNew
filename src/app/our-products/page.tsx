// "use client";

import Image from "next/image";
import data from "@/data/product.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};
const Page = () => {
  const section = data["OurProduct"];


  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Products"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

       
        {/*Key Aspects of Our Functional Testing Services*/}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">
           Products
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section?.["OurProductcard"]?.map((item: any, i: number) => (
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

      </div>
    </>
  );
};

export default Page;