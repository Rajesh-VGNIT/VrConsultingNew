
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import { Metadata } from "next";


export const metadata = {
  title: "CMS Web Page | Iphone development | SEO Specilaist Company",
  description:
    "Software Expertise: VR Consulting is a software expert & SEO Specialist Company in India. Software Expertise fields: HTML, Php , java , Dot Net and SEO etc.",
};

const Page = () => {
  const section = data?.["OurMissionVision"];

  if (!section) return null;



  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Our Mission Vision"
        description="Empowering innovation through integrity, collaboration, and sustainable growth to create lasting value for communities worldwide."
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
                  <p className="text-sm text-gray-600">
                    {item.description1}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.description2}
                  </p>
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