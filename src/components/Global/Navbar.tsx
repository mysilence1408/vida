import Link from "next/link";
import React from "react";

const Navbar = () => {
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
    <div className=" px-4 md:px-8 lg:px-16 py-4 lg:py-8">
      <div className=" flex items-center justify-between gap-4">
        <Link href="/">VIDA</Link>
        <div className=" hidden lg:flex items-center gap-4">
          {Links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
