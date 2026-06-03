
import Image from "next/image";

import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import PopupCarrer from "@/components/PopupCarrer";
import pageMetadata from "@/data/metadata.json";
import Link from "next/link";

export const metadata = pageMetadata["careers"];


const Page = () => {
  
  const section = data?.Carrer;

  if (!section) {

    return (
      <div className="py-20 text-center text-xl font-semibold">
        Career data not found
      </div>
    );
  }

  return (
    <>
      <PopupCarrer />

      <Breadcrumb1
        pageName="Careers"
        description="Explore rewarding career opportunities, enhance your skills, grow professionally, and build a successful future with our dynamic team."
      />

      <div className="container w-full py-10  mx-auto py-12 space-y-16">

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Get Hired,
            <br />
            Looking for jobs here
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {section?.whyChooseFlutter?.map(
              (item: any, i: number) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 text-left shadow-lg border hover:shadow-xl transition"
                >

                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-semibold text-xl mb-3">
                    {item.title}
                  </h3>

                  <h4 className="text-md font-semibold text-black mb-3">
                    {item.subtitle || item.description}
                  </h4>

                  {item.description && (
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>
                  )}

                  {item.experience && (
                    <p className="text-sm mb-2">
                      <span className="text-md">
                        Experience:
                      </span>{" "}
                      <span className="text-gray-600">
                        {item.experience}
                      </span>
                    </p>
                  )}

                  {item?.role?.length > 0 && (
                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 mb-4">
                      {item.role.map(
                        (role: string, index: number) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: role,
                            }}
                          />
                        )
                      )}
                    </ul>
                  )}

                  {item.jobtype && (
                    <p className="text-sm mb-4">
                      <span className="text-md">
                        Job Type:
                      </span>{" "}
                      <span className="text-gray-600">
                        {item.jobtype}
                      </span>
                    </p>
                  )}

                  {item.email && (
                    <p className="text-sm font-semibold text-gray-600 break-words">
                      If Interested contact us @{" "}

                      <Link
                        href="tel:+917982616770"
                        className="hover:underline"
                      >
                        +91 7982616770
                      </Link>

                      {" "}or email us @{" "}

                      <Link
                        href={`mailto:${item.email}`}
                        className="hover:underline"
                      >
                        {item.email}
                      </Link>
                    </p>
                  )}
                </div>
              )
            )}

          </div>
        </div>

      </div>
    </>
  );
};

export default Page;