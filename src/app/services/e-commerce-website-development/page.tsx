
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FAQEcommerce from "@/components/FAQ/FAQ-Ecommerce";

export const metadata = {
  title: "Ecommerce Development Services Company | VR Consulting",
  description:
    "Looking for the best ecommerce development services company in Noida? VR Consulting is here for you having the well-experienced team of web developers.",
};

const Page = () => {
  const section = data?.["e-commerce-Website"];

  if (!section) return null;

  const inventory = section?.InventoryandOrderManagement?.[0];
  const optimization = section?.SearchEngineOptimization?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Dynamic E-commerce Website"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

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

          <div className="relative w-full max-w-[450px] h-[450px] ml-auto rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* PROFESSIONAL ECOMMERCE */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
           Why Choose Professional E-commerce Website Development?
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
        

        {/* SERVICES */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Our E-commerce Website Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section["E-commerceWebsite"]?.map((item: any, i: number) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-5 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="relative w-full h-18 flex-shrink-0">
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

        {/* FAQ */}
        <FAQEcommerce items={section?.whyChooseUs} />

        {/* CTA */}
        <div className="text-left ">
          <h2 className="text-xl text-center font-semibold mb-3">
            {section.cta3.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section.cta3.description}
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;