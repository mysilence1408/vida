import AboutBottom from "@/components/About/AboutBottom";
import AboutTop from "@/components/About/AboutTop";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "VIDA Medicals is a Canadian mammography AI platform delivering a reliable second look and structured imaging insights for breast screening.",
};

const About = () => {
  return (
    <div>
      <AboutTop />
      <AboutBottom />
    </div>
  );
};

export default About;
