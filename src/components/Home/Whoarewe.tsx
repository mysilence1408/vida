"use client";
import { useScroll, motion } from "framer-motion";
import React, { useRef, useEffect } from "react";

const Whoarewe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Get scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  useEffect(() => {
    // Subscribe to scroll progress changes
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const video = videoRef.current;
      if (video && video.duration) {
        video.currentTime = progress * video.duration;
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="px-2 lg:px-4 pt-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 h-[600px]">
            <motion.video
              ref={videoRef}
              src="/videos/xray.mp4"
              muted
              playsInline
              loop={false}
              autoPlay={false}
              className="h-full w-full object-cover rounded-lg hidden lg:block"
            ></motion.video>
            <video
              src="/videos/xray.mp4"
              muted
              playsInline
              loop
              autoPlay
              className="h-full w-full object-cover rounded-lg block lg:hidden"
            ></video>
          </div>
          <div className="py-16 px-4 gap-4 rounded-lg bg-[#ffa200] flex flex-col justify-between items-center lg:w-1/2 h-auto">
            <h6 className=" text-3xl lg:text-4xl font-medium">
              What is Vida Medicals?
            </h6>
            <p className=" text-sm lg:text-base">
              Vida Medical is a web-based medical image processing platform made
              in Canada, designed to assist radiologists as an intelligent
              companion.
              <br />
              <br />
              It integrates seamlessly with existing clinical workflows and
              offers advanced AI tools that improve the accuracy, speed, and
              security of mammography diagnostics.
              <br />
              <br />
              The system was developed by a distinguished team of scientists and
              engineers led by Dr. Naeem Komeilipoor, a renowned entrepreneur
              and scientist. This platform evolved through years of innovation
              in artificial intelligence, advanced imaging, and medical
              technology — including innovations from AAVAA and Findora — to
              support modern medical imaging practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoarewe;
