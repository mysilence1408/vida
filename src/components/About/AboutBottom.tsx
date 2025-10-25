"use client";
import React, { useEffect, useRef } from "react";
import botGif from "@/../public/images/bot.gif";
import Image from "next/image";
import { useScroll, useSpring } from "motion/react";
const AboutBottom = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["50% end", "end start"],
  });

  // ✅ Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleProgress = (progress: number) => {
      if (video && video.duration) {
        // Use requestAnimationFrame for smoother timing updates
        requestAnimationFrame(() => {
          video.currentTime = progress * video.duration;
        });
      }
    };

    const unsubscribe = smoothProgress.on("change", handleProgress);
    return unsubscribe;
  }, [smoothProgress]);
  return (
    <div className=" pt-8 lg:pt-16 px-2 lg:px-4" ref={sectionRef}>
      <div className=" flex items-center justify-center mb-8">
        <Image
          src={botGif}
          alt="bot"
          className=" w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] object-cover"
        />
        <h1 className=" text-white text-3xl lg:text-7xl">
          A word from the founder
        </h1>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 h-[600px]">
            {/* Desktop controlled video */}
            <video
              ref={videoRef}
              src="/videos/founder.mp4"
              muted
              playsInline
              loop={false}
              autoPlay={false}
              preload="auto"
              className="h-full w-full object-cover rounded-lg hidden lg:block"
            />
            {/* Mobile autoplay version */}
            <video
              src="/videos/founder.mp4"
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
              className="h-full w-full object-cover rounded-lg block lg:hidden"
            />
          </div>

          <div className="py-16 px-4 gap-4 rounded-lg bg-[#1f1f1f] text-white flex flex-col justify-between items-center lg:w-1/2 h-auto">
            <h6 className="text-3xl lg:text-4xl font-medium">
              What is Vida Medicals?
            </h6>
            <p className="text-sm lg:text-base">
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

export default AboutBottom;
