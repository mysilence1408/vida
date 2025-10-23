import React from "react";
import { whoData } from "./Data";

const WhoCanUse = () => {
  return (
    <div>
      <div className="relative">
        <video
          src="/videos/eye.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-screen object-cover"
        ></video>
        <div className=" absolute top-20 left-10 right-0 bottom-20">
          <div className=" flex flex-col justify-between h-full">
            <h3 className=" max-w-lg text-white text-5xl lg:text-6xl font-medium">
              Who Can Use Vida Medicals?
            </h3>
            <div className=" flex flex-col gap-4">
              {whoData.map((item) => (
                <div
                  key={item.id}
                  className=" flex items-center gap-4 text-white"
                >
                  {item.icon}
                  {item.desc}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;
