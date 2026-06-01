"use client";

import Link from "next/link";
import footerData from "./footerData";

const Footer = () => {
  const {
    ourProducts,
    companyProfile,
    ourServices,
    footerLinks,
    socialLinks,
    contactInfo,
    Copyright,
  } = footerData;

  return (
    <footer className="relative z-10 overflow-hidden bg-[#363d74] pt-10 text-white md:pt-15 lg:pt-15">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">

          {/* Our Products */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12">
            <div className="mb-7 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold">
                {ourProducts.heading}
              </h2>

              <ul>
                {ourProducts.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="mb-3 inline-block duration-300 hover:text-blue-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-5 flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-[#363d74]"
                  >
                    {social.title === "Facebook" && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="currentColor"
                      >
                        <path d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z" />
                      </svg>
                    )}

                    {social.title === "Twitter" && (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="currentColor"
                      >
                        <path d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831Z" />
                      </svg>
                    )}

                    {social.title === "LinkedIn" && (
                      <svg width="18" height="18" viewBox="0 0 17 16" fill="currentColor" className="fill-current" > <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" /> </svg>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company Profile */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-5 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold">
                {companyProfile.heading}
              </h2>

              <ul>
                {companyProfile.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="mb-3 inline-block duration-300 hover:text-blue-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Services */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-5 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold">
                {ourServices.heading}
              </h2>

              <ul>
                {ourServices.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="mb-3 inline-block duration-300 hover:text-blue-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full px-4 lg:w-3/12">
            <div className="mb-7 lg:mb-12">
              <h2 className="mb-6 text-xl font-bold">
                {contactInfo.heading}
              </h2>

              <ul className="space-y-5 text-white">

                {/* Phone */}
                <li className="flex gap-4 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 mt-1"
                  >
                    <path d="M391.1 351.1c-24.6 0-48.5-4-71-11.7-11.1-3.7-23.4-.9-31.9 7.5l-44.7 33.7c-51.8-27.6-94.4-70.2-122-122l33.7-44.7c8.4-8.5 11.2-20.8 7.5-31.9-7.7-22.5-11.7-46.4-11.7-71C151 93.1 137.9 80 121.9 80H48C21.5 80 0 101.5 0 128c0 212.1 171.9 384 384 384 26.5 0 48-21.5 48-48v-73.9c0-16-13.1-29.1-29.1-29.1z" />
                  </svg>

                  <div className="leading-6">
                    <Link href={`tel:${contactInfo.phone1}`} className="block hover:text-gray-200">
                      {contactInfo.phone1}
                    </Link>

                    <Link href={`tel:${contactInfo.phone2}`} className="block hover:text-gray-200">
                      {contactInfo.phone2}
                    </Link>
                  </div>
                </li>

                {/* Email */}
                <li className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0"
                  >
                    <path d="M502.3 190.8 327.4 338c-15.4 12.9-37.5 12.9-52.9 0L9.7 190.8C3.9 186 0 178.9 0 171.2V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v59.2c0 7.7-3.9 14.8-9.7 19.6zM0 214.8v185.2c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V214.8L346.6 353.4c-27.7 23.2-67.5 23.2-95.2 0L0 214.8z" />
                  </svg>

                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-gray-200"
                  >
                    {contactInfo.email}
                  </Link>
                </li>

                {/* Address */}
                <li className="flex gap-4 items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 mt-1"
                  >
                    <path d="M172.3 501.7C26.97 291 0 269.4 0 192C0 85.96 85.96 0 192 0S384 85.96 384 192c0 77.4-26.97 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272c44.18 0 80-35.82 80-80S236.2 112 192 112s-80 35.82-80 80 35.82 80 80 80z" />
                  </svg>

                  <Link
                    href="https://www.google.com/maps/place/VR+Consulting+-+Website+Design+%26+Development+service/@28.597351,77.348714,18z/data=!4m6!3m5!1s0x390ce5d2577eaaad:0xbf00ab8c1f61012f!8m2!3d28.5974309!4d77.348145!16s%2Fg%2F11h2hf410j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leading-6 hover:text-gray-200"
                  >
                    {contactInfo.address}
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mb-10 flex justify-center gap-6">
          {footerLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="transition-all duration-300 hover:text-blue-300"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        {/* Copyright */}
        <div className="py-8">
          <p className="text-center">
            {Copyright.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;