import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, button } = feature;

  return (
    <div className=" w-full border p-4 rounded-md hover:bg-primary/3 flex flex-col h-full">
      <div className="wow fade fade-top flex flex-col h-full" data-wow-delay=".15s">

        <div className="bg-primary/10 hover:bg-primary/15 border-1 border-[#39acf9] text-primary mb-6 flex h-[90px] w-[90px] items-center justify-center rounded-full transition-colors duration-300">
          <img
            src={icon}
            alt="icon"
            className="w-15 h-15 object-contain"
          />
        </div>

        <h3 className="mb-4 text-xl font-medium text-black sm:text-2xl lg:text-xl xl:text-xl dark:text-white">
          {title}
        </h3>

        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>

         {/* {button && (
          <Link
            href={button.href}
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
         >
             {button.label} →
           </Link>
         )} */}


      
        <div className="mt-auto pt-4">
          {button && (
            <Link href={button.href}>
              <button className="relative flex items-center justify-center w-40 h-12 overflow-hidden text-sm font-semibold uppercase border-1 rounded-md border-indigo-400 group cursor-pointer">
                <div className="absolute w-full h-12 transition-all duration-300 bg-indigo-400 right-full group-hover:right-0"></div>
                <span className="relative transition-all duration-300 group-hover:text-white">
                  {button.label} →
                </span>
              </button>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default SingleFeature;

