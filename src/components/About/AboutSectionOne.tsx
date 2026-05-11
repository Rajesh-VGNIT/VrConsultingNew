import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="12" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-4 flex items-center text-sm font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[20px] w-[20px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="bg-indigo-50 pt-16 md:pt-20 lg:pt-10">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="w-full -mx-4 flex flex-wrap items-center">
          <SectionTitle
                title="Why VR Consulting?"
                paragraph="Comes with everything you need to get started !"
                center
              />
          </div>
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
           
              <h3 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[30px]">
                About VR Consulting
              </h3>
              <p className="text-base leading-relaxed! text-body-color mb-6 md:text-lg">
                VR Consulting is a Web Design and Development Company specialized in high quality web design and development solutions, custom web development, web based software application, SEO and web marketing services. At VR Consulting we see the customer's requirements, results in creating online business solutions opportunities for the clients.
              </p>
              

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
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
