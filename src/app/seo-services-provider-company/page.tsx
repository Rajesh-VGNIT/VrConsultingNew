
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import FAQ from "@/components/FAQ/FAQ";

import pageMetadata from "@/data/metadata.json";

export const metadata = pageMetadata["seo-services-provider-company"];

const Page = () => {
  const section = data?.["SEOServices"];

  if (!section) return null;

  const inventory = section?.LinkBuilding?.[0];
  const optimization = section?.LocalSEO?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
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
            <p className=" text-sm text-gray-600 leading-6">
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
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >

                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

                {/* Content */}

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
                  {item.description}
                </p>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
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
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

                {/* Content */}
                {/* Icon */}
                <div className="relative mb-4 flex  w-full flex-shrink-0 items-center justify-center">
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

                <div>
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition">
                      {item?.title}
                    </h3>

                    {/* Divider */}
                    <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                  </div>
                  <p className="text-sm text-gray-600 leading-6">
                    {item.description}
                  </p>
                  {/* Hover Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link Building */}
        {inventory && (
          <div className="w-full mx-auto">
            <div className="  p-8 flex flex-col md:flex-row items-center gap-6  group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]">
              {/* Top Gradient Glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

              {/* Content */}
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

                <p className="text-sm text-gray-600 leading-6">
                  {inventory.description}
                </p>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>

            </div>
          </div>
        )}

        {/* Local SEO */}
        {optimization && (
          <div className="w-full mx-auto">
            <div className="p-8 flex flex-col md:flex-row items-center gap-6  group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]">
              {/* Top Gradient Glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

              {/* Content */}
              <div className="relative w-30 h-30 flex-shrink-0">
                <Image
                  src={optimization.image || "/images/fallback.png"}
                  alt={optimization.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>

                {/* Title */}

                <h3 className="text-xl font-semibold mb-3">
                  {optimization.title}
                </h3>


                <p className="text-sm text-gray-600 leading-6">
                  {optimization.description}
                </p>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
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