"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const imgScrollTop = [
    {
      id: 1,
      src: "/videos/hero/1.mp4",
    },
    {
      id: 2,
      src: "/videos//hero/2.mp4",
    },
    {
      id: 3,
      src: "/videos//hero/3.mp4",
    },
    {
      id: 4,
      src: "/videos//hero/4.mp4",
    },
  ];
  const imgScrollMiddle = [
    {
      id: 1,
      src: "/videos//hero/5.mp4",
    },
    {
      id: 2,
      src: "/videos//hero/6.mp4",
    },
    {
      id: 3,
      src: "/videos//hero/7.mp4",
    },
    {
      id: 4,
      src: "/videos//hero/8.mp4",
    },
  ];
  const imgScrollBottom = [
    {
      id: 1,
      src: "/videos//hero/9.mp4",
    },
    {
      id: 2,
      src: "/videos//hero/10.mp4",
    },
    {
      id: 3,
      src: "/videos//hero/11.mp4",
    },
    {
      id: 4,
      src: "/videos//hero/12.mp4",
    },
    {
      id: 5,
      src: "/videos//hero/13.mp4",
    },
  ];
  const imageWidthTop = 500;
  const gapTop = 8; // Tailwind gap-2 = 0.5rem = 8px
  const totalWidthTop = imgScrollTop.length * (imageWidthTop + gapTop);

  const imageWidthMiddle = 400;
  const gapMiddle = 8; // Tailwind gap-2 = 0.5rem = 8px
  const totalWidthMiddle =
    imgScrollMiddle.length * (imageWidthMiddle + gapMiddle);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);

  useGSAP(() => {
    gsap.to(".hero", {
      opacity: 1,
      delay: 0.5,
      stagger: {
        amount: 1,
      },
    });
  });

  return (
    <div className=" h-screen min-h-screen bg-white">
      <div className="flex flex-col gap-2 overflow-x-hidden ">
        <div className=" overflow-hidden">
          <motion.div
            ref={ref}
            className="flex gap-2 hero opacity-0"
            style={{ width: totalWidthTop * 2, scale: scale }}
            animate={{ x: [-0, -totalWidthTop] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate the images for seamless looping */}
            {[...imgScrollTop, ...imgScrollTop].map((img, idx) => (
              <video
                key={idx}
                src={img.src}
                autoPlay
                muted
                playsInline
                loop
                width={imageWidthTop}
                height={200}
                style={{ flexShrink: 0 }}
                className=" object-cover object-center"
              />
            ))}
          </motion.div>
        </div>
        <div className=" overflow-hidden">
          <motion.div
            ref={ref}
            className="flex gap-2 hero opacity-0"
            style={{ width: totalWidthMiddle * 2, scale: scale }}
            animate={{ x: [-0, -totalWidthMiddle] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate the images for seamless looping */}
            {[...imgScrollMiddle, ...imgScrollMiddle].map((img, idx) => (
              <video
                key={idx}
                src={img.src}
                autoPlay
                muted
                playsInline
                loop
                width={imageWidthMiddle}
                height={100}
                style={{ flexShrink: 0 }}
                className=" object-cover object-center"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
