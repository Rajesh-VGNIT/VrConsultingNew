import Breadcrumb from "@/components/Common/Breadcrumb1";
import portfolioData from "@/data/portfolio.json";
import Link from "next/link";
export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "no-store",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["webdesign"];
}

export default function WebDesignPage() {
  const webdesign = portfolioData.webdesign;
  const portfolioBtn = portfolioData.portfolioBtn;
  return (
    <>
      <Breadcrumb
        pageName="All Projects"
        description="" />
      <main className="bg-[#f5f5f5] min-h-screen">

        {/* HERO SECTION */}


        {/* PORTFOLIO SECTION */}
        <section className="py-12  px-6">

          <div className="container mx-auto">

            {/* TITLE */}
            <div data-aos="fade-up" className="text-center mb-14">
              <h2 className="mb-5 text-2xl font-bold text-black text-center lg:text-4xl sm:text-2xl">
                All Projects
              </h2>
            </div>

            <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4 mb-20">
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioBtn.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-10 py-3 rounded-md text-xl  shadow-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* GRID */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {webdesign.map((item) => (
                <Link data-aos="fade-up"
                  key={item.id}
                  href={item.url}
                  className="group overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-[1px]"
                >
                  <div className="flex h-full flex-col rounded-[30px] bg-slate-950">

                    {/* Image */}
                    <div className="overflow-hidden rounded-t-[30px]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Fixed Bottom Section */}
                    <div className="flex h-[180px] flex-col justify-between p-6">
                      <div>
                        <span className="text-primary text-sm uppercase tracking-widest">
                          {item.category}
                        </span>

                        <h3 className="mt-3 text-2xl font-bold text-white line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">
                          View Website
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white rotate-[-40deg]">
                          →
                        </div>
                      </div>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

          </div>

        </section>

      </main>
    </>
  );
}