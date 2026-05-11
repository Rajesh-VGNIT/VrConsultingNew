
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata = {
  title: "Dot Net Development Services | Dot Net Full Stack Developers",
  description:
    "VR Consulting is the best place for those who are looking for the best dot net development services in India with full stack developers. Contact us now!",
};

const Page = () => {
  const section = data?.["dot-net-development-company"];

  if (!section) return null;

  const inventory = section?.MigrationServices?.[0];
  const optimization = section?.TimelyDelivery?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="DOT NET Development"
        description=""
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/* 🔷 HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
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

        {/* .NET for Your Development Needs */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">
           Why Choose .NET for Your Development Needs?
          </h2>

          <div className="grid md:grid-cols-3  gap-6">
            {section.ChooseDotNetYourDevelopment?.map((item: any, i: number) => (
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
        

        {/* .NET Development Services */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center">
           Our .NET Development Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section["DotNetDevelopmentServices"]?.map((item: any, i: number) => (
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

        {/* Migration Services */}
        {inventory && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

              <div className="relative w-40 h-40 flex-shrink-0">
                <Image
                  src={inventory.image || "/images/fallback.png"}
                  alt={inventory.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {inventory.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {inventory.description}
                </p>
              </div>

            </div>
          </div>
        )}

         {/* Why Choose VR Web Consulting */}
          <div>
          
          <h2 className="text-3xl font-bold mb-8 text-center">
           Why Choose VR Web Consulting?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section["WhyChooseVRWebConsulting"]?.map((item: any, i: number) => (
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


         {/* Timely Delivery */}
        {optimization && (
          <div className="w-full mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition">

              <div className="relative w-40 h-40 flex-shrink-0">
                <Image
                  src={optimization.image || "/images/fallback.png"}
                  alt={optimization.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {optimization.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {optimization.description}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* 🔷 CTA */}
        <div className="text-left ">
          <h2 className="text-2xl text-center font-bold mb-3">
            {section.cta5.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section.cta5.description}
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;