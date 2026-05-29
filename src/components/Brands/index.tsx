// "use client";

// import { Brand } from "@/types/brand";
// import Image from "next/image";
// import brandsData from "./brandsData";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// const Brands = () => {
//   return (
//     <section id="sliderimage" className=" py-16 md:py-20 lg:py-10">
//       <div className="container">
//         <div className="relative px-8  sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
          
//           {/* Slider */}
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             spaceBetween={20}
//             slidesPerView={2}
//             loop={true}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//             }}
//             navigation={{
//               nextEl: ".brand-next",
//               prevEl: ".brand-prev",
//             }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               768: { slidesPerView: 3 },
//               1024: { slidesPerView: 4 },
//               1280: { slidesPerView: 6 },
//             }}
//           >
//             {brandsData.map((brand) => (
//               <SwiperSlide key={brand.id}>
//                 <SingleBrand brand={brand} />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* LEFT ARROW */}
//           <button className="brand-prev absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:bg-primary/80 cursor-pointer">
//             <ChevronLeft size={20} />
//           </button>

//           {/* RIGHT ARROW */}
//           <button className="brand-next absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:bg-primary/80 cursor-pointer">
//            <ChevronRight size={20} />
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, name } = brand;

//   return (
//     <div className="flex items-center bg-gray-100 justify-center p-[10px]  rounded-lg">
//   <a
//     href={href}
//     target="_blank"
//     rel="nofollow noreferrer"
//     className="relative h-10 w-full"
//   >
//     <Image
//       src={image}
//       alt={name}
//       fill
//       quality={100}
//   priority
//       className="object-contain  "
//     />
//   </a>
// </div>
//   );
// };


"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section id="sliderimage" className="py-10 md:py-10 lg:py-10">
      <div className="container">
      

        {/* Grid Wrapper */}
        <div className= "w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">

          {brandsData.slice(0, 26).map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}

        </div>

     
    </div>
    </section>
  );
};

export default Brands;

/* ================= SINGLE BRAND CARD ================= */

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="group flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-12 w-full flex items-center justify-center"
      >
        <Image
          src={image}
          alt={name}
          fill
          quality={100}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </a>

    </div>
  );
};