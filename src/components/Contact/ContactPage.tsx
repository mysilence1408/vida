"use client";
import React, { FormEvent, useRef } from "react";
import telephoneImg from "@/../public/images/telephone.jpg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactPage = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSuccess = () => {
    toast.success("Message Sent Successfully", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#6a0dad",
        color: "white",
      },
    });
  };

  const handleError = () => {
    toast.error("Message Not Sent", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#6a0dad",
        color: "white",
      },
    });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_gbfxhud", "template_cgz2o0v", form.current, {
        publicKey: "9AUvk4zFTNyVNhJJt",
      })
      .then(
        () => {
          (e.target as HTMLFormElement).reset();
          handleSuccess(); // Just show toast
        },
        () => {
          handleError(); // Just show toast
        }
      );
  };
  return (
    <div className=" bg-[url('/images/contact-bg.jpg')] bg-cover h-screen w-full relative">
      <div className=" bg-white/70 absolute lg:bottom-0 lg:right-0 w-auto h-auto text-black">
        <div className=" pl-2 pt-10">
          <span className=" text-xs font-light"> Contact</span>
          <h3 className=" text-8xl lg:text-9xl font-black">{"Let's"} talk</h3>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-4 ">
          <div className=" flex flex-col gap-2 lg:w-1/2 pl-4">
            <div>
              <span className="text-xs font-light">General enquiries</span>
              <div className=" flex flex-col gap-2">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col lg:flex-row justify-between gap-6">
                    <div className="flex flex-col w-full gap-1">
                      <label className="self-start text-sm font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        className="outline-none border-2 border-black/20 rounded-lg focus:border-red-600 py-1 px-2"
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                      <label className="self-start text-sm font-semibold">
                        Your E-mail
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        className="outline-none border-2 border-black/20 rounded-lg focus:border-red-600 py-1 px-2"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label className="self-start text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      cols={30}
                      rows={4}
                      className="w-full outline-none border-2 border-black/20 rounded-lg focus:border-red-600 py-1 px-2"
                    ></textarea>
                  </div>
                  <div>
                    <button className=" cursor-pointer bg-purple-600 rounded-md px-2 py-1 text-white hover:bg-purple-700 transition-colors duration-300 ease-in-out">
                      send
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div />
            <div>
              <span className="text-xs font-light">Address</span>
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
