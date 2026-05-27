

import Image from "next/image";
import aboutJson from "@/data/about.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );

  const pageMetadata = await response.json();

  return pageMetadata["our-skills"];
}

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
      <Breadcrumb1 pageName="Our Skills" description="" />
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">

        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
          {caseStudies?.label}
        </p>

        <h2 className="text-3xl font-bold mt-2 mb-6">
          {caseStudies?.title}
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          {caseStudies?.description}
        </p>

      </div>

      <div className="max-w-6xl mx-auto px-6 py-0 text-center">

        {categories.length === 0 && (
          <p className="text-red-500">No data found</p>
        )}

        <div className="mt-10 w-full">
  {categories.map((category: any) => (
    <div
      key={category.id}
      className="mb-5 rounded-2xl  transition overflow-hidden"
    >
     
      <p className="text-lg sm:text-xl md:text-2xl mb-7 font-bold uppercase text-center py-1">
        {category.title}
      </p>

     
      <div className="relative mt-4 development-section"> 
        <Image
          src={category.image}
          alt={category.title}
          fill
          className=""
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