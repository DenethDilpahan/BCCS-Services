'use client';

import RequestForm from "./RequestForm";
import BackendForm from "./BackendForm";
import VideoForm from "./VideoForm";
import PostForm from ".//PostForm";
import WebForm from "./WebForm";
import { Feature } from "@/types/feature";
import { useState } from "react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleClick = () => setIsOverlayOpen(true);
  const handleClose = () => setIsOverlayOpen(false);

  const renderForm = () => {
    switch (title) {
      case "Full Package Service":
        return <RequestForm onClose={handleClose} title={title} />;
      case "Backend Management":
        return <BackendForm onClose={handleClose} title={title} />;
      case "Video Production":
        return <VideoForm onClose={handleClose} title={title} />;
      case "Post Design":
        return <PostForm onClose={handleClose} title={title} />;
      case "Web Development":
        return <WebForm onClose={handleClose} title={title} />;
      default:
        return <RequestForm onClose={handleClose} title={title} />;
    }
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

      {isOverlayOpen && renderForm()}
    </div>
  );
};

export default SingleFeature;
