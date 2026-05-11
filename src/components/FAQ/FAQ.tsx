"use client";

import { useState } from "react";

const FAQ = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Heading */}
      <div className="faq-heading-par">
        <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
          What we provide
        </p>
        <h2 className="text-xl font-semibold mb-8 text-center">
          Why Choose VR Web Consulting for PHP Web Application Development?
        </h2>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        {items?.map((item: any, i: number) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="bg-white rounded-md shadow p-6 border-l-2 border-blue-400 "
            >
              {/* Question row WITH BORDER */}
              <div
                className={`flex justify-between items-center cursor-pointer border-b ${
                  isOpen ? "pb-3 border-gray-300" : "border-transparent"
                }`}
                onClick={() => toggle(i)}
              >
                <h3 className=" text-xl">
                  Why {item.title}?
                </h3>

                <span
                  className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-primary text-white text-[22px] font-bold leading-none"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Answer */}
              {isOpen && (
                <p className="text-sm text-gray-600 mt-3">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;