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
    offset: ["50% end", "90% start"],
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
    <div className=" pt-18 lg:pt-28 pb-16 px-2 lg:px-4" ref={sectionRef}>
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
          <div className="lg:w-1/2">
            {/* Desktop controlled video */}
            <video
              ref={videoRef}
              src="/videos/founder.mp4"
              muted
              playsInline
              loop={false}
              autoPlay={false}
              preload="auto"
              className="object-cover rounded-lg hidden lg:block h-full"
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

          <div className="py-16 px-4 gap-4 rounded-lg bg-white text-black  flex flex-col justify-between lg:w-1/2 h-auto">
            <p className=" text-xl lg:text-2xl">
              At Vida Medicals, our mission is to harness the power of
              artificial intelligence to support earlier and more accurate
              disease detection. By combining medical expertise with advanced
              technology, we aim to assist healthcare professionals in making
              better-informed decisions and improving patient outcomes.
              <br />
              <br /> This platform was created with a strong belief that
              innovation in healthcare should be responsible, transparent, and
              human-centered. We are committed to developing AI solutions that
              complement clinical judgment and contribute meaningfully to modern
              medicine.
            </p>
            <span>
              Dr. Komeilipoor
              <br />
              <br />
              Founder & CEO, Vida Medicals
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
