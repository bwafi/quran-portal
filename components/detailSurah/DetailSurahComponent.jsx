import React, { useState } from "react";
import Image from "next/image";
import Ayat from "./Ayat";
import { PiInfo } from "react-icons/pi";
import TafsirSurah from "./TafsirSurah";

const DetailSurahComponent = ({ detailSurah, id }) => {
  const [showModal, setShowModal] = useState(false);

  const { preBismillah } = detailSurah;

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full mx-auto">
        <div className="text-center py-5 border-b border-black">
          <p className="text-6xl font-surahName text-arab">{detailSurah.number}</p>
          {preBismillah && (
            <div className="py-6 flex justify-center">
              <Image src="../logo/basmalah.svg" alt="basmalah" width={250} height={250} priority />
            </div>
          )}
          <button onClick={handleShowModal} className="flex items-center gap-1">
            <PiInfo className="text-xl" /> <span className="text-sm">Info Surah</span>
          </button>
        </div>
        <div className="w-full">
          <Ayat detailSurah={detailSurah} />
        </div>
        <TafsirSurah id={id} showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default DetailSurahComponent;
