import Link from "next/link";
import React, { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

const NavList = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-5 lg:items-center order-2 lg:order-1">
      <li className="hover:text-primary">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/jadwal-sholat">Jadwal Sholat</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/hadist">Hadist</Link>
      </li>
      <li className="hover:text-primary">
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

  console.log(darkMode);

  return (
    <div className=" order-1 lg:order-2 flex items-center gap-3">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-8/12 sm:w-5/12 lg:w-48 h-8 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200"
        />
        <button className="bg-primary py-1 px-3 rounded-md text-white">Search</button>
      </form>
      <button className="overflow-hidden h-auto" onClick={handleDarkMode}>
        <BsSun className={`text-2xl `} />
        <BsMoonStars className={`text-2xl`} />
      </button>
    </div>
  );
};
