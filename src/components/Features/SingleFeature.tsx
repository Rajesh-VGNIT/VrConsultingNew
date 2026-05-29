import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, button } = feature;

  return (


<div className="w-full h-full">
  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

    <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl"></div>

    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
      Trusted
    </div>

  
    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-blue-200 bg-white shadow-sm group-hover:scale-110 transition">
      <img
        src={icon}
        alt="icon"
        className="h-12 w-12 object-contain"
      />
    </div>

    
    <h3 className="mb-2 text-lg font-semibold text-gray-900">
      {title}
    </h3>

  
    <p className="text-sm leading-6 text-gray-600">
      {paragraph}
    </p>

    {/* CTA */}
    {button && (
      <div className="mt-auto pt-6">
        <Link href={button.href}>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-3">
            {button.label}
            <span className="transition group-hover:translate-x-1">→</span>
          </div>
        </Link>
      </div>
    )}

  </div>
</div>
  );
};

export default SingleFeature;

