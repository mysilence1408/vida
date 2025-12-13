import React from "react";
import telephoneImg from "@/../public/images/telephone.jpg";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className=" bg-[url('/images/contact-bg.jpg')] bg-cover h-screen w-full relative">
      <div className=" bg-white/70 absolute bottom-0 right-0 w-auto h-auto text-black">
        <div className=" pl-2">
          <span className=" text-xs font-light">/ Contact</span>
          <h3 className=" text-8xl lg:text-9xl font-black">{"Let's"} talk</h3>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
          <div className=" flex flex-col gap-2 lg:w-1/2 pl-4">
            <div>
              <span className="text-xs font-light">/ General enquiries</span>
              <div className=" flex flex-col gap-2">
                <span>info@vidamedicals.com</span>
                <span>+435324455634345</span>
              </div>
            </div>
            <div />
            <div>
              <span className="text-xs font-light">/ Address</span>
              <p className=" max-w-sm text-xs text-balance">Montreal, Canada</p>
            </div>
          </div>
          <div className=" lg:w-1/2 relative overflow-hidden">
            <Image
              src={telephoneImg}
              alt="telephoneImg"
              className=" w-[700px] h-[338px] object-cover object-center"
            />
            <div className=" absolute bottom-0 right-0 bg-[#e90000]/60 w-[400px] h-[180px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
