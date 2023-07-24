"use client";
import { getSurah, selectSurahList } from "@/store/slice/contentSlice";
import { selectIsLoading } from "@/store/slice/sholatSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const SearchSectionModal = ({ searchModal, setSearchModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const surahList = useSelector(selectSurahList);
  const isLoading = useSelector(selectIsLoading);

  const refModal = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurah());
  }, [dispatch]);

  const handleOnChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchModal && !refModal.current.contains(event.target)) {
        setSearchModal(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchModal, setSearchModal]);

  if (isLoading) {
    return <Loading />;
  }

  const filteredSurahList = surahList.filter((surah) =>
    surah.name.transliteration.id
      .replace(/[.,'"-]/g, "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <AnimatePresence>
      {searchModal && (
        <div className="w-full h-screen fixed z-[60] mx-auto top-0 left-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full bg-black/40 h-screen px-3"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              ref={refModal}
              className="w-full sm:w-8/12 lg:w-5/12 bg-white dark:bg-bg-dark dark:text-text-bg-dark mx-auto relative top-16 py-5 px-5 rounded-lg"
            >
              <form className="flex items-center">
                <input
                  type="text"
                  onChange={handleOnChange}
                  placeholder="Search"
                  className="w-full h-10 border border-text/30 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200"
                />
              </form>
              <ul className="overflow-y-auto max-h-72 sm:max-h-[400px] z-10">
                {filteredSurahList.map((surah) => (
                  <Link key={surah.number} href={`/surah/${surah.number}`}>
                    <li className="border-b bg-white hover:bg-gray-200 px-2 py-3 md:py-5 flex justify-between">
                      <span className="">{surah.name.transliteration.id}</span>
                      <p className="font-lpmq">{surah.name.short}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchSectionModal;
