/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const TafsirSurah = ({ detailSurah, setShowModal, showModal }) => {
  const modal = useRef();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !modal.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed w-full h-screen top-0 left-0 mx-auto z-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            key={detailSurah.number}
            className="w-full h-screen bg-black bg-opacity-40 z-0 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              ref={modal}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-7/12 overflow-y-auto mx-auto bg-white relative top-16 rounded-lg ">
              <div className="flex justify-between items-center py-5 border-b border-gray-200 px-5 shadow-sm">
                <h3 className="font-bold text-lg">Surah {detailSurah.name.transliteration.id}</h3>
                <button onClick={handleCloseModal}>
                  <MdClose className="text-3xl" />
                </button>
              </div>
              <div className="py-5 overflow-y-auto relative max-h-96 px-8">
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
              <div className="border-t border-gray-300 py-3 flex justify-end px-5">
                <button onClick={handleCloseModal} className="py-2 px-5 bg-primary rounded-lg text-white">
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TafsirSurah;
