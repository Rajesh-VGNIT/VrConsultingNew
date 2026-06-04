// "use client";

import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "force-cache",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["performance-testing"];
}
const Page = () => {
  const section = data["PerformanceTesting"];


  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Performance Testing"
        description=""
      />

      <div className="container mx-auto py-12 space-y-16">

        {/* HERO */}
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section?.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section?.description}
            </p>

          </div>

          <div className="relative w-full max-w-[450px] h-110 ml-auto">
            <Image
              src={section?.heroImage || "/images/fallback.png"}
              alt="image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/*Key Aspects of Our Performance Testing Services*/}
        <div data-aos="fade-up">
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
            Key Aspects of Our Functional Testing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section?.["PerformanceTestingcard"]?.map((item: any, i: number) => (
              <div data-aos="fade-up"
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Content Wrapper */}
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

                  <p className="text-sm text-gray-600 leading-6">
                    {item?.description}
                  </p>
                </div>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            {section?.cta?.title}
          </h2>

          <p className="mb-6 text-gray-600 text-sm leading-6">
            {section?.cta?.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;