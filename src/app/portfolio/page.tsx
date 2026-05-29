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
  return pageMetadata["portfolio"];
}

export default function PortfolioPage() {
 const portfolio = portfolioData.portfolio;
 const portfolioBtn = portfolioData.portfolioBtn;
  return (
    <>
      <Breadcrumb
        pageName="Portfolio"
        description="" />
      <main className="bg-[#f5f5f5] min-h-screen">

        {/* HERO SECTION */}


        {/* PORTFOLIO SECTION */}
        <section className="py-12 px-6">

          <div className="container mx-auto">

            {/* TITLE */}
            <div className="text-center mb-14">
              <h2 className="mb-5 text-2xl font-bold text-black text-center lg:text-4xl sm:text-2xl">
                Portfolio
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <div className="flex flex-wrap justify-center gap-4">
                {portfolioBtn.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-12 py-3 rounded-md text-xl  shadow-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 gap-10">

              {portfolio.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[220px] w-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-[#111] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-blue-500 uppercase tracking-wide text-sm font-medium">
                      {item.category}
                    </p>
                  </div>
                </a>
              ))}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}