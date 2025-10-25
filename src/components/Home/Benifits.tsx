import Image from "next/image";
import React from "react";
import handImg from "@/../public/images/hand.jpg";
import { benefitsData } from "./Data";
const Benefits = () => {
  return (
    <div className=" min-h-screen overflow-hidden flex flex-col lg:flex-row gap-10 bg-[#f1f1f1]">
      <div className=" lg:w-1/2">
        <Image src={handImg} alt="handImg" className=" object-cover h-screen" />
      </div>
      <div className=" lg:w-1/2 flex flex-col p-8 justify-between">
        <h3 className=" text-5xl lg:text-6xl font-semibold uppercase pb-8 lg:pb-0">
          Benefits
        </h3>
        <div className=" space-y-4">
          {benefitsData.map((item) => (
            <div key={item.id}>
              <ul className="list-disc pl-5 space-y-1 text-lg lg:text-xl">
                <span className="font-semibold">{item.title}</span>
                <li>{item.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
