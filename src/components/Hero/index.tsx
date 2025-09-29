"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import { useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const images = [
  "/images/hero/thumb1.png",
  "/images/hero/thumb2.png",
  "/images/hero/thumb3.png",
  "/images/hero/thumb4.png",
  "/images/hero/thumb5.png"
];

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    setMousePos({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  const handleLetterHover = () => {
    const randomImg = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImg);
    setHovered(true);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center 
                 bg-gray-100 dark:bg-black overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logo/bccs.svg"
          alt="BCCS Watermark Logo"
          width={9000}
          height={9000}
          className="object-contain opacity-3 pointer-events-none select-none filter grayscale brightness-90"
        />
      </div>

      <h1 className="absolute text-[12vw] md:text-[20.1vw] 
                     font-extrabold text-gray-800 dark:text-gray-300 
                     opacity-10 select-none pointer-events-none whitespace-nowrap">
        SERVICES
      </h1>

      <div className="relative z-10 flex flex-col items-center text-center px-4 -translate-y-12 md:-translate-y-22">
        <Image
          src="/images/logo/bccs.svg"
          alt="BCCS Logo"
          width={150}
          height={150}
          className="filter translate-y-2 md:translate-y-5"
        />

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white mt-0 translate-y-2 md:translate-y-7">
          Welcome To
        </h2>

        <h2 className="text-7xl sm:text-9xl md:text-[10vw] font-bold leading-tight text-gray-900 dark:text-white mt-0">
          {"SERVICES".split("").map((letter, idx) => (
            <span
              key={idx}
              onMouseEnter={handleLetterHover}
              onMouseLeave={() => setHovered(false)}
              onMouseMove={handleMouseMove}
              className="cursor-pointer relative"
            >
              {letter}
            </span>
          ))}
        </h2>
      </div>

      <div className={`${orbitron.className} absolute text-1xl sm:text-2xl md:text-3xl bottom-12 right-4 text-gray-900 dark:text-white text-sm opacity-70 select-none`}>
        Computer
      </div>
      <div className={`${orbitron.className} absolute text-1xl sm:text-2xl md:text-3xl bottom-4 right-4 text-gray-900 dark:text-white text-sm opacity-70 select-none`}>
        Society
      </div>

      {hovered && (
        <div
          className="fixed pointer-events-none z-50"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          <Image
            src={currentImage}
            alt="Random Thumb"
            width={250}
            height={300}
            className="rounded shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
