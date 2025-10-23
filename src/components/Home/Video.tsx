"use client";
import React, { useState } from "react";
import { IoVolumeHigh } from "react-icons/io5";
import { IoVolumeMute } from "react-icons/io5";
const Video = () => {
  const [muted, setMuted] = useState(true);
  return (
    <div className=" bg-white">
      <div className="px-2 lg:px-4 py-8">
        <div className=" max-w-7xl mx-auto">
          <h3 className=" pb-8 lg:pb-16 text-4xl lg:text-5xl font-medium">
            Design and launch outstanding websites
          </h3>
          <div className=" flex flex-col lg:flex-row gap-4  bg-[#e7e7e7] rounded-lg">
            <div className=" lg:w-4/5 relative">
              <video
                src="/videos/intro.mp4"
                autoPlay
                muted={muted}
                playsInline
                loop
                controls={!muted}
                className=" rounded-r-lg rounded-l-lg lg:rounded-r-none lg:rounded-l-lg"
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
            <div className=" lg:w-1/5 flex flex-col justify-between py-6 px-2 gap-4">
              <h6 className=" text-3xl lg:text-4xl font-medium">
                Enjoy easy workflow
              </h6>
              <p className=" text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                alias enim voluptates possimus ipsa, ex illum voluptate modi
                minima earum ab maiores eos deserunt exercitationem consectetur
                quisquam corporis obcaecati assumenda.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                alias enim voluptates possimus ipsa, ex illum voluptate modi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
