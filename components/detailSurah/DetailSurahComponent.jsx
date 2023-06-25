import React from "react";
import Image from "next/image";
import Ayat from "./Ayat";

const DetailSurahComponent = ({ detailSurah }) => {
  const { preBismillah } = detailSurah;

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
        </div>
        <div className="w-full">
          <Ayat detailSurah={detailSurah} />
        </div>
      </div>
    </>
  );
};

export default DetailSurahComponent;
