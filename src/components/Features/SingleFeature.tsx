"use client";

import { Feature } from "@/types/feature";
import { useState } from "react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => {
    setIsOverlayOpen(true);
  };

  const handleClose = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div
          onClick={handleClick}
          className="cursor-pointer bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md"
        >
          {icon}
        </div>

        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>

      {isOverlayOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={handleClose} 
        >
          <div
            className="bg-white dark:bg-gray-800 w-200 h-180 rounded-lg p-6 relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFeature;

