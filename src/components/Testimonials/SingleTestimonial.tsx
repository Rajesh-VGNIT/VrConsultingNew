import { Testimonial } from "@/types/testimonial";
// import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
   <div className="w-full mb-6">
  <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-blue-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">

    {/* Top Section */}
    <div className="mb-6 flex items-center justify-between">
      
      {/* User */}
      <div className="flex items-center gap-4">
        
        {/* Profile Circle */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">
          {name?.charAt(0)}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {designation}
          </p>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="text-5xl text-blue-100 group-hover:text-blue-200">
        ”
      </div>
    </div>

    {/* Review */}
    <p className="mb-6 text-sm leading-7 text-gray-600 dark:text-gray-300">
      “{content}”
    </p>

    {/* Rating */}
    <div className="flex items-center gap-1">
      {ratingIcons}
    </div>

  </div>
</div>
  );
};

export default SingleTestimonial;
