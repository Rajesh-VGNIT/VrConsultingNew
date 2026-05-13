"use client";

import { useEffect } from "react";
import aboutJson from "@/data/about.json";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const aboutData = aboutJson.aboutData;

  const whyVR = aboutData.find((item: any) => item.id === "why-vr");
  const cards = aboutData.filter(
    (item: any) =>
      item.title === "What we do" ||
      item.title === "How we work" ||
      item.title === "Our Vision"
  );
  const mission = aboutData.find((item: any) => item.mission);
  const whySuccess = aboutData.find((item: any) => item.why_we_succeed);

  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="VR Consulting is a Web Design and Development Company specialized in high quality web design and development solutions, custom web development, web based software application, SEO and web marketing services. At VR Consulting we see the customer's requirements, results in creating online business solutions opportunities for the clients."
      />

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">

        {/* 🔷 TOP SECTION */}
        {whyVR && (
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="fade fade-left relative flex justify-start">
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={whyVR.images?.[0]?.src}
                  alt={whyVR.images?.[0]?.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 right-[60px] w-[200px] h-[260px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={whyVR.images?.[1]?.src}
                  alt={whyVR.images?.[1]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="fade fade-right max-w-lg">
              <span className="text-sm text-blue-600 font-semibold uppercase">
                Why Choose Us
              </span>

              <h2 className="text-4xl font-bold mt-2 mb-4">
                {whyVR.title}
              </h2>

              <p className="text-gray-600 text-lg">
                {whyVR.description}
              </p>

              <div className="mt-6">
                <Link href="/" className="inline-block group">
                  <span className="relative flex items-center justify-center w-44 h-12 overflow-hidden rounded-md border border-primary text-sm font-semibold uppercase">
                    
                    <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition duration-300"></span>

                    <span className="relative z-10 text-primary group-hover:text-white">
                      Get Started
                    </span>

                  </span>
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* 🔷 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item: any, index: number) => (
            <div
              key={index}
              className="fade fade-up bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-primary/10 border border-[#39acf9] mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {item.description}
              </p>

              {item.points && (
                <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                  {item.points.map((p: string, i: number) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* 🔷 BOTTOM */}
        <div className="fade fade-up grid md:grid-cols-2 gap-6">

          {/* Mission */}
          {mission && (
            <div className="fade fade-up bg-white rounded-xl shadow p-6">
              <div className="relative bg-primary/10 border border-[#39acf9] mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full">
                <Image
                  src={mission?.mission?.icon}
                  alt={mission?.mission?.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {mission.mission.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {mission.mission.description}
              </p>
            </div>
          )}

          {/* Why Success */}
          {whySuccess && (
            <div className="fade fade-up bg-white rounded-xl shadow p-6">
              <div className="relative bg-primary/10 border border-[#39acf9] mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full">
                <Image
                  src={whySuccess?.why_we_succeed?.icon || "/images/default.png"}
                  alt={whySuccess?.why_we_succeed?.title || "icon"}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">
                {whySuccess.why_we_succeed.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                {whySuccess.why_we_succeed.intro}
              </p>

              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                {whySuccess.why_we_succeed.points?.map((p: any) => (
                  <li key={p.id}>{p.text}</li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </>
  );
}