"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  {
    key: "projects",
    label: "TOTAL PROJECTS",
    value: 120,
    suffix: "+",
    icon: "/images/counter/counter-1.png",
  },
  {
    key: "clients",
    label: "ACTIVE CLIENTS",
    value: 90,
    suffix: "+",
    icon: "/images/counter/counter-2.png",
  },
  {
    key: "rating",
    label: "CLIENT RATING",
    value: 4.8,
    suffix: "", 
    icon: "/images/counter/counter-3.png",
  },
  {
    key: "posts",
    label: "MEDIA POSTS",
    value: 1090,
    suffix: "+",
    icon: "/images/counter/counter-1.png",
  },
];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(
          Number.isInteger(value)
            ? Math.floor(start)
            : parseFloat(start.toFixed(1))
        );
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <h2 className="text-3xl font-bold mb-2 text-blue-900">
      {count}
      {suffix}
    </h2>
  );
}

export default function CounterDashboard() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    
    <div className="py-16 md:py-20 lg:py-10 flex w-full justify-center items-center bg-gray-100 ">
      <div className="container">
        <div
          ref={sectionRef}
          className="bg-white shadow-xl rounded-md flex divide-x divide-gray-200 w-full overflow-hidden"
        >
          {statsData.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-4 p-8 w-1/4"
            >
              {/* Icon Image */}
              <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full shadow-md">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  inView={inView}
                />

                <p className="text-xs text-gray-500 font-medium tracking-wide">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}