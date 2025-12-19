"use client";
import React, { useState } from "react";
import DemoModal from "./DemoModal";
import { AnimatePresence } from "motion/react";

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const handleRequestDemo = () => {
    setShowDemoModal(true);
  };
  return (
    <div>
      <div
        className="h-screen w-full flex justify-start items-center px-4 lg:px-8 relative"
        style={{
          backgroundImage: 'url("/images/hero.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-black/60 absolute inset-0" />
        <div className="relative z-10 space-y-6">
          <div className=" space-y-2.5">
            <h3 className=" text-7xl  lg:text-9xl">
              VIDA <br />
              Medicals
            </h3>
            <p className=" text-xl lg:text-2xl">
              Transforming Healthcare with AI
            </p>
          </div>
          <button
            onClick={handleRequestDemo}
            className="cursor-pointer border-2 border-white rounded-full px-4 py-1 lg:hover:bg-white lg:hover:text-black transition-all duration-300 ease-in-out"
          >
            Request Demo
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
