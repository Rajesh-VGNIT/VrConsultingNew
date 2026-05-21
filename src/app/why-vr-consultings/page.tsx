import aboutJson from "@/data/about.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VR Consulting | Website Development Company",
  description:
    "VR Consulting is a Web Design and Development Company based in India, Noida, Delhi NCR specialized in high quality web design and development solutions, custom web development",
};

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

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">

        {/* Top Section */}
        {whyVR && (
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Left Images */}
            <div className="fade fade-left relative flex justify-start">

              <div className="relative h-96 w-72 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={whyVR.images?.[0]?.src}
                  alt={whyVR.images?.[0]?.alt || "about image"}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 right-[60px] h-[260px] w-[200px] overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                <Image
                  src={whyVR.images?.[1]?.src}
                  alt={whyVR.images?.[1]?.alt || "about image"}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Right Content */}
            <div className="fade fade-right max-w-lg">

              <span className="text-sm font-semibold uppercase text-blue-600">
                Why Choose Us
              </span>

              <h2 className="mb-4 mt-2 text-4xl font-bold">
                {whyVR.title}
              </h2>

              <p className="text-lg text-gray-600">
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((item: any, index: number) => (

            <div
              key={index}
              className="fade fade-up rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >

              <div className="relative mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#39acf9] bg-primary/10">

                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain p-4"
                />

              </div>

              <h3 className="mb-3 text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mb-3 text-sm text-gray-600">
                {item.description}
              </p>

              {item.points && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">

                  {item.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}

                </ul>
              )}

            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="fade fade-up grid gap-6 md:grid-cols-2">

          {/* Mission */}
          {mission && (
            <div className="rounded-xl bg-white p-6 shadow">

              <div className="relative mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#39acf9] bg-primary/10">

                <Image
                  src={mission?.mission?.icon}
                  alt={mission?.mission?.title || "mission icon"}
                  fill
                  className="object-contain p-4"
                />

              </div>

              <h3 className="mb-3 text-lg font-semibold">
                {mission.mission.title}
              </h3>

              <p className="text-sm text-gray-600">
                {mission.mission.description}
              </p>

            </div>
          )}

          {/* Why We Succeed */}
          {whySuccess && (
            <div className="rounded-xl bg-white p-6 shadow">

              <div className="relative mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#39acf9] bg-primary/10">

                <Image
                  src={
                    whySuccess?.why_we_succeed?.icon ||
                    "/images/default.png"
                  }
                  alt={
                    whySuccess?.why_we_succeed?.title || "success icon"
                  }
                  fill
                  className="object-contain p-4"
                />

              </div>

              <h3 className="mb-3 text-lg font-semibold">
                {whySuccess.why_we_succeed.title}
              </h3>

              <p className="mb-3 text-sm text-gray-600">
                {whySuccess.why_we_succeed.intro}
              </p>

              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">

                {whySuccess.why_we_succeed.points?.map(
                  (point: any) => (
                    <li key={point.id}>
                      {point.text}
                    </li>
                  )
                )}

              </ul>

            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default AboutPage;