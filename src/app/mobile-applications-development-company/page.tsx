
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import { Metadata } from "next";


export const metadata = {
  title: "Mobile Application Development Services Company in Delhi, India",
  description:
    "VR Consulting - Mobile app development company in India offers the best mobile applications services at an optimum price as compare to market. Contact us now!",
};

const Page = () => {
  const section = data?.["BestMobileApplicationDevelopment"];

  if (!section) return null;



  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Best Mobile Application Development"
        description="Building high-performance mobile applications with intuitive design, seamless functionality, and exceptional user experience."
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
            <p className="text-gray-600 mt-4">
              {section.description1}
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

       
      </div>
    </>
  );
};

export default Page;