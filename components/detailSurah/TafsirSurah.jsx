/* eslint-disable react/no-unescaped-entities */
"use client";
import { getDetailSurah, selectDetailSurah } from "@/store/slice/contentSlice";
import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TafsirSurah = ({ id }) => {
  const surahDetail = useSelector(selectDetailSurah);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailSurah(id));
  }, [dispatch, id]);

  return (
    <div className="fixed w-full h-screen top-0 left-0 mx-auto z-40">
      <div className="w-full h-screen bg-black/40 z-0 mx-auto">
        <div className="w-7/12 overflow-y-auto mx-auto bg-white relative top-20 rounded-lg ">
          <div className="flex justify-between items-center py-5 border-b border-gray-200 px-5 shadow-sm">
            <h3 className="font-bold text-lg">Surah {surahDetail.name.transliteration.id}</h3>
            <button>
              <MdClose className="text-3xl" />
            </button>
          </div>
          <div className="py-5 overflow-y-auto relative max-h-96 px-5">
            <div className="mb-3">
              <h4 className="font-bold flex gap-2">
                Terjemah : <p>{surahDetail.name.translation.id}</p>
              </h4>
              <h4 className="font-bold flex gap-2">
                Tempat Diturunkan : <p>{surahDetail.revelation.id}</p>
              </h4>
              <h4 className="font-bold flex gap-2">
                Jumlah Ayat : <p>200</p>
              </h4>
            </div>
            <p className="text-lg">
              "Surat Al Faatihah (Pembukaan) yang diturunkan di Mekah dan terdiri dari 7 ayat adalah surat yang
              pertama-tama diturunkan dengan lengkap diantara surat-surat yang ada dalam Al Quran dan termasuk golongan
              surat Makkiyyah. Surat ini disebut Al Faatihah (Pembukaan), karena dengan surat inilah dibuka dan
              dimulainya Al Quran. Dinamakan Ummul Quran (induk Al Quran) atau Ummul Kitaab (induk Al Kitaab) karena dia
              merupakan induk dari semua isi Al Quran, dan karena itu diwajibkan membacanya pada tiap-tiap sembahyang.
              Dinamakan pula As Sab'ul matsaany (tujuh yang berulang-ulang) karena ayatnya tujuh dan dibaca
              berulang-ulang dalam sholat."
            </p>
          </div>
          <div className="border-t border-gray-300 py-3 flex justify-end px-5">
            <button className="py-2 px-5 bg-primary rounded-lg text-white">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TafsirSurah;
