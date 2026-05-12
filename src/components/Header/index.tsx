"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const pathname = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };


  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-70 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-4"
                  } `}
              >
                <Image
                  src="/images/logo/vrc-logo.png"
                  alt="logo"
                  width={170}
                  height={30}
                  className="w-full "
                />
                
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : " "
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-10">

                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="relative group">

                        {/* LEVEL 1 */}
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`block py-2 lg:py-6 ${pathname === menuItem.path
                                ? "text-primary"
                                : "text-dark"
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center gap-2 py-2 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3"> <svg width="25" height="24" viewBox="0 0 25 24"> <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z" fill="currentColor" /> </svg> </span>
                          </p>

                        )}

                        {/* LEVEL 2 */}
                        {menuItem.submenu && (
                          <div
                            className={`absolute left-0 top-full z-50 w-[300px] bg-white shadow-lg ${openIndex === index ? "block" : "hidden"
                              } lg:group-hover:block`}
                          >
                            {menuItem.submenu.map((submenuItem) => (
                              <div key={submenuItem.id} className="relative group/sub">

                                {/* If 3rd level exists */}
                                {submenuItem.submenu ? (
                                  <>
                                    {submenuItem.path ? (
                                      <Link
                                        href={submenuItem.path}
                                        className="block px-4 py-2 text-sm hover:text-primary"
                                      >
                                        {submenuItem.title}

                                      </Link>
                                    ) : (
                                      <p className="flex items-center justify-between px-4 py-2 text-sm font-medium">
                                        {submenuItem.title}

                                        <span className="pl-3">
                                          <svg width="25" height="24" viewBox="0 0 25 24">
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </p>
                                    )}

                                    {/* LEVEL 3 */}
                                    <div className="hidden group-hover/sub:block absolute left-full top-0 w-[280px] bg-white shadow-lg">
                                      {submenuItem.submenu.map((child) => (
                                        <Link
                                          key={child.id}
                                          href={child.path || "#"}
                                          className="flex items-center gap-2 px-4 py-2 text-sm hover:text-primary"
                                        >
                                          {/* LEFT ARROW */}
                                          <span className="transition-transform duration-200 group-hover:-translate-x-1">
                                            <svg
                                                  width="18"
                                                  height="18"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="3"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                >
                                                  <path d="M9 6l6 6-6 6" />
                                                </svg>
                                          </span>

                                          {child.title}
                                        </Link>
                                      ))}
                                    </div>
                                  </>
                                ) : (
                                  // normal level 2 item
                                  submenuItem.path ? (
                                    <Link
                                      href={submenuItem.path}
                                      className="block px-4 py-2 text-sm hover:text-primary"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ) : (
                                    <span className="block px-4 py-2 text-sm text-gray-400">
                                      {submenuItem.title}
                                    </span>
                                  )
                                )}

                              </div>
                            ))}
                          </div>
                        )}

                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/contact"
                >
                  <button className=" bg-primary text-white cursor-pointer hover:bg-primary-500 flex items-center justify-center w-30 h-12  text-sm font-semibold uppercase  rounded-md border-indigo-400 group">
                    
                      Contact Us
                    
                  </button>
                </Link>
                {/* <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
