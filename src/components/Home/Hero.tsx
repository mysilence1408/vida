"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const imgScrollTop = [
    {
      id: 1,
      src: "/images/hero/1.jpg",
    },
    {
      id: 2,
      src: "/images/hero/2.jpg",
    },
    {
      id: 3,
      src: "/images/hero/3.jpg",
    },
    {
      id: 4,
      src: "/images/hero/4.jpg",
    },
  ];
  const imgScrollMiddle = [
    {
      id: 1,
      src: "/images/hero/5.jpg",
    },
    {
      id: 2,
      src: "/images/hero/6.jpg",
    },
    {
      id: 3,
      src: "/images/hero/7.jpg",
    },
    {
      id: 4,
      src: "/images/hero/8.jpg",
    },
  ];
  const imgScrollBottom = [
    {
      id: 1,
      src: "/images/hero/9.jpg",
    },
    {
      id: 2,
      src: "/images/hero/10.jpg",
    },
    {
      id: 3,
      src: "/images/hero/11.jpg",
    },
    {
      id: 4,
      src: "/images/hero/12.jpg",
    },
    {
      id: 5,
      src: "/images/hero/13.jpg",
    },
  ];
  const imageWidthTop = 500;
  const gapTop = 8; // Tailwind gap-2 = 0.5rem = 8px
  const totalWidthTop = imgScrollTop.length * (imageWidthTop + gapTop);

  const imageWidthMiddle = 400;
  const gapMiddle = 8; // Tailwind gap-2 = 0.5rem = 8px
  const totalWidthMiddle =
    imgScrollMiddle.length * (imageWidthMiddle + gapMiddle);

  const imageWidthBottom = 300;
  const gapBottom = 8; // Tailwind gap-2 = 0.5rem = 8px
  const totalWidthBottom =
    imgScrollBottom.length * (imageWidthBottom + gapBottom);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);

  return (
    <div>
      <div className="flex flex-col gap-2 overflow-x-hidden">
        <div className=" overflow-hidden">
          <motion.div
            ref={ref}
            className="flex gap-2"
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
              <Image
                key={idx}
                src={img.src}
                alt="img"
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
            className="flex gap-2"
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
              <Image
                key={idx}
                src={img.src}
                alt="img"
                width={imageWidthMiddle}
                height={100}
                style={{ flexShrink: 0 }}
                className=" object-cover object-center"
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="flex gap-2"
          style={{ width: totalWidthBottom * 2 }}
          animate={{ x: [-0, -totalWidthBottom] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate the images for seamless looping */}
          {[...imgScrollBottom, ...imgScrollBottom].map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt="img"
              width={imageWidthBottom}
              height={50}
              style={{ flexShrink: 0 }}
              className=" object-cover object-center"
            />
          ))}
        </motion.div>
        <div className=" relative -top-10 md:-top-15 lg:-top-30">
          <img src="/images/white_shadow.webp" className=" w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
