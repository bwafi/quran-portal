import { AnimatePresence } from "framer-motion";
import BodyModal from "../ui/BodyModal";

const TafsirAyat = ({ detailSurah, numberVerses, setShowModal, showModal }) => {
  const { verses } = detailSurah;

  const selectedVerse = verses.find((verse) => verse.number.inSurah === numberVerses);

  return (
    <AnimatePresence>
      {showModal && (
        <BodyModal
          key={selectedVerse.number.inSurah}
          SurahName={detailSurah.name.transliteration.id}
          showModal={showModal}
          setShowModal={setShowModal}>
          <div className="py-5 overflow-y-auto relative max-h-96 px-3 md:px-8">
            <div className="border-b py-5">
              <h4 className="font-lpmq text-xl text-right font-semibold">{selectedVerse.text.arab}</h4>
              <p className="mt-3 text-lg">{selectedVerse.translation.id}</p>
            </div>
            <p className="py-3 text-lg">{selectedVerse.tafsir.id.long}</p>
          </div>
        </BodyModal>
      )}
    </AnimatePresence>
  );
};

export default TafsirAyat;
