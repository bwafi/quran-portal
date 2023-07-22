import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const BodyModal = ({ showModal, setShowModal, key, SurahName, children }) => {
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

  return (
    <motion.div
      key={key}
      className="fixed w-full h-screen top-0 left-0 mx-auto z-40"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-screen bg-black bg-opacity-40 z-0 mx-auto px-3"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          ref={modal}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12 overflow-y-auto mx-auto bg-white dark:bg-bg-dark dark:text-text-bg-dark relative top-16 rounded-lg "
        >
          <div className="flex justify-between items-center py-5 border-b border-gray-200  px-3 md:px-8 shadow-sm">
            <h3 className="font-bold text-lg">Surah {SurahName}</h3>
            <button onClick={handleCloseModal}>
              <MdClose className="text-3xl" />
            </button>
          </div>
          {children}
          <div className="border-t border-gray-300 py-3 flex justify-end px-5">
            <button
              onClick={handleCloseModal}
              className="py-2 px-5 bg-primary rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BodyModal;
