
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQ from "../../../components/FAQ/FAQ";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["php-web-application"];
}

const Page = () => {
  const section = data.phpWebApplication;
  const legacy = section["legacy-application"]?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="PHP Web Application"
        description={
          <>
            A PHP web application is a dynamic website built with PHP,
            enabling server-side processing, database interaction,<br />
            and interactive user experiences.
          </>
        } />

      <div className="container mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-left">
            <h1 className="text-2xl font-semibold leading-relaxed mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section.description}
            </p>
          </div>

          <div data-aos="fade-right" className="relative ml-auto w-full max-w-[500px]  h-110 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* WHY CHOOSE PHP */}
        <div>

          <p data-aos="fade-left" className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>
          <h2 data-aos="fade-right" className="text-xl font-semibold  mb-8 text-center">
            Why Choose PHP for Web Application Development?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.whyChoosePHP.map((item: any, i: number) => (
              <div data-aos="fade-left"
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

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
                  {item.description}
                </p>
                </div>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/*  SERVICES */}
        <div>
          <p data-aos="fade-left" className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>
          <h2 data-aos="fade-right" className="text-xl font-semibold mb-8 text-center">
            Our PHP Web Application Development Services:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.services.map((item: any, i: number) => (
              <div data-aos="fade-left"
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

                {/* Content */}
                {/* Icon */}
                <div className="relative mb-4 flex w-full flex-shrink-0 items-center justify-center">
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
                 
                <div className="relative z-10">
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
                  </div>
                  {/* Hover Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* legacy Application */}

        {data?.phpWebApplication?.legacyApplication?.map((legacy: any, index: number) => (
          <div key={index} className="w-full mx-auto">
            <div data-aos="fade-left" className="p-8 flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]">

              <div className="relative w-30 h-30 flex-shrink-0">
                <Image
                  src={legacy?.image || "/images/fallback.png"}
                  alt={legacy?.title || "image"}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                
                <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">
                  {legacy?.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  {legacy?.description}
                </p>
                </div>
                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>

            </div>
          </div>
        ))}
        {/* WHY CHOOSE US */}

        <FAQ items={section?.whyChooseUs} />

        {/*  CTA */}
        <div data-aos="fade-right" className="text-center">
          <h2 className="font-semibold text-xl mb-3">
            {section.cta.title}
          </h2>
          <p className=" text-sm text-gray-600 leading-6">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;