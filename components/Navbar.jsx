import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-text py-4 shadow">
      <div className="w-full mx-auto container px-16 flex items-center justify-between">
        <a href="/">
          <h2 className="font-fair font-extrabold text-transparent text-3xl bg-clip-text bg-primary">Quran Portal</h2>
        </a>
        <ul className="flex gap-5 items-center">
          <li className="hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/tajwid">Panduan Tajwid</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/hadist">Hadist</Link>
          </li>
          <li className="hover:text-primary">
            <Link href="/masukan">Beri Masukan</Link>
          </li>
        </ul>

        <form className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-48 h-8 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200"
          />
          <button className="bg-primary py-1 px-3 rounded-md text-white">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
