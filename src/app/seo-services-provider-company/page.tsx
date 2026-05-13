
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import FAQ from "@/components/FAQ/FAQ";

export const metadata = {
  title: "SEO Services Provider Company in Noida, India | VR Consulting",
  description:
    "VR Consulting - One of the best SEO services companies in Noida, India. Apart from that, we also provide other services, i.e, SMO, PPC, Web consulting, etc.",
};

const Page = () => {
  const section = data?.["SEOServices"];

  if (!section) return null;

  const inventory = section?.LinkBuilding?.[0];
  const optimization = section?.LocalSEO?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="SEO Services"
        description="Improving website visibility on search engines through keyword optimization, content strategy, technical SEO, and link building for higher rankings."
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
            What we provide
          </p>

          <h2 className="text-xl font-semibold mb-8 text-center">
           Why Choose Professional SEO Services?
          </h2>

          <div className="grid md:grid-cols-3  gap-6">
            {section.ProfessionalSEOServices?.map((item: any, i: number) => (
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
           Our SEO Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section["OurSEOServices"]?.map((item: any, i: number) => (
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

        {/* Link Building */}
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

         {/* Local SEO */}
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
       <div className="faq-wrapper">
            <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
               What we provide
            </p>
            <h2 className="text-xl text-center font-semibold mb-8">
                Why Choose VR Web Consulting as Your SEO Services Provider?
            </h2>
          <FAQ items={section?.whyChooseUs} />
        </div>

        {/* CTA */}

        <div className="text-left ">
          <h2 className="text-xl text-center font-semibold mb-3">
            {section.cta.title}
          </h2>

          <p className="mb-6 text-gray-600">
            {section.cta.description}
          </p>
        </div>

      </div>
    </>
  );
};

export default Page;