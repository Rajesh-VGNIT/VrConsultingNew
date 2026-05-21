"use client";
import { useState } from "react";
import { X } from "lucide-react";

const CareerPopup = () => {

  const [open, setOpen] = useState(true);
  const [verificationCode] = useState(
    Math.floor(1000 + Math.random() * 9000)
  );
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 px-4 overflow-y-auto scrollbar-hide">
      <div className="relative mt-[266px] w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#001B5E] text-white transition hover:bg-blue-700"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="mb-8 text-center text-2xl font-bold leading-snug text-black">
          Please Provide us following information.
        </h2>
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Experience*
            </label>
            <select className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500">
              <option>Select Experience</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Position*
            </label>
            <input
              type="text"
              placeholder="Type your Position here"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              placeholder="Type your Name here"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email here"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Contact Number*
            </label>
            <input
              type="text"
              placeholder="Type your Contact Number"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Upload CV*
            </label>
            <input
              type="file"
              className="block w-full rounded-lg border border-gray-300 p-2 text-sm text-gray-600"
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Verification Code"
              className="h-12 flex-1 rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-blue-500"
            />
            <div className="flex h-12 w-24 items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-100 text-lg font-bold tracking-widest">
              {verificationCode}
            </div>
          </div>
          <div className="flex justify-center gap-4 pt-3">
            <button
              type="submit"
              className="h-11 min-w-[120px] rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-11 min-w-[120px] rounded-lg bg-gray-500 px-6 text-sm font-semibold text-white transition hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CareerPopup;