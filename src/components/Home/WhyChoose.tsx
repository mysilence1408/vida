"use client";
import React from "react";
import { chooseData } from "./Data";

const WhyChoose = () => {
  return (
    <div className="bg-black text-white">
      <div className="pt-8 pb-16">
        <h3 className="pb-16 px-2 lg:px-4 text-4xl lg:text-5xl">
          Why Choose VIDA Medicals?
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-4">
          {chooseData.map((choosen, index) => (
            <div
              key={choosen.id}
              style={{
                transition: "all 0.3s ease",
              }}
              className={`flex flex-col justify-between items-start gap-40 border border-dashed border-white/50 p-8 transition-all duration-300
                ${index === 0 ? "lg:border-l-0" : ""}
                ${index === chooseData.length - 1 ? "lg:border-l-0" : ""}
                ${index === 3 ? "lg:border-r-0" : ""}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 25px 4px ${choosen.color}`;
                e.currentTarget.style.borderColor = choosen.color;
                e.currentTarget.style.backgroundColor = `${choosen.color}`; // subtle tint
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div>{choosen.icon}</div>
              <div className="space-y-2">
                <h6 className="text-xl font-semibold">{choosen.title}</h6>
                <p className="text-sm text-white/80">{choosen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
