import React, { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const TafsirAyat = ({ detailSurah, numberVerses, setShowModal, showModal }) => {
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
  }, [showModal, setShowModal]);

  const { verses } = detailSurah;

  const selectedVerse = verses.find((verse) => verse.number.inSurah === numberVerses);

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed w-full h-screen top-0 left-0 mx-auto z-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            key={selectedVerse.number.inSurah}
            className="w-full h-screen bg-black/50 z-50 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              ref={modal}
              className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12 overflow-y-auto mx-auto bg-white relative top-16 rounded-lg ">
              <div className="flex justify-between items-center py-5 border-b border-gray-200  px-3 md:px-8 shadow-sm">
                <h3 className="font-bold text-lg">Surah {detailSurah.name.transliteration.id}</h3>
                <button onClick={handleCloseModal}>
                  <MdClose className="text-3xl" />
                </button>
              </div>
              <div className="py-5 overflow-y-auto relative max-h-96 px-3 md:px-8">
                <div className="border-b py-5">
                  <h4 className="font-lpmq text-xl text-right font-semibold">{selectedVerse.text.arab}</h4>
                  <p className="mt-3 text-lg">{selectedVerse.translation.id}</p>
                </div>
                <p className="py-3 text-lg">{selectedVerse.tafsir.id.long}</p>
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

export default TafsirAyat;
