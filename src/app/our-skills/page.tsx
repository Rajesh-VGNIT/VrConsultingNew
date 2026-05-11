"use client";

import Image from "next/image";
import aboutJson from "@/data/about.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

const OurSkills = () => {

  const categories =
    aboutJson?.aboutData?.find((item: any) => item.categories)?.categories || [];

  const caseStudies =
    aboutJson?.aboutData?.find(
      (item: any) => item?.id === "caseStudies"
    ) || {
      label: "CASE STUDIES",
      title: "Our Expertise",
      description: ""
    };

  return (
    <>
      <Breadcrumb pageName="Our Skills" description="" />
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">

        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
          {caseStudies?.label}
        </p>

        <h2 className="text-4xl font-bold mt-2 mb-6">
          {caseStudies?.title}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {caseStudies?.description}
        </p>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        {categories.length === 0 && (
          <p className="text-red-500">No data found</p>
        )}

        <div className="mt-10 w-full">
  {categories.map((category: any) => (
    <div
      key={category.id}
      className="mb-5 rounded-2xl border-2 border-red-400 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
    >
      {/* Reduced py-2 to py-1 and removed mb-2 */}
      <p className="text-xs font-bold uppercase text-center text-gray-700 py-1">
        {category.title}
      </p>

      {/* Changed h-screen to a fixed height (e.g., h-40) to constrain the space */}
      <div className="relative w-full h-150"> 
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  ))}
</div>
      </div>
    </>
  );
};

export default OurSkills;