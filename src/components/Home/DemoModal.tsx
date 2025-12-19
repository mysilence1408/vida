"use client";
import { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const DemoModal = ({ onClose }: { onClose: () => void }) => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSuccess = () => {
    toast.success("Message Sent Successfully", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#67B2D8",
        color: "black",
      },
    });
  };

  const handleError = () => {
    toast.error("Message Not Sent", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#67B2D8",
        color: "black",
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
    <div className=" w-full h-screen flex justify-center items-center">
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className=" flex flex-col justify-between gap-8 fixed inset-0 m-auto h-[400px] max-w-[600px] bg-[#5A0E24] z-110 p-8 rounded-lg "
      >
        <div className=" flex justify-end">
          <button
            type="button"
            className="bg-white text-black rounded-md  px-2 py-1 cursor-pointer w-fit"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            close
          </button>
        </div>
        <input
          type="text"
          name="name"
          required
          className=" outline-none border-b-2 border-white pb-4"
          placeholder="Your Name*"
        />
        <input
          type="email"
          name="email"
          required
          className=" outline-none border-b-2 border-white pb-4 "
          placeholder="Your Email* "
        />

        <button
          type="submit"
          className=" bg-transparent border-2 border-[#67B2D8] text-[#67B2D8] hover:text-white hover:bg-[#67B2D8] rounded-md uppercase py-3 px-4 mt-10 cursor-pointer transition-all duration-300 ease-in-out"
        >
          Request A Demo
        </button>
      </motion.form>

      <div onClick={onClose} className=" fixed inset-0 bg-black/70 z-100 " />
      <div onClick={onClose} className="fixed backdrop-blur-xs inset-0 z-100" />
    </div>
  );
};

export default DemoModal;
