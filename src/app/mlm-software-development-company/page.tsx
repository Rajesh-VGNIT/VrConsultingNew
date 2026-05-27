import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Popup from "@/components/Popup";
import Image from "next/image";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );

  const pageMetadata = await response.json();

  return pageMetadata["mlm-software-development-company"];
}
const Page = () => {
  const section = data?.["MLMSoftwareDevelopment"];

  if (!section) return null;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Multi Level Marketing"
        description="India’s leading MLM software development company delivering secure, scalable, and feature-rich direct selling business solutions."
      />
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>

              {/* Small Badge */}
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-sm font-medium shadow-lg mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Marketing
              </span>

              {/* Heading */}
              <h1 className="text-2xl md:text-2xl font-semibold leading-tight text-slate-900 mb-4">
                {section.title}
              </h1>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-16 h-[4px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-6">
                {section.description}
              </p>

              {/* Feature Points */}
              <div className="mt-10 space-y-2">
                {[
                  "Modern Digital Strategy",
                  "Scalable Business Solutions",
                  "Trusted Industry Expertise",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center justify-center min-w-[20px]  rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md">
                      <span className="text-white text-sm font-bold">
                        ✓
                      </span>
                    </div>

                    <ul className="text-gray-600 text-sm">
                      <li className="text-gray-600 text-sm">{item}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video/Image Card */}
            <div className="relative">

              {/* Gradient Glow */}
              <div className="absolute inset-0 rounded-[35px] blur-2xl opacity-25 scale-95"></div>

             

                {/* Inner Media */}
               <div className="relative flex justify-center lg:justify-end">
              
                          
              
                            {/* Image Card */}
                            <div className="relative w-full max-w-[450px] h-110 rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              
                              
              
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
          
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 space-y-16">

        {/* HERO */}


        {/* SERVICES */}
        <div>
          <h2 className="text-xl font-semibold mb-8 text-center">
            Best MLM Software Development Services Company in India
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-6">
            {section.ProfessionalSEOServices?.map((item: any, i: number) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg border p-3 hover:shadow-xl transition"
              >
                <Popup item={item} type="service" />

                <h3 className="text-lg font-semibold text-center mt-3">
                  {item.button}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default Page;