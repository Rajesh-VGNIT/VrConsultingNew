
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rasa Costrac",
    designation: " CEO | Australia",
    content:
      "Since Two Years VR Consulting successfully Develop and Maintain our Tour & Travel Website. They ensured the impact of our business was minimal; they are very professional,ethical and having great team spirit. I strongly recomend VR Consulting for future projects.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "AMIT K LALIT ",
    designation: "CEO",
    content:
      "Someone refered me to hire VR consulting,initially I was little affraid but once We started working togehther I can say they are the best.They use top notch code, very detail oriented,deliver on time andalso gave great support whenevr needed.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Yachi Palach",
    designation: "Marketing Head | Israel",
    content:
      "It was a wonderful working experience with your team VR Consulting. We were stuck up with our development team but you make an excellent effort to deliver our Mobile Application on time. I like the way you analyze every details of Project and make me comfortable to build my trust.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Mohit",
    designation: "Founder @Lineicons",
    content:
      "It was a wonderful working experience with your team VR Consulting. We were stuck up with our development team but you make an excellent effort to deliver our Mobile Application on time. I like the way you analyze every details of Project and make me comfortable to build my trust. ",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-light relative z-10 py-16 md:py-20 lg:py-10 ">
      <div className="container">
        <SectionTitle
          title="What Say Our Customers"
          paragraph="Real feedback from our happy clients highlighting trust, quality, and satisfaction."
          center
        />

        {/* Slider Container */}
        <div className="relative mt-10">

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            loop={true}
            watchOverflow= {false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <SingleTestimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LEFT ARROW */}
          <button className="testimonial-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-primary/80 transition cursor-pointer">
           <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button className="testimonial-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-primary/80 transition cursor-pointer">
           <ChevronRight size={20} />
          </button>

        </div>
      </div>


     {/* Modern Abstract Background */}
<div className="absolute inset-0 z-[-1] overflow-hidden bg-white">

  {/* Base Gradient */}
  <div className="absolute " />

  {/* Soft 3D Glow Center */}
  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full " />

  {/* 3D Cube SVG (Top Left) */}
  <svg
    className="absolute left-16 top-16 opacity-40"
    width="140"
    height="140"
    viewBox="0 0 100 100"
  >
    <polygon points="50,10 90,30 50,50 10,30" fill="#93c5fd" />
    <polygon points="10,30 50,50 50,90 10,70" fill="#60a5fa" />
    <polygon points="90,30 50,50 50,90 90,70" fill="#3b82f6" />
  </svg>

  {/* 3D Cube SVG (Bottom Right) */}
  <svg
    className="absolute right-16 bottom-16 opacity-40"
    width="160"
    height="160"
    viewBox="0 0 100 100"
  >
    <polygon points="50,10 90,30 50,50 10,30" fill="#38bdf8" />
    <polygon points="10,30 50,50 50,90 10,70" fill="#60a5fa" />
    <polygon points="90,30 50,50 50,90 90,70" fill="#2563eb" />
  </svg>

  {/* Floating 3D Diamond Shape */}
  <svg
    className="absolute left-1/3 top-1/4 opacity-30"
    width="120"
    height="120"
    viewBox="0 0 100 100"
  >
    <polygon points="50,5 90,50 50,95 10,50" fill="#93c5fd" />
    <polygon points="50,5 90,50 50,50 50,5" fill="#60a5fa" />
    <polygon points="10,50 50,50 50,95 10,50" fill="#3b82f6" />
  </svg>

  {/* Soft Blur Orbs */}
  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[200px]" />
  <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-300/20 blur-[180px]" />

  {/* Subtle Grid */}
  <div className="absolute inset-0 opacity-[0.04]">
    <div className="h-full w-full bg-[radial-gradient(circle,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  {/* Glow Dots */}
  <div className="absolute left-1/2 top-1/3 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]" />
  <div className="absolute right-1/3 bottom-1/4 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(14,165,233,0.9)]" />

</div>
    </section>
  );
};

export default Testimonials;