"use client";

import { useState } from "react";

const FAQEcommerce = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div data-aos="fade-up">
      <p className="text-sm mb-3 text-center text-blue-600 font-semibold uppercase">
        What we provide
      </p>
      <h2 className="text-xl font-semibold mb-8 text-center">
       Why Choose VR Web Consulting for E-commerce Website Development?
      </h2>

      <div className="space-y-4">
        {items?.map((item: any, i: number) => (
          <div key={i} className="bg-white rounded-md shadow p-6 border-l-2 border-blue-400">
            
            {/* Question */}
            <div
                className={`flex justify-between items-center cursor-pointer border-b ${
                  openIndex === i ? "pb-3 border-b border-gray-300" : "border-transparent"
                }`}
                onClick={() => toggle(i)}
              >
              <h3 className=" text-xl">
                Why {item.title}?
              </h3>

              <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-primary text-white text-[22px] font-bold leading-none">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {openIndex === i && (
              <p className="text-sm text-gray-600 mt-3">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQEcommerce;