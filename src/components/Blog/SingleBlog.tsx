import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const {
    title,
    image,
    paragraph,
    author,
    tags,
    publishDate,
    link,
    button,
  } = blog;

  return (
    <div className="group relative overflow-hidden rounded-[32px] p-[1px] ">

      {/* Top Gradient Glow */}
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-fuchsia-100 rounded-full blur-3xl opacity-50"></div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-cyan-300 transition duration-500"></div>


      {/* Main Card */}
      <div data-aos="fade-up" className="relative z-10 overflow-hidden rounded-[32px] bg-white shadow-xl">

        {/* Image Section */}
        <Link
          href={link}
          className="relative block h-[320px] overflow-hidden"
        >
          {/* Main Image */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Floating Decorative Blur */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

          {/* Tag */}
          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            {tags[0]}
          </span>

          {/* Title Content */}
          <div className="absolute bottom-0 z-20 p-6">
            <p className="mb-2 text-sm font-medium text-cyan-200">
              {publishDate}
            </p>

            <h3
                className="block text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-blue-500"
              >
                {title}
             
            </h3>
          </div>
        </Link>

        {/* Bottom Content */}
        <div className="relative p-6">

          {/* Paragraph */}
          <p className="mb-6 line-clamp-3 text-base leading-relaxed text-gray-600">
            {paragraph}
          </p>

          {/* Divider */}
          <div className="mb-5 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

          {/* Footer */}
          <div className="flex items-center justify-between">



            {/* Button */}
            <Link
              href={link}
              className="inline-flex items-center gap-2 rounded-md bg-primary  px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              {button}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;