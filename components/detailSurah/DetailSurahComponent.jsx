import React, { useState } from "react";
import Image from "next/image";
import Ayat from "./Ayat";
import { HiInformationCircle } from "react-icons/hi";
import TafsirSurah from "./TafsirSurah";

const DetailSurahComponent = ({ id, detailSurah }) => {
  const [showModal, setShowModal] = useState(false);

  const { preBismillah } = detailSurah;

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full mx-auto">
        <div className="text-center py-5 border-b border-black dark:border-text-bg-dark/60 container mx-auto md:px-6 ">
          <p className="text-6xl font-surahName text-arab dark:text-text-bg-dark">{detailSurah.number}</p>
          {preBismillah && (
            <div className="py-6 flex justify-center">
              <Image
                src="../logo/basmalah.svg"
                alt="basmalah"
                width={250}
                height={250}
                priority
                className="w-auto h-auto dark:invert"
              />
            </div>
          )}

          <button onClick={handleShowModal} className="flex items-center gap-1 group dark:text-text-bg-dark">
            <HiInformationCircle className="text-xl group-hover:text-primary" />{" "}
            <span className="text-sm font-bold group-hover:text-primary">Info Surah</span>
          </button>
        </div>
        <div className="w-full container mx-auto md:px-6 ">
          <Ayat detailSurah={detailSurah} id={id} />
        </div>
        <TafsirSurah id={id} showModal={showModal} setShowModal={setShowModal} detailSurah={detailSurah} />
      </div>
    </>
  );
};

export default DetailSurahComponent;
