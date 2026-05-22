
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

      <div className="max-w-6xl mx-auto py-12 space-y-10">



        {/* PROFESSIONAL ECOMMERCE */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-2xl font-semibold mb-8 text-center">
            Our Custom Web Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {section.professionalEcommerce?.map((item: any, i: number) => (
              <div
                key={i}
                
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mb-5">
                    <div className="flex items-center justify-center w-22 h-22 rounded-[22px] border-2 border-blue-300 shadow-xl group-hover:scale-105 transition duration-500">

                      {/* Inner White Layer */}
                      <div className="flex items-center justify-center w-[62px] h-[62px] rounded-[18px] bg-white">
                        <div className="relative w-15 h-15">
                          <Image
                            src={item?.image || "/images/fallback.png"}
                            alt={item?.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition">
                      {item?.title}
                    </h3>

                    {/* Divider */}
                    <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>




        {/* INVENTORY */}
        {inventory && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl border  p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

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

                <p className="text-sm text-gray-600 leading-relaxed">
                  {inventory.description}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Search Engine Optimization */}
        {optimization && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl border p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

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

                <p className="text-sm text-gray-600 leading-relaxed">
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

          <p className="text-sm mb-6 text-gray-600">
            {section.cta.description}
          </p>
          <div className="text-left">
            <h3 className="text-1xl  font-semibold mb-3">
              {section.ctalist.subtitle}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 py-5 text-left">
              {list.map((item) => (
                
                <li
                        key={item.id}
                        className="flex items-start gap-3"
                      >
                        {/* Check Circle */}
                        <div className="mt-0 ml-4 flex items-center justify-center min-w-[20px] h-5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md">
                          <span className="text-white text-xs font-bold">
                            ✓
                          </span>
                        </div>

                        {/* Text */}
                        <span className="text-sm text-slate-600 leading-5">
                          {item.point}
                        </span>
                      </li>
              ))}
            </ul>

            <p className="text-sm mb-6 text-gray-600 mt-5 ">
              {section.cta.description1}
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default AboutPage;
