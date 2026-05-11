
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import FAQ from "../../../components/FAQ/FAQ";


export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};
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

        {/* development process for Drupal development */}
        <div>
          
            <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
               What we provide
              </p>
          <h2 className="text-3xl font-bold mb-8 text-center">
          Here are the key aspects of our unique content development process for Drupal development
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.DrupalDevelopmentService.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <div className="relative w-18 h-18 mb-4">
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