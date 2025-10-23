"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";
import { featuresData } from "./Data";

const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-black mt-16 lg:mt-24">
      <div className="py-8 max-w-7xl mx-auto text-white px-2 lg:px-4">
        <motion.div
          className="flex flex-col items-center justify-center mb-8 text-center"
          ref={ref}
          style={{ translateY: y, opacity: opacity }}
        >
          <h6 className=" text-2xl lg:text-4xl font-semibold mb-2 ">
            Our Features
          </h6>
          <p className=" text-sm lg:text-lg">
            A collection of short films and music videos made entirely with
            Gen-4 to test the {"model's"} narrative capabilities.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Top row: 3 images */}
          {featuresData.map((feature) => (
            <div key={feature.id} className="relative group z-50">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
              <div className=" absolute z-20 inset-0 w-fit h-fit m-auto flex flex-col items-center justify-center gap-4 z-10">
                <h6 className=" opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out">
                  {feature.title}
                </h6>
                <p className=" opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out">
                  {feature.description}
                </p>
              </div>
              <div className=" backdrop-blur-xs absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />

              <button className=" absolute left-0 right-0 bottom-40 lg:inset-0 w-fit h-fit m-auto border-2 border-white text-sm px-2 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out lg:opacity-0 group-hover:opacity-100 z-50">
                Show more
              </button>
              <div className=" bg-black/40 inset-0 absolute z-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
