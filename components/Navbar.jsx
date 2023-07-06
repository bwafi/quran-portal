"use client";
import React, { useState } from "react";
import HumburgerMenu from "./ui/HumburgerMenu";
import { AnimatePresence, motion } from "framer-motion";
import NavList, { NavInput } from "./ui/NavList";

const Navbar = ({ className = "fixed" }) => {
  const [humburgerMenu, setHumburgerMenu] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  const handleHumburgerMenu = () => {
    setHumburgerMenu(!humburgerMenu);
  };

  return (
    <>
      <nav className={`${className} top-0 left-0 w-full bg-white text-text py-2 lg:py-4 shadow z-50`}>
        <div className="w-full mx-auto container px-3 md:px-6 lg:px-16 flex items-center justify-between">
          <div className="lg:w-3/12">
            <a href="/">
              <h2 className="font-fair font-extrabold text-transparent text-[26px] bg-clip-text bg-primary">
                Quran Portal
              </h2>
            </a>
          </div>

          <HumburgerMenu humburgerMenu={humburgerMenu} handleHumburgerMenu={handleHumburgerMenu} />

          <div className="lg:flex justify-end w-full lg:gap-10 xl:gap-24 items-center hidden">
            <NavList />
            <NavInput />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {humburgerMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed w-full lg:hidden top-16 bg-white max-h-80 py-6 shadow z-30">
            <div className="container w-full mx-auto px-3 md:px-6 lg:px-16 flex flex-col gap-5">
              <NavList />
              <NavInput />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
