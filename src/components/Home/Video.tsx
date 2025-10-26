"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, useState } from "react";
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
const Video = () => {
  const [muted, setMuted] = useState(true);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  return (
    <div>
      <div ref={containerRef} className="px-2 lg:px-4 pb-8 lg:pt-16 lg:pb-16">
        <div className=" max-w-7xl mx-auto">
          <motion.h3
            style={{ opacity: opacity, translateY: y }}
            className=" pb-8 lg:pb-16 text-4xl lg:text-5xl font-medium text-white"
          >
            What is Vida Medicals?
          </motion.h3>
          <motion.div
            style={{ scale: scale }}
            className=" flex flex-col xl:flex-row gap-4 text-black bg-white rounded-lg"
          >
            <div className=" xl:w-4/5 relative">
              <video
                src="/videos/intro.mp4"
                autoPlay
                muted={muted}
                playsInline
                loop
                controls={!muted}
                className=" rounded-r-lg rounded-l-lg rounded-b-none lg:rounded-r-none lg:rounded-l-lg object-cover h-full w-full"
              ></video>
              <button
                className=" absolute top-5 left-5 bg-white rounded-full p-1 lg:p-3 cursor-pointer"
                onClick={() => setMuted(!muted)}
              >
                {muted ? (
                  <IoVolumeMute size={25} color="black" />
                ) : (
                  <IoVolumeHigh size={25} color="black" />
                )}
              </button>
            </div>
            <div className=" xl:w-1/5 py-6 px-2 gap-4">
              <p className=" text-sm lg:text-base">
                Vida Medical is a Canadian web-based platform that assists
                radiologists with intelligent medical image processing. It
                integrates seamlessly into clinical workflows, using advanced AI
                to enhance the accuracy, speed, and security of mammography
                diagnostics.
                <br />
                <br />
                Developed by Dr. Naeem Komeilipoor and his team, Vida builds on
                years of innovation in AI, imaging, and medical technology —
                including breakthroughs from AAVAA and Findora.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Video;
