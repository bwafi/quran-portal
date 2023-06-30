"use client";
import React from "react";
import { getSurah, selectLoadingState, selectSurahList } from "@/store/slice/contentSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardList = () => {
  const dispatch = useDispatch();
  const surahList = useSelector(selectSurahList);
  const isLoading = useSelector(selectLoadingState);

  useEffect(() => {
    dispatch(getSurah());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center min-h-20 p-5">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {surahList.map((surah) => (
        <Link
          href={`/surah/${surah.number}`}
          key={surah.number}
          className="w-[32%] flex items-center justify-between py-2 px-5 border group">
          <div className="bg-gray-200 flex justify-center items-center w-8 aspect-square text-center rotate-45 mr-6 group-hover:shadow group-hover:bg-primary">
            <h3 className="-rotate-45 font-semibold text-sm group-hover:text-white">{surah.number}</h3>
          </div>
          <div className="grow">
            <h2 className="font-bold">{surah.name.transliteration.id}</h2>
            <p className="font-semibold text-sm text-text/60 group-hover:text-primary/70">
              {surah.name.translation.id}
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold text-text/90 font-amiri text-right">{surah.name.short}</h3>
            <p className="text-sm font-semibold text-text/60 group-hover:text-primary/70">
              {surah.numberOfVerses} Ayat
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardList;
