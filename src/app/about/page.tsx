
import Image from "next/image";
import data from "@/data/about.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import { Metadata } from "next";


export const metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};

const AboutPage = () => {
  const section = data?.["e-commerce-Website"];
  const list = data["e-commerce-Website"].ctalist.list;

  if (!section) return null;

  const inventory = section?.InventoryandOrderManagement?.[0];
  const optimization = section?.SearchEngineOptimization?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="About VR Consulting?"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        

        {/* PROFESSIONAL ECOMMERCE */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-2xl font-semibold mb-8 text-center">
            Our Custom Web Design Services
          </h2>

          <div className="grid md:grid-cols-3  gap-6">
            {section.professionalEcommerce?.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6  text-left hover:shadow-lg transition"
              >
                <div className="relative w-16 h-18 mb-4 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain "
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
        

       

        {/* INVENTORY */}
        {inventory && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

              <div className="relative w-30 h-30 flex-shrink-0">
                <Image
                  src={inventory.image || "/images/fallback.png"}
                  alt={inventory.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {inventory.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {inventory.description}
                </p>
              </div>

            </div>
          </div>
        )}

         {/* Search Engine Optimization */}
        {optimization && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

              <div className="relative w-30 h-30 flex-shrink-0">
                <Image
                  src={optimization.image || "/images/fallback.png"}
                  alt={optimization.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {optimization.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {optimization.description}
                </p>
              </div>

            </div>
          </div>
        )}

        
        {/* CTA */}
        <div className=" ">
          <h2 className="text-xl font-semibold mb-3">
            {section.cta.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section.cta.description}
          </p>
          <div className="text-left">
            <h3 className="text-1xl  font-semibold mb-3">
               {section.ctalist.subtitle}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 py-5 text-left">
                {list.map((item) => (
                  <li key={item.id}>{item.point}</li>
                ))}
            </ul>

            <p className="mb-6 text-gray-600 mt-5">
              {section.cta.description1}
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
