
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
  return pageMetadata["mobile-applications-development-company"];
}

const Page = () => {
  const section = data?.["BestMobileApplicationDevelopment"];
  if (!section) return null;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Best Mobile Application Development"
        description="Building high-performance mobile applications with intuitive design, seamless functionality, and exceptional user experience."
      />

      <div className="container mx-auto py-12 space-y-16">

        {/* HERO */}
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 text-sm leading-6">
              {section.description}
            </p>
            <p className="text-gray-600 mt-4 text-sm leading-6">
              {section.description1}
            </p>
           
          </div>

          <div className="relative w-full max-w-[450px] h-110 ml-auto rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="image"
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