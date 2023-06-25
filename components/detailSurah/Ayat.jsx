import React, { useEffect, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";

const Ayat = ({ detailSurah }) => {
  const [currentVerse, setCurrentVerse] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  return (
    <>
      {verses.map((data) => (
        <div id={data.number.inSurah} key={data.number.inSurah} className="py-6 border-b border-black/20 text-text">
          <p className="text-right font-lpmq text-2xl text-arab">
            {data.text.arab} <span className="text-3xl">{arabicNumber(data.number.inSurah)}</span>
          </p>
          <p className="mt-6">{data.translation.id}</p>
          <div className="flex justify-end mt-5">
            <button onClick={() => handlePlayAudio(data.number.inSurah)}>
              {currentVerse === data.number.inSurah && isPlaying ? (
                <div className="flex flex-col items-center">
                  <CiPause1 className="text-xl" />
                  <p className="text-sm">Pause</p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <CiPlay1 className="text-xl" />
                  <p className="text-sm">Play</p>
                </div>
              )}
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
    </>
  );
};

export default Ayat;
