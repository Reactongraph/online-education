import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  // State to manage mobile menu toggle
  const [toggle, setToggle] = useState(false);

  // State to track if the navbar should have a shadow and background color
  const [active, setActive] = useState(null);

  // Effect to update the 'active' state based on scroll position
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };

    // Adding and removing scroll event listener
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    // Navbar container with dynamic styling based on scroll position
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        {/* Main navbar content */}
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          {/* Logo and mobile menu icon */}
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              Skillex
            </div>
          </div>

          {/* Desktop navigation links */}
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
          </div>

          {/* Sign Up button */}
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
            Sign Up
          </button>

          {/* Mobile menu */}
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => (
                <MobileNavLinks
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              ))}
              {/* Close mobile menu button */}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
