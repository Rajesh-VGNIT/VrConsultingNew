
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata = {
  title: "CRM Software Development Company in India - VR Consulting",
  description:
    "Looking for the best CRM software development service company in India? Visit us now! We offer customer friendly CRM development services at the cheapest price.",
};

const Page = () => {
  const section = data?.["CRMSoftwareDevelopment"];

  if (!section) return null;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="CRM Software Development Services Company in India"
        description="India-based CRM software development company delivering scalable, secure solutions for efficient customer and business management."
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
            <div className="flex mt-5 flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 uppercase">
                  
                  <div className="inline-block group">
                  <span className="relative flex items-center justify-center w-40 h-12 overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase cursor-pointer">
                    <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-300">
                      Live
                    </span>

                  </span>
                </div>
                  
                </div>
          </div>

          <div className="relative w-full max-w-[450px] h-[400px] ml-auto rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/*Why Choose Professional SEO Services? */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
           
          </p>

          

          <div className="grid md:grid-cols-3  gap-6">
            {section.ProfessionalSEOServices?.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-3 pb-3  text-left hover:shadow-lg transition"
              >
                <div className="relative w-full h-50 mb-4 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-content w-full  "
                  />
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  
                  <div  className="inline-block group">
                  <span className="relative flex items-center justify-center px-8 py-3 overflow-hidden rounded-md border border-primary text-md font-semibold cursor-pointer">
                    <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-300">
                      {item.button}
                    </span>

                  </span>
                </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
        

      </div>
    </>
  );
};

export default Page;