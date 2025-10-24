"use client";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import React, { useRef, useState } from "react";
import { featuresData } from "./Data";

// 🟢 Define the type for a feature item
interface Feature {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 🟣 State for modal
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const closeModal = () => setSelectedFeature(null);

  return (
    <div className="bg-black mt-16 lg:mt-24 relative">
      <div className="py-8 max-w-7xl mx-auto text-white px-2 lg:px-4">
        <motion.div
          className="flex flex-col items-center justify-center mb-8 text-center"
          ref={ref}
          style={{ translateY: y, opacity: opacity }}
        >
          <h6 className="text-2xl lg:text-4xl font-semibold mb-2">
            Our Features
          </h6>
          <p className="text-sm lg:text-lg">
            A collection of short films and music videos made entirely with
            Gen-4 to test the model’s narrative capabilities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {featuresData.map((feature: Feature) => (
            <div key={feature.id} className="relative group z-10">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute z-20 inset-0 w-fit h-fit m-auto">
                <h6 className="text-2xl opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out">
                  {feature.title}
                </h6>
              </div>

              <div className="backdrop-blur-xs absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />

              <button
                onClick={() => setSelectedFeature(feature)}
                className="absolute left-0 right-0 bottom-40 lg:inset-0 w-fit h-fit m-auto border-2 border-white text-sm px-2 py-1 rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out lg:opacity-0 group-hover:opacity-100 z-50"
              >
                Show more
              </button>

              <div className="bg-black/40 inset-0 absolute z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* 🟣 Modal with Framer Motion */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // click outside closes modal
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{
                duration: 0.35,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
              className="relative bg-white text-black p-8 rounded-2xl max-w-lg w-[90%] shadow-2xl"
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-semibold mb-2"
              >
                {selectedFeature.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm mb-6 leading-relaxed"
              >
                {selectedFeature.description}
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-gray-600 cursor-pointer"
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Features;
