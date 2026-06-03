import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section data-aos="fade-up" className="py-16 md:py-20 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          
          
          <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] lg:m-0">
              <Image
                src="/images/about/about-image2.jpg"
                alt="about image"
                fill
                className="rounded-xl border-2 border-blue-300 object-cover dark:hidden"
              />
              <Image
                src="/images/about/about-image2-dark.jpg"
                alt="about image"
                fill
                className="hidden rounded-xl border-2 border-blue-300 object-cover dark:block"
              />
            </div>
          </div>

       
          <div data-aos="fade-up" className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">

             
              <div className="relative pl-16 mb-10">
                <div className="absolute left-6 top-10 h-full w-[2px] bg-blue-900"></div>

                <div className="flex items-start gap-4 relative min-h-[100px]">
                  <div className="absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white z-10">
                    <Image
                      src="/images/about/Bugfreecode.png"
                      alt="Bug free code"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      Bug free code
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      Clean, error-free code that runs smoothly without crashes,
                      improves performance, ensures reliability, and delivers
                      consistent results across different environments.
                    </p>
                  </div>
                </div>
              </div>

             
              <div className="relative pl-16 mb-10">
                <div className="absolute left-6 top-10 h-full w-[2px] bg-blue-900"></div>

                <div className="flex items-start gap-4 relative min-h-[100px]">
                  <div className="absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white z-10">
                    <Image
                      src="/images/about/premier-support.png"
                      alt="Premier support"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      Premier support
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      Premier support offers priority assistance, expert guidance,
                      faster resolutions, and dedicated help for critical issues.
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="relative pl-16">
                <div className="absolute left-6 top-0 h-full w-[2px] bg-blue-900"></div>

                <div className="flex items-start gap-4 relative min-h-[80px]">
                  <div className="absolute -left-16 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-white z-10">
                    <Image
                      src="/images/about/Web-Development.png"
                      alt="Web Development"
                      width={50}
                      height={50}
                    />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                      Web Development
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color">
                      Modern web development delivers fast, responsive,
                      scalable websites tailored to user experience and
                      business needs.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;