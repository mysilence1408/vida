"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);

  const handleCloseMenu = () => setShowMenu(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
  });

  const pathname = usePathname();

  const Links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "News", url: "/news" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  useGSAP(() => {
    gsap.to(".nav", {
      opacity: "95%",
      delay: 2,
      stagger: {
        amount: 1,
        ease: "power1.inOut",
      },
    });
  });

  // ✅ Animation variants for mobile menu links
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.45, 0, 0.55, 1], // equivalent to easeInOut
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="fixed top-0 z-[100] w-full">
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className="px-2 lg:px-4 pt-2 lg:pt-4"
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            className="px-4 py-1 rounded-full bg-white nav opacity-0"
            href="/"
          >
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={90}
              height={90}
              className="object-cover"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-4">
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={`px-6 py-2 rounded-full nav opacity-0 ${
                  pathname === link.url
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={showMenuHandler}
            className={`cursor-pointer lg:hidden relative z-50 px-6 py-2 rounded-full opacity-0 nav ${
              showMenu ? "bg-black text-white" : "bg-white"
            }`}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.45, 0, 0.55, 1] }}
            className="flex flex-col fixed inset-0 items-center justify-center gap-4 text-4xl bg-white"
          >
            {Links.map((link, i) => (
              <motion.div
                key={link.id}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  href={link.url}
                  className={`${
                    pathname === link.url &&
                    "bg-black px-6 py-2 text-white rounded-full"
                  }`}
                  onClick={handleCloseMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
