import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const NavMenuDetail = ({ dataSurah, detailSurah, surahList }) => {
  const [toggleSurah, setToggleSurah] = useState(false);
  const [toggleAyat, setToggleAyat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [ayat, setAyat] = useState(1);
  const dropdownRef = useRef(null);

  // Click outside handle
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleAyat || (toggleSurah && dropdownRef.current && !dropdownRef.current.contains(event.target))) {
        setToggleSurah(false);
        setToggleAyat(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleAyat, toggleSurah]);

  const handleToggleSurah = () => {
    setToggleAyat(false);
    setToggleSurah(!toggleSurah);
    setSearchQuery("");
  };

  const handleToggleAyat = () => {
    setToggleSurah(false);
    setToggleAyat(!toggleAyat);
  };

  const handleGetAyat = (selectAyat) => {
    setAyat(selectAyat);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSurahList = surahList.filter((surah) =>
    surah.name.transliteration.id
      .replace(/[.,'"-]/g, "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex gap-8">
        <button onClick={handleToggleSurah} className="py-1 px-2 rounded-md flex items-center gap-2 hover:bg-white/40">
          {detailSurah.name.transliteration.id}
          <BiCaretDown />
        </button>
        {toggleSurah && (
          <div ref={dropdownRef} className="w-[18%] max-h-[430px] absolute top-14">
            <div className="w-full h-14 bg-white py-3 px-3 mx-auto z-10 shadow-md">
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search"
                className="w-full h-8 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200"
              />
            </div>
            <ul className="overflow-y-auto max-h-[430px] rounded-md shadow-md z-10">
              {filteredSurahList.map((surah) => (
                <Link key={surah.number} href={`/surah/${surah.number}`}>
                  <li className="border-b bg-white hover:bg-gray-200 py-5 px-4 flex justify-between">
                    <span className="">{surah.name.transliteration.id}</span>
                    <p className="font-lpmq">{surah.name.short}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}

        <button onClick={handleToggleAyat} className="py-1 px-2 rounded-md flex items-center gap-2 hover:bg-white/40">
          Ayat {ayat}
          <BiCaretDown />
        </button>

        {toggleAyat && (
          <ul className="w-1/12 max-h-[430px] overflow-auto rounded-md absolute left-56 shadow-md z-10 top-14">
            {dataSurah.map((surah) => (
              <a
                ref={dropdownRef}
                key={surah.number.inSurah}
                href={`#${surah.number.inSurah}`}
                onClick={() => handleGetAyat(surah.number.inSurah)}>
                <li className="border-b border-b-gray-100 bg-white hover:bg-gray-200 py-3 px-4 flex justify-between">
                  <span className="">Ayat {surah.number.inSurah}</span>
                </li>
              </a>
            ))}
          </ul>
        )}
      </div>
      <p>setting</p>
    </>
  );
};

export default NavMenuDetail;
