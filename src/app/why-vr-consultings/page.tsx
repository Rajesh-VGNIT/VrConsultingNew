import aboutJson from "@/data/about.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["why-vr-consultings"];
}

const AboutPage = () => {

  const aboutData = aboutJson.aboutData;

  const whyVR = aboutData.find(
    (item: any) => item.id === "why-vr"
  );

  const cards = aboutData.filter(
    (item: any) =>
      item.title === "What we do" ||
      item.title === "How we work" ||
      item.title === "Our Vision"
  );

  const mission = aboutData.find(
    (item: any) => item.mission
  );

  const whySuccess = aboutData.find(
    (item: any) => item.why_we_succeed
  );

  return (
    <>
      <Breadcrumb1
        pageName="About Us"
        description="VR Consulting is a Web Design and Development Company specialized in high quality web design and development solutions, custom web development, web based software application, SEO and web marketing services."
      />

      <div className="mx-auto container space-y-8 py-12">

        {/* Top Section */}
        {whyVR && (
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Left Images */}
            <div className="relative flex justify-start">

              <div data-aos="fade-left" className="relative h-96 w-72 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={whyVR.images?.[0]?.src}
                  alt={whyVR.images?.[0]?.alt || "about image"}
                  fill
                  className="object-cover"
                />
              </div>

              <div data-aos="fade-right" className="absolute -bottom-4 right-[60px] h-[260px] w-[200px] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                <Image
                  src={whyVR.images?.[1]?.src}
                  alt={whyVR.images?.[1]?.alt || "about image"}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Right Content */}
            <div data-aos="fade-right" className="max-w-lg">

              <span className="text-sm font-semibold uppercase text-blue-600">
                Why Choose Us
              </span>

              <h2 className="mb-4 mt-2 text-2xl font-semibold">
                {whyVR.title}
              </h2>

              <p className="text-sm text-gray-600 leading-6">
                {whyVR.description}
              </p>

              <div className="mt-6">

                <Link href="/" className="group inline-block">

                  <span className="relative flex h-12 w-44 items-center justify-center overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase">

                    <span className="absolute inset-0 translate-x-[-100%] bg-primary transition duration-300 group-hover:translate-x-0"></span>

                    <span className="relative z-10 text-primary group-hover:text-white">
                      Get Started
                    </span>

                  </span>

                </Link>

              </div>

            </div>

          </div>
        )}

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item: any, i: number) => (
            <div data-aos="fade-left"
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
                          src={item?.icon || "/images/fallback.png"}
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



                <ul className="space-y-2 mt-4">
                  {item?.points?.map((point: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 leading-0"
                    >
                      {/* Check Circle */}
                      <div className="mt-0 flex items-center justify-center min-w-[20px] h-5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md">
                        <span className="text-white text-xs font-bold">
                          ✓
                        </span>
                      </div>

                      {/* Text */}
                      <span className="text-sm text-slate-600 ">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Hover Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Mission */}
          {mission && (
            <div data-aos="fade-right" className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]">
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
                        src={mission?.mission?.icon || "/images/fallback.png"}
                        alt={mission?.mission?.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>



              <div className="relative z-10">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition">
                    {mission.mission.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
                </div>

                <p className="text-sm text-gray-600 leading-6">
                  {mission.mission.description}
                </p>
              </div>
              {/* Hover Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>
            </div>
          )}

          {/* Why We Succeed */}
          {whySuccess && (
            <div data-aos="fade-left" className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 p-8 transition-all duration-900  hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]">

              {/* Top Gradient Glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>

              {/* Icon */}
              <div className="mb-5">
                <div className="flex items-center justify-center w-22 h-22 rounded-[22px] border-2 border-blue-300 shadow-xl group-hover:scale-105 transition duration-900">

                  <div className="flex items-center justify-center w-[62px] h-[62px] rounded-[18px] bg-white">
                    <div className="relative w-15 h-15">
                      <Image
                        src={whySuccess?.why_we_succeed?.icon || "/images/fallback.png"}
                        alt={whySuccess?.why_we_succeed?.title}
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
                  {whySuccess.why_we_succeed.title}
                </h3>

                <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"></div>
              </div>

              <p className="mb-3 text-sm text-gray-600 leading-6">
                {whySuccess.why_we_succeed.intro}
              </p>

              <ul className="space-y-2 mt-4">
                {whySuccess.why_we_succeed.points?.map((point: any) => (
                  <li
                    key={point.id}
                    className="flex items-start gap-3 leading-0"
                  >
                    <div className="mt-0 flex items-center justify-center min-w-[20px] h-5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-md">
                      <span className="text-white text-xs font-bold">
                        ✓
                      </span>
                    </div>

                    <span className="text-sm text-slate-600">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 transition-all duration-500"></div>

            </div>
          )}



        </div>

      </div>
    </>
  );
};

export default AboutPage;