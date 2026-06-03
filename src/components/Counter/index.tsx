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
    <h2 className="mb-2 font-bold text-blue-900 sm:text-2xl md:text-2xl lg:text-3xl">
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
    
    <div className="flex w-full items-center justify-center bg-gray-100 py-16 md:py-10 lg:py-10">
  <div className="container px-4">
    
    <div data-aos="fade-up"
      ref={sectionRef}
      className="grid overflow-hidden rounded-2xl bg-white shadow-xl 
      grid-cols-2 divide-y divide-gray-200 
      sm:grid-cols-2 sm:divide-y-0 sm:divide-x 
      lg:grid-cols-4"
    >
      {statsData.map((item) => (
        <div
          key={item.key}
          className="flex items-center gap-4 p-6 sm:p-8"
        >
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 shadow-md shrink-0">
            <img
              src={item.icon}
              alt={item.label}
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <AnimatedCounter
              value={item.value}
              suffix={item.suffix}
              inView={inView}
            />

            <p className="mt-1 text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
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