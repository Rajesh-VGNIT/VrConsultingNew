import Link from "next/link";
import { Metadata } from "next";
import {
  Zap,
  Rocket,
} from "lucide-react";

export const metadata: Metadata = {
  title: "404 Error | Vr Consulting",
  description: "Oops! The page you are looking for was not found.",
};

const ErrorPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#dee1eb] flex items-center justify-center px-6 py-20">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl"></div>

        <div className="absolute top-[30%] right-[15%] w-[180px] h-[180px] bg-white/40 rounded-full blur-2xl"></div>
      </div>

      
      <div className="relative z-10 max-w-6xl w-full mt-7">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

         
          <div>

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/70 border border-white text-blue-700 text-sm font-semibold shadow-md backdrop-blur-md">
              ERROR 404
            </span>

            <h1 className="mt-8 text-4xl md:text-7xl font-black leading-tight text-gray-900">
              Oops! <br />
              Page Missing
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl">
              The page you are trying to access may have been removed,
              renamed, or temporarily unavailable.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-xl hover:scale-105 transition duration-300"
              >
                Back To Home
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl bg-white/80 border border-white text-gray-800 font-semibold shadow-md hover:bg-white transition duration-300"
              >
                Contact Us
              </Link>

            </div>
          </div>

          <div className="relative flex justify-center">

            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-white/40 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center">

              <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl flex items-center justify-center">

                <h2 className="text-[80px] md:text-[130px] font-black text-white drop-shadow-lg">
                  404
                </h2>
              </div>
              <div className="absolute top-6 left-0 px-5 py-3 rounded-2xl bg-white shadow-xl border border-gray-100">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                   <Rocket className="w-4 h-4 text-cyan-500" />
                   <span>Page Not Found</span>
                </p>
              </div>

              <div className="absolute bottom-6 right-0 px-5 py-3 rounded-2xl bg-white shadow-xl border border-gray-100">
                <p className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                   <Zap className="w-4 h-4 text-yellow-500" /> <span>Try Again</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ErrorPage;