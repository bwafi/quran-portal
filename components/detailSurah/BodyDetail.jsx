"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSurah, getSurah, selectDetailSurah, selectSurahList } from "@/store/slice/contentSlice";
import DetailSurahComponent from "./DetailSurahComponent";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";

const BodyDetail = ({ id }) => {
  const [toggleSurah, setToggleSurah] = useState(false);
  const [toggleAyat, setToggleAyat] = useState(false);
  const [ayat, setAyat] = useState(1);
  const [scrollSticky, setScrollSticky] = useState(false);

  const dispatch = useDispatch();
  const detailSurah = useSelector(selectDetailSurah);
  const surahList = useSelector(selectSurahList);

  const dropdownRef = useRef(null);

  useEffect(() => {
    dispatch(getDetailSurah(id));
    dispatch(getSurah());
  }, [dispatch, id]);

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

  // handle scroll
  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 67) {
        setScrollSticky(true);
      } else {
        setScrollSticky(false);
      }
    };

    document.addEventListener("scroll", handleStickyScroll);
    return () => {
      document.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  const dataSurah = detailSurah.verses;

  const handleToggleSurah = () => {
    setToggleAyat(false);
    setToggleSurah(!toggleSurah);
  };
  const handleToggleAyat = () => {
    setToggleSurah(false);
    setToggleAyat(!toggleAyat);
  };

  const handleGetAyat = (selectAyat) => {
    setAyat(selectAyat);
  };

  if (!dataSurah) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full text-text relative">
      <div
        className={`flex py-3 px-24 bg-[#eceff4] w-full ${
          scrollSticky ? "top-0 fixed" : "relative"
        } z-10 transition-all`}>
        <div className="w-full flex gap-8">
          <button
            onClick={handleToggleSurah}
            className="py-1 px-2 rounded-md flex items-center gap-2 hover:bg-white/40">
            {detailSurah.name.transliteration.id}
            <BiCaretDown />
          </button>
          {toggleSurah && (
            <ul className="w-[18%] max-h-[430px] overflow-y-auto rounded-md absolute top-14 left-20 shadow-md z-10">
              {surahList.map((surah) => (
                <Link ref={dropdownRef} key={surah.number} href={`/surah/${surah.number}`}>
                  <li className="border-b bg-white hover:bg-gray-200 py-5 px-4 flex justify-between">
                    <span className="">{surah.name.transliteration.id}</span>
                    <p className="font-lpmq">{surah.name.short}</p>
                  </li>
                </Link>
              ))}
            </ul>
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
      </div>

      <Container>
        <div className="w-full my-5 relative">
          <DetailSurahComponent detailSurah={detailSurah} dataSurah={dataSurah} />
        </div>
      </Container>
    </section>
  );
};

export default BodyDetail;
