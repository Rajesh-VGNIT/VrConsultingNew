
"user client"
import Image from "next/image";
import data from "@/data/services.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["mobile-applications-development-company"];
}
const Page = () => {
  const section = data.MobileApplicationDevelopment;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        pageName="Best Mobile Application Development"
        description="" />

      <div className="container mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section.description}
            </p>
             <p className="text-gray-600 mt-2 text-sm leading-6">
              {section.description1}
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-[500px]  h-110 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="image"
              fill
              className=" rounded-xl"
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default Page;