
"user client"
import Image from "next/image";
import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";

import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Web Consulting Services Providers in India - VR Consulting",
  description: "VR Consulting - The best web consulting services provider that helps you to meet your business needs. We also provide various services such as SEO, SMO, PPC, etc.",
};
const Page = () => {
  const section = data.HospitalManagementSystem;

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb1
        pageName="Hospital Management System"
        description="Hospital Management System streamlines patient records, appointments, billing, staff management, and healthcare operations for improved efficiency and care." />

      <div className="max-w-6xl mx-auto  py-12 space-y-16">

        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600">
              {section.description}
            </p>
          </div>

          <div className="relative ml-auto w-full max-w-[500px]  h-110 rounded-xl overflow-hidden">
            <Image
              src={section.heroImage}
              alt="hero"
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