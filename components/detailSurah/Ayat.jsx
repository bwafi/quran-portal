import React, { useEffect, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { PiBookOpenLight, PiCopySimpleThin, PiCheckCircleLight } from "react-icons/pi";
import TafsirAyat from "./TafsirAyat";

const Ayat = ({ detailSurah }) => {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [numberVerses, setNumberVerses] = useState(null);
  const [copiedVerses, setCopiedVerses] = useState({});

  const arabicNumber = (number) => {
    return number.toLocaleString("ar-EG");
  };

  const { verses } = detailSurah;

  const handlePlayAudio = (verseNumber) => {
    if (currentVerse === verseNumber) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentVerse(verseNumber);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    window.location.hash = currentVerse;
  }, [currentVerse]);

  const handleShowModal = (ayat) => {
    setNumberVerses(ayat);
    setShowModal(true);
  };

  const handleCopy = (copy, verseNumber) => {
    navigator.clipboard.writeText(copy);
    setCopiedVerses({ [verseNumber]: true });
    setTimeout(() => {
      setCopiedVerses({ [verseNumber]: false });
    }, 2000);
  };

  return (
    <>
      {verses.map((data) => (
        <div
          id={data.number.inSurah}
          key={data.number.inSurah}
          className="py-6 border-b border-black/20 text-text dark:text-text-bg-dark dark:border-text-bg-dark/60">
          <p className="text-right font-lpmq text-2xl text-arab dark:text-text-bg-dark">
            {data.text.arab} <span className="text-3xl">{arabicNumber(data.number.inSurah)}</span>
          </p>
          <p className="mt-6">{data.translation.id}</p>
          <div className="flex items-center justify-end mt-5 gap-5">
            <button onClick={() => handleCopy(data.text.arab, data.number.inSurah)} className="group">
              <div className="flex flex-col items-center">
                {copiedVerses[data.number.inSurah] ? (
                  <PiCheckCircleLight className="text-2xl group-hover:text-primary" />
                ) : (
                  <PiCopySimpleThin className="text-2xl group-hover:text-primary" />
                )}
                <span className="text-sm group-hover:text-primary">
                  {copiedVerses[data.number.inSurah] ? "Copied!" : "Copy"}
                </span>
              </div>
            </button>

            <button onClick={() => handleShowModal(data.number.inSurah)} className="group">
              <div className="flex flex-col items-center">
                <PiBookOpenLight className="text-2xl group-hover:text-primary" />
                <span className="text-sm group-hover:text-primary">Tafsir</span>
              </div>
            </button>

            <button onClick={() => handlePlayAudio(data.number.inSurah)} className="group">
              <div className="flex flex-col items-center ">
                {currentVerse === data.number.inSurah && isPlaying ? (
                  <>
                    <CiPause1 className="text-xl group-hover:text-primary" />
                  </>
                ) : (
                  <>
                    <CiPlay1 className="text-xl group-hover:text-primary" />
                  </>
                )}
                <p className="text-sm group-hover:text-primary">{isPlaying ? "Pause" : "Play"}</p>
              </div>
            </button>
            {currentVerse === data.number.inSurah && isPlaying && (
              <audio
                src={data.audio.primary}
                onEnded={() => {
                  setIsPlaying(true);
                  setCurrentVerse(currentVerse + 1);
                }}
                autoPlay
              />
            )}
          </div>
        </div>
      ))}

      <TafsirAyat
        detailSurah={detailSurah}
        showModal={showModal}
        setShowModal={setShowModal}
        numberVerses={numberVerses}
      />
    </>
  );
};

export default Ayat;
