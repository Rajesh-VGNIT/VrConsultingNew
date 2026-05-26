
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FAQ from "../../../components/FAQ/FAQ";

import pageMetadata from "@/data/metadata.json";

export const metadata = pageMetadata["drupal-development"];
const Page = () => {
  const section = data.DrupalDevelopmentCompany;
  const legacy = section["legacy-application"]?.[0];

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Drupal Development Company"
        description="" />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-sm text-gray-600 leading-6">
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

        {/* development process for Drupal development */}
        <div>

          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
            What we provide
          </p>
          <h2 className="text-xl font-semibold mb-8 text-center">
            Here are the key aspects of our unique content development process for Drupal development
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.DrupalDevelopmentService.map((item: any, i: number) => (
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


        {/*  CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            {section.cta.title}
          </h2>
          <p className="mb-6 text-sm leading-6 text-gray-600">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;