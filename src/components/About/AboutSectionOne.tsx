import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="12" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className=" mb-4 flex items-center text-sm font-medium text-gray-300">
      <span className="bg-primary/10 text-primary mr-4 flex h-[20px] w-[20px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 pt-16 md:pt-20 lg:pt-10"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-15">
          <div className="w-full -mx-4 flex flex-col items-center justify-center text-center text-white flex-wrap">
            <h3 className="mb-4 text-3xl font-bold leading-tight! text-white sm:text-4xl md:text-[35px]">
              Why VR Consulting?
            </h3>

            <p className="text-sm text-gray-300 mb-6 leading-6">
              Comes with everything you need to get started!
            </p>
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">

              <h3 className="mb-4 text-2xl font-semibold leading-tight! text-white  sm:text-4xl md:text-[30px]">
                About VR Consulting
              </h3>
              <p className=" leading-relaxed! text-sm text-gray-300  mb-6 leading-6 ">
                VR Consulting is a Web Design and Development Company specialized in high quality web design and development solutions, custom web development, web based software application, SEO and web marketing services. At VR Consulting we see the customer's requirements, results in creating online business solutions opportunities for the clients.
              </p>


              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 ">
                    <List text="Web Development" />
                    <List text="Mobile Application Development " />
                    <List text="CMS Development Services" />
                    <List text="Testing & QA" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Web Design (UI/UX Design)" />
                    <List text="Custom Development Services" />
                    <List text="Digital Marketing" />
                    <List text="Web Hosting" />
                  </div>
                </div>
              </div>





              <div className="mx-auto mt-3 mb-6 flex flex-col items-center justify-between gap-8 rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-lg hover:border-blue-400 hover:shadow-2xl md:mb-3 md:flex-row md:px-12">

                {/* Left Content */}
                <div className="flex items-center gap-4">

                  {/* Name & Role */}
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">
                      Rashmita Sahoo
                    </h2>

                    <p className="mt-1 text-sm font-medium text-gray-500">
                      CEO, VR Web Consulting
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-20 w-px bg-gray-200 md:block"></div>

                {/* Right Content */}
                <div className="text-center md:text-left">
                  <p className="mb-2 flex items-center gap-2 text-lg text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="h-5 w-5 text-blue-500"
                    >
                      <path d="M391.1 351.1c-24.6 0-48.5-4-71-11.7-11.1-3.7-23.4-.9-31.9 7.5l-44.7 33.7c-51.8-27.6-94.4-70.2-122-122l33.7-44.7c8.4-8.5 11.2-20.8 7.5-31.9-7.7-22.5-11.7-46.4-11.7-71C151 93.1 137.9 80 121.9 80H48C21.5 80 0 101.5 0 128c0 212.1 171.9 384 384 384 26.5 0 48-21.5 48-48v-73.9c0-16-13.1-29.1-29.1-29.1z" />
                    </svg>

                    <span>Call to ask any question</span>
                  </p>

                  <Link
                    href="tel:+917982616770"
                    className="text-2xl font-extrabold tracking-wide text-blue-600 transition hover:text-blue-800"
                  >
                    +91 7982616770
                  </Link>
                </div>
              </div>


            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about-image.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full rounded-xl border-2 border-blue-300 drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
