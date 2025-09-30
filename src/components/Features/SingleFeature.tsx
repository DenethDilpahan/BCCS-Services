"use client";

import { Feature } from "@/types/feature";
import { useState } from "react";
import RequestForm from "./RequestForm";

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
      <div
        onClick={handleClick}
        className="wow fadeInUp cursor-pointer border border-gray-300 rounded-lg p-6 hover:border-primary transition duration-300"
        data-wow-delay=".15s"
      >
        <div className="bg-primary/10 text-primary mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>

        <h3 className="mb-3 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>

      {isOverlayOpen && (
        <RequestForm onClose={handleClose} title={title} />
      )}
    </div>
  );
};

export default SingleFeature;
