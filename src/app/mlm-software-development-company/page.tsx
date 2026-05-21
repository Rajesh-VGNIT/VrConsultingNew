import data from "@/data/footer.json";
import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Popup from "@/components/Popup";

export const metadata = {
  title: "MLM Software Development Company in India - VR Consulting",
  description:
    "VR Consulting is one of the leading MLM Software development service company in India who keeps yielding optimum services at an optimum price. Contact now!",
};

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

      <div className="max-w-6xl mx-auto py-12 space-y-16">

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

          <div className="relative w-full max-w-[450px] h-[400px] ml-auto rounded-xl overflow-hidden">
            <Popup item={section} type="hero" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-xl font-semibold mb-8 text-center">
            Best MLM Software Development Services Company in India
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
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