import Link from "next/link";
import React, { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { AnimatePresence, motion, spring } from "framer-motion";
import { usePathname } from "next/navigation";

const NavList = () => {
  const pathName = usePathname();

  return (
    <ul className="flex flex-col lg:flex-row gap-5 lg:items-center order-2 lg:order-1">
      <li className={`hover:text-primary ${pathName === "/" && "text-primary"}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`hover:text-primary ${pathName === "/jadwal-sholat" && "text-primary"}`}>
        <Link href="/jadwal-sholat">Jadwal Sholat</Link>
      </li>
      <li className={`hover:text-primary ${pathName === "/hadist" && "text-primary"}`}>
        <Link href="/hadist">Hadist</Link>
      </li>
      <li className={`hover:text-primary ${pathName === "/masukan" && "text-primary"}`}>
        <Link href="/masukan">Beri Masukan</Link>
      </li>
    </ul>
  );
};

export default NavList;

export const NavInput = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="order-1 lg:order-2 flex items-center gap-1 sm:gap-3">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-10/12 lg:w-48 h-8 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200"
        />
        <button className="bg-primary py-1 px-2 sm:px-3 rounded-md text-white">Search</button>
      </form>
      <AnimatePresence>
        <motion.button layout transition={spring} className="overflow-hidden h-auto shrink" onClick={handleDarkMode}>
          {darkMode ? (
            <motion.div
              key={"moon"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}>
              <BsMoonStars className={`text-[26px]`} />
            </motion.div>
          ) : (
            <motion.div
              key={"sun"}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}>
              <BsSun className={`text-[26px]`} />
            </motion.div>
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
