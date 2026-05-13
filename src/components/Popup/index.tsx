"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImagePopup({ item, type = "service" }: any) {
  const [open, setOpen] = useState(false);

  const imageSrc = item.image || item.heroImage;

  return (
    <>
      {/* Thumbnail */}
      <div
        className={`relative w-full cursor-pointer ${
          type === "hero" ? "h-[400px]" : "h-52"
        }`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={imageSrc}
          alt={item.title || "image"}
          fill
          className="object-contain"
        />
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">

          {/* Cross Button (HIGH Z-INDEX) */}
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-55 text-white text-2xl z-[10000] hover:text-blue-400 cursor-pointer"
          >
            ✕
          </button>

          {/* Image Wrapper */}
          <div className="relative w-[90%] max-w-5xl h-[80vh] z-[9999]">
            <Image
              src={imageSrc}
              alt="popup image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}