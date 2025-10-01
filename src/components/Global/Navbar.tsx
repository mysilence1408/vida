"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const pathname = usePathname();

  const Links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Brands",
      url: "/brands",
    },
    {
      id: 3,
      name: "About",
      url: "/about",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className=" fixed top-0 z-50 w-full  ">
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className=" px-2 lg:px-4 pt-2 lg:pt-4"
      >
        <div className="  flex items-center justify-between gap-4  ">
          <Link
            className="px-6 py-2 rounded-full opacity-90 bg-orange-500 text-white"
            href="/"
          >
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={90}
              height={90}
              className=" object-cover"
            />
          </Link>
          <div className=" hidden lg:flex items-center gap-4 ">
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={` px-6 py-2 rounded-full opacity-95 ${
                  pathname === link.url
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={showMenuHandler}
            className={`cursor-pointer lg:hidden relative z-50 px-6 py-2 rounded-full opacity-95 ${
              showMenu ? "bg-black text-white" : "bg-white "
            }`}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" flex flex-col fixed inset-0 items-center justify-center gap-4 text-4xl bg-white "
          >
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`${
                  pathname === link.url &&
                  "bg-black px-6 py-2 text-white rounded-full"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
