/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { AnimatePresence } from "framer-motion";
import BodyModal from "../ui/BodyModal";

const TafsirSurah = ({ detailSurah, setShowModal, showModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <BodyModal
          SurahName={detailSurah.name.transliteration.id}
          key={detailSurah.number}
          showModal={showModal}
          setShowModal={setShowModal}>
          <div className="py-5 overflow-y-auto relative max-h-96 px-3 md:px-8">
            <div className="pb-3  border-b border-b-gray-200">
              <h4 className="font-bold flex gap-2">
                Terjemah : <p>{detailSurah.name.translation.id}</p>
              </h4>
              <h4 className="font-bold flex gap-2">
                Tempat Diturunkan : <p>{detailSurah.revelation.id}</p>
              </h4>
              <h4 className="font-bold flex gap-2">
                Jumlah Ayat : <p>{detailSurah.numberOfVerses}</p>
              </h4>
            </div>
            <p className="text-lg py-3">{detailSurah.tafsir.id}</p>
          </div>
        </BodyModal>
      )}
    </AnimatePresence>
  );
};

export default TafsirSurah;
