import { Link } from "next-view-transitions";
import React from "react";
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialIcons = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <FaFacebookSquare />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/",
    },
    {
      icon: <FaSquareXTwitter />,
      link: "https://twitter.com/",
    },
  ];
  return (
    <div className=" bg-black px-2 md:px-4 py-4">
      <div className=" flex justify-between items-center">
        <span className=" text-[#867f80] text-xs font-black">
          © 2025. Vida Medicals. All Rights Reserved.
        </span>
        <div className=" text-white flex items-center gap-4">
          {socialIcons.map((icon, index) => (
            <Link key={index} href={icon.link} target="_blank">
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
