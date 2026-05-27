"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // LEVEL 1
  const [openIndex, setOpenIndex] = useState(-1);

  // LEVEL 2
  const [openSubIndex, setOpenSubIndex] = useState(-1);

  const pathname = usePathname();

  // MOBILE MENU
  const navbarToggleHandler = () => {
    setNavbarOpen((prev) => !prev);
  };

  // STICKY
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // LEVEL 1 TOGGLE
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
      setOpenSubIndex(-1);
    } else {
      setOpenIndex(index);
      setOpenSubIndex(-1);
    }
  };

  // LEVEL 2 TOGGLE
  const handleThirdMenu = (index: number) => {
    setOpenSubIndex(openSubIndex === index ? -1 : index);
  };

  // CLOSE ALL
  const closeAllMenus = () => {
    setNavbarOpen(false);
    setOpenIndex(-1);
    setOpenSubIndex(-1);
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-[9999] bg-white/80 backdrop-blur-md transition"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* LOGO */}
            <div className="w-70 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                onClick={closeAllMenus}
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-4"
                  }`}
              >
                <Image
                  src="/images/logo/vrc-logo.png"
                  alt="logo"
                  width={170}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* MOBILE TOGGLE */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[7px] rotate-45" : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : ""
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "top-[-8px] -rotate-45" : ""
                      }`}
                  />
                </button>

                {/* NAVBAR */}
                <nav
                  id="navbarCollapse"
                  className={`navbar overflow-y-auto overflow-x-hidden border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 max-h-[80vh] w-full rounded border bg-white px-6 py-4 duration-300 lg:visible lg:static lg:max-h-full lg:w-auto lg:overflow-visible lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="relative">
                        {/* LEVEL 1 LINK */}
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={closeAllMenus}
                            className={`block py-2 lg:py-6 hover:text-primary ${pathname === menuItem.path
                              ? "text-primary"
                              : "text-[#000] "
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleSubmenu(index)}
                            className="flex w-full cursor-pointer items-center justify-between py-2 text-left lg:w-auto lg:gap-2 lg:py-6 hover:text-primary"
                          >
                            {menuItem.title}

                            <span
                              className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                            >
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        )}

                        {/* LEVEL 2 */}
                        {menuItem.submenu && (
                          <div
                            className={`relative z-50 mt-2 w-full rounded bg-white pl-4 shadow-lg transition-all duration-300 dark:bg-dark lg:absolute lg:left-0 lg:top-full lg:mt-0 lg:w-[300px] lg:pl-0 ${openIndex === index
                              ? "block opacity-100"
                              : "hidden opacity-0"
                              }`}
                          >
                            {menuItem.submenu.map(
                              (submenuItem, subIndex) => (
                                <div
                                  key={submenuItem.id}
                                  className="relative"
                                >
                                  {/* HAS LEVEL 3 */}
                                  {submenuItem.submenu ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          handleThirdMenu(subIndex)
                                        }
                                        className="flex w-full items-center justify-between px-4 py-3 text-left text-md font-medium hover:text-primary "
                                      >
                                        {submenuItem.title}

                                        <span
                                          className={`transition-transform duration-300 ${openSubIndex === subIndex
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                        >
                                          <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="cursor-pointer"
                                          >
                                            <path d="M9 6l6 6-6 6" />
                                          </svg>
                                        </span>
                                      </button>

                                      {/* LEVEL 3 */}
                                      <div
                                        className={`ml-4 border-l border-gray-200 lg:absolute lg:left-full lg:top-0 lg:ml-0 lg:w-[280px] lg:border-none lg:bg-white lg:shadow-lg dark:lg:bg-dark ${openSubIndex === subIndex
                                          ? "block"
                                          : "hidden"
                                          }`}
                                      >
                                        {submenuItem.submenu.map((child) => (
                                          <Link
                                            key={child.id}
                                            href={child.path || "#"}
                                            onClick={closeAllMenus}
                                            className="flex items-center gap-2 px-4 py-3 text-md hover:text-primary"
                                          >
                                            <span>
                                              <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
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
                                  ) : submenuItem.path ? (
                                    <Link
                                      href={submenuItem.path}
                                      onClick={closeAllMenus}
                                      className="block px-4 py-3 text-md hover:text-primary"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ) : (
                                    <span className="block px-4 py-3 text-md text-gray-400">
                                      {submenuItem.title}
                                    </span>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center justify-end pr-16 lg:pr-0">

                {/* HIDE ON MOBILE */}
                <Link
                  href="/contact"
                  onClick={closeAllMenus}
                  className="hidden md:block"
                >
                  <button className="bg-primary hover:bg-blue-700 flex items-center justify-center rounded-md px-6 py-3.5 text-sm font-semibold uppercase text-white cursor-pointer">
                    Contact Us
                  </button>
                </Link>

                <div>

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