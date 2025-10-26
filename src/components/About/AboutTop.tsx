"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { carouselData } from "./Data";

const AboutTop = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2; // width of one full set

    gsap.to(container, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${gsap.utils.wrap(-totalWidth, 0, parseFloat(x))}px`,
      },
    });
  }, []);

  // Duplicate the data array once before rendering
  const duplicatedData = [...carouselData, ...carouselData];

  return (
    <div className="overflow-hidden bg-black text-white">
      <div className="pt-30 px-4 lg:px-8">
        <h1 className=" text-5xl lg:text-7xl font-bold text-center mb-10">
          About us
        </h1>
      </div>
      <h3 className=" px-4 lg:px-8 text-2xl lg:text-4xl mb-8">
        AI Capabilities
      </h3>
      <div
        ref={containerRef}
        className="carousel flex gap-4 w-max will-change-transform"
      >
        {duplicatedData.map((data, index) => (
          <div
            key={`${data.id}-${index}`}
            className="carousel-card relative shrink-0 rounded-lg overflow-hidden"
          >
            <img
              src={data.image}
              alt={data.title}
              className=" w-[300px] h-[50vh] lg:w-[500px] lg:h-[90vh] object-cover opacity-80"
            />
            <h6 className="absolute top-10 left-0 right-0 text-center text-white font-semibold text-base lg:text-2xl">
              {data.title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTop;
