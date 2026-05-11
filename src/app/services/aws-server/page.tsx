
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};
const Page = () => {
  const section = data.AWSDockerServer;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="AWS /Azure/Docker Server"
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
          </div>

          <div className="relative ml-auto w-full max-w-[500px]  h-110 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* Why Choose Flutter for Mobile */}
        <div>
          
            <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
               What we provide
              </p>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Flutter for Mobile App Development?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.AWSSolutions.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className=" relative w-18 h-18 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
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

         {/* AWS DevOps */}

        {data?.AWSDockerServer?.AWSDevOps?.map((legacy: any, index: number) => (
  <div key={index} className="w-full mx-auto">
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">
      
      <div className="relative w-40 h-40 flex-shrink-0">
        <Image
          src={legacy?.image || "/images/fallback.png"}
          alt={legacy?.title || "image"}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          {legacy?.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {legacy?.description}
        </p>
      </div>

    </div>
  </div>
))}

        {/*  Flutter Application Development */}
        <div>
           <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
              What we provide
              </p>
          <h2 className="text-3xl font-bold mb-8 text-center">
           Our Flutter Application Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.AzureSolutions.map((item: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="relative w-full h-18 flex-shrink-0 mb-4">
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


        {/* Azure DevOps */}

        {data?.AWSDockerServer?.AzureDevOps?.map((legacy: any, index: number) => (
  <div key={index} className="w-full mx-auto">
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">
      
      <div className="relative w-40 h-40 flex-shrink-0">
        <Image
          src={legacy?.image || "/images/fallback.png"}
          alt={legacy?.title || "image"}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          {legacy?.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {legacy?.description}
        </p>
      </div>

    </div>
  </div>
))}


 {/*  Docker Solutions */}
        <div>
           <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
              What we provide
              </p>
          <h2 className="text-3xl font-bold mb-8 text-center">
           Our Flutter Application Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.DockerSolutions.map((item: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="relative w-full h-18 flex-shrink-0 mb-4">
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

 {/* Docker Monitoring and Security */}

        {data?.AWSDockerServer?.DockerMonitoringSecurity?.map((legacy: any, index: number) => (
  <div key={index} className="w-full mx-auto">
    <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">
      
      <div className="relative w-40 h-40 flex-shrink-0">
        <Image
          src={legacy?.image || "/images/fallback.png"}
          alt={legacy?.title || "image"}
          fill
          className="object-contain"
        />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">
          {legacy?.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {legacy?.description}
        </p>
      </div>

    </div>
  </div>
))}

       
        {/*  CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            {section.cta.title}
          </h2>
          <p className="mb-6">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;