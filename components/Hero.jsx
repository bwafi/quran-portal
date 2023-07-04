/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full mx-auto mt-24">
      <div className="w-full flex bg-[#2ca4ab] py-5 px-8 rounded-2xl justify-between items-center">
        <div className="w-7/12 ">
          <h2 className="font-bold text-5xl text-white-blue">Selamat Datang di Aplikasi Qur'an Portal</h2>
          <p className="text-white-blue mt-5">
            Rasulullah SAW. bersabda: “Siapa saja membaca satu huruf dari Kitabullah (Alquran) maka dia akan mendapat
            satu kebaikan. Sedangkan satu kebaikan dilipatkan kepada sepuluh semisalnya. Aku tidak mengatakan alif lâm
            mîm satu huruf. Akan tetapi, alif satu huruf, lâm satu huruf, dan mîm satu huruf.” (HR At-Tirmidzi)
          </p>
        </div>
        <Image src="/logo/qurankarim.png" alt="Al-Quran Al-Karim" priority width={350} height={350} />
      </div>
    </section>
  );
};

export default Hero;
