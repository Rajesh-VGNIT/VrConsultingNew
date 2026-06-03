
"user client"
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
  return pageMetadata["enterprise-resource-planning"];
}
const Page = () => {
  const section = data.EnterpriseResource;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Enterprise resource planning (ERP)"
        description="Enterprise Resource Planning (ERP) streamlines business operations by integrating finance, inventory, HR, sales, and reporting into one system." />

      {/* HERO */}
      <section data-aos="fade-up" className="relative mt-7 overflow-hidden bg-[#0B1120] flex items-center">

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
                  alt="image"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto  py-12 space-y-16">

        {/* Why Choose Flutter for Mobile */}
        <div data-aos="fade-up">

          <p className="text-sm mb-3 text-center text-blue-600  uppercase">
            What we provide
          </p>
          <h2 className="text-xl font-semibold mb-8 text-center">
            Key Features of Our ERP Solution
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.whyChooseFlutter.map((item: any, i: number) => (
              <div data-aos="fade-up"
                key={i}

                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]"
              >
                {/* Top Gradient Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

                {/* Content */}
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

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                </div>

                {/* Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/*  CTA */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-xl font-semibold mb-3">
            {section.cta.title}
          </h2>
          <p className="mb-6 text-sm text-gray-600">
            {section.cta.description}
          </p>

        </div>

      </div>
    </>
  );
};

export default Page;