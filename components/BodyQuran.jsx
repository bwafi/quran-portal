import React from "react";
import CardList from "./CardList";

const BodyQuran = () => {
  return (
    <section className="w-full my-16 mx-auto">
      <div className="border-b border-black/20">
        <ul className="flex gap-3">
          <li className="border-b-2 border-black">Surah</li>
          <li>Juz</li>
          <li>Urutan Wahyu</li>
        </ul>
      </div>
      <div className="justify-center w-full mx-auto pt-5 flex gap-5 flex-wrap">
        <CardList />
      </div>
    </section>
  );
};

export default BodyQuran;
