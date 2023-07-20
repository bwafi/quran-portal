import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import DarkMode from "./DarkMode";

const NavList = () => {
  const pathName = usePathname();

  return (
    <ul className="flex flex-col lg:flex-row gap-5 lg:items-center order-2 lg:order-1">
      <li className={`hover:text-primary text-lg ${pathName === "/" && "text-primary"}`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`hover:text-primary text-lg ${pathName === "/jadwal-sholat" && "text-primary"}`}>
        <Link href="/jadwal-sholat">Jadwal Sholat</Link>
      </li>
      <li className={`hover:text-primary text-lg ${pathName === "/masukan" && "text-primary"}`}>
        <a href="https://github.com/bwafi/quran-portal/issues/new" target="_blank">
          Beri Masukan
        </a>
      </li>
    </ul>
  );
};

export default NavList;

export const NavInput = ({ setSearchModal }) => {
  const handleOnFocus = () => {
    setSearchModal(true);
  };

  return (
    <div className="order-1 lg:order-2 flex items-center gap-1 sm:gap-3">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          onFocus={handleOnFocus}
          className=" w-10/12 lg:w-48 h-8 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200 dark:bg-soft-dark dark:border-white"
        />
        <button className="bg-primary py-1 px-2 sm:px-3 rounded-md text-white">Search</button>
      </form>
      <DarkMode />
    </div>
  );
};
