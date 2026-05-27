
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );

  const pageMetadata = await response.json();

  return pageMetadata["responsive-website-designing-development"];
}

const Page = () => {
  const section = data?.["ResponsiveWebsiteDesigning"];

  if (!section) return null;



  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Responsive Website Designing"
        description="Creating visually appealing, mobile-friendly websites that adapt seamlessly across all devices for better user experience."
      />

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-sm text-gray-600 leading-6 ">
              {section.description}
            </p>
            <p className="text-sm text-gray-600 mt-4 leading-6">
              {section.description1}
            </p>
            <p className="text-sm text-gray-600 mt-4 leading-6">
              {section.description2}
            </p>
            <p className="text-sm text-gray-600 mt-4 leading-6">
              {section.description3}
            </p>
          </div>

          <div className="relative w-full max-w-[450px] h-110 ml-auto rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
              fill
              className="object-cover"
            />
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Page;