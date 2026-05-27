
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

  return pageMetadata["crm-software-development-company"];
}

const Page = () => {
  
  const section = data?.["CRMSoftwareDevelopment"];

  if (!section) return null;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="CRM Software Development Services Company in India"
        description="India-based CRM software development company delivering scalable, secure solutions for efficient customer and business management."
      />

      {/* HERO */}
      <section className="relative mt-7 overflow-hidden bg-[#0B1120] flex items-center">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1E1B4B]"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-3xl"></div>

        {/* SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="white" />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-10 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Content */}
            <div>

              {/* Heading */}
              <h1 className="text-3xl md:text-3xl font-black leading-tight text-white">
                {section?.title}
              </h1>

              {/* Gradient Divider */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-20 h-[5px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                <div className="w-4 h-4 rounded-full border-2 border-blue-800 bg-blue-500"></div>
              </div>

              {/* Description */}
              <p className="mt-8 text-sm text-gray-300 leading-7 max-w-2xl">
                {section?.description}
              </p>
              <div className="flex mt-5 flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 uppercase">

                <div className="inline-block group">
                  <span className="relative flex items-center justify-center w-40 h-12 overflow-hidden rounded-md border border-white hover:border-primary text-sm font-semibold uppercase cursor-pointer">
                    <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-white transition-colors duration-300">
                      Live
                    </span>

                  </span>
                </div>

              </div>

            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 rounded-[40px] blur-2xl opacity-30 scale-95"></div>

              {/* Image Card */}
              <div className="relative w-full max-w-[450px] h-110 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-cyan-500/10 z-10"></div>

                <Image
                  src={section?.heroImage || "/images/fallback.png"}
                  alt="hero"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/*Why Choose Professional SEO Services? */}
        <div>
          <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">

          </p>



          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
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

                <div className="relative w-full h-50 mb-4 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-content w-full  "
                  />
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

                  <div className="inline-block group">
                    <span className="relative flex items-center justify-center px-8 py-3 overflow-hidden rounded-md border border-primary text-md font-semibold cursor-pointer">
                      <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                      <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-300">
                        {item.button}
                      </span>

                    </span>
                  </div>

                </div>

                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>


              </div>
            ))}
          </div>
        </div>


      </div>
    </>
  );
};

export default Page;