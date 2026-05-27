"use client";

import Link from "next/link";

const NewsLatterBox = () => {


  return (
    <div className="bg-[#001B4E] shadow-three relative z-10 rounded-xs p-4 sm:p-11 lg:p-4 xl:p-6 mb-10 md:mb-0">
      {/* Right Side Contact Card */}
      <div className=" ">

        {/* Map */}
        <div className="overflow-hidden Image-map">
          <iframe
            src="https://maps.google.com/maps?q=Block,%20304,%202nd%20Floor,%20Moolchand%20Tower,%20Sector%2022,%20Noida,%20Uttar%20Pradesh%20201301&t=&z=13&ie=UTF8&iwloc=&output=embed"
            
          
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full "
          ></iframe>
        </div>

        {/* Content */}
        <div className="mt-4">
          <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            Contact Info
          </span>

          <h2 className="text-3xl text-white font-bold mb-6 leading-tight">
            Our Address
          </h2>

          {/* Address */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="bg-primary hover:bg-blue-700 min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M172.3 501.7C26.97 291 0 269.4 0 192C0 85.96 85.96 0 192 0S384 85.96 384 192c0 77.4-26.97 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272c44.18 0 80-35.82 80-80S236.2 112 192 112s-80 35.82-80 80 35.82 80 80 80z" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white">Office Address</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <a
                    href="https://www.google.com/maps/place/VR+Consulting+-+Website+Design+%26+Development+service/@28.597351,77.348714,18z/data=!4m6!3m5!1s0x390ce5d2577eaaad:0xbf00ab8c1f61012f!8m2!3d28.5974309!4d77.348145!16s%2Fg%2F11h2hf410j?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition duration-300"
                  >
                    Sector-22, Noida, Uttar Pradesh 201301
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-primary hover:bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M391.1 351.1c-24.6 0-48.5-4-71-11.7-11.1-3.7-23.4-.9-31.9 7.5l-44.7 33.7c-51.8-27.6-94.4-70.2-122-122l33.7-44.7c8.4-8.5 11.2-20.8 7.5-31.9-7.7-22.5-11.7-46.4-11.7-71C151 93.1 137.9 80 121.9 80H48C21.5 80 0 101.5 0 128c0 212.1 171.9 384 384 384 26.5 0 48-21.5 48-48v-73.9c0-16-13.1-29.1-29.1-29.1z" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white">Call Us</h4>
                <p className="text-gray-300 text-sm">
                  <Link
                    href="tel:+917982616770"
                    className="hover:text-white transition duration-300"
                  >
                    +91 7982616770
                  </Link>

                  <br />

                  <Link
                    href="tel:+919958222665"
                    className="hover:text-white transition duration-300"
                  >
                    +91 9958222665
                  </Link>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-primary hover:bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M502.3 190.8 327.4 338c-15.4 12.9-37.5 12.9-52.9 0L9.7 190.8C3.9 186 0 178.9 0 171.2V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v59.2c0 7.7-3.9 14.8-9.7 19.6zM0 214.8v185.2c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V214.8L346.6 353.4c-27.7 23.2-67.5 23.2-95.2 0L0 214.8z" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white">Email Address</h4>
                <p className="text-gray-300 text-sm">
                  <Link
                    href="mailto:rashmita@vrwebconsulting.com"
                    className="hover:text-white transition duration-300"
                  >
                    rashmita@vrwebconsulting.com
                  </Link>
                </p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-4">
              <div className="bg-primary hover:bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  {/* Globe / Website Icon */}
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm193.7 224H352c-6.7-73.6-32.6-138.5-69.3-183.4 89.2 12.9 159.9 83.6 172.9 183.4zM256 56c42.2 45.7 69.1 109.6 76 176H180c6.9-66.4 33.8-130.3 76-176zM56.3 280H160c6.7 73.6 32.6 138.5 69.3 183.4C140.1 450.5 69.3 379.8 56.3 280zm103.7-48H56.3c13-99.8 83.8-170.5 172.9-183.4C192.6 93.5 166.7 158.4 160 232zm96 224c-42.2-45.7-69.1-109.6-76-176h152c-6.9 66.4-33.8 130.3-76 176zm53.3 7.4C346.1 418.5 372 353.6 378.7 280h103c-13 99.8-83.7 170.5-172.4 183.4z" />
                </svg>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-white">Website</h4>
                <p className="text-gray-300 text-sm">
                  <Link
                    href="https://www.vrwebconsulting.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition duration-300"
                  >
                    https://www.vrwebconsulting.com/
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewsLatterBox;
