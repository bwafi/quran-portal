import React from "react";
import { ImLocation } from "react-icons/im";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full bg-white-blue mx-auto text-text dark:bg-soft-dark dark:text-text-bg-dark">
      <div className="w-full mx-auto container px-3 md:px-6 lg:px-16 flex flex-col md:flex-row py-5 md:py-8">
        <div className="w-full md:w-5/12">
          <h2 className="font-fair font-extrabold text-transparent text-2xl bg-clip-text bg-primary">Quran Portal</h2>
          <h4 className="font-bold mt-3">Baca dan pelajari The Noble Quran</h4>
          <p className="font-light mt-2">
            kebaikan yang tak terputus. Melalui situs Quran Portal, kami berharap dapat memberikan kemudahan bagi semua
            orang dalam membaca, mempelajari, dan menghayati makna yang terkandung dalam Al-Quran.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex flex-col md:flex-row justify-around md:items-center mt-8 md:mt-0">
          <ul className="w-full md:w-6/12 flex flex-col gap-3">
            <h1 className="font-bold text-xl">Contact Me</h1>
            <li className="flex items-center">
              <ImLocation className="text-4xl text-primary mr-2" />
              <a href="https://goo.gl/maps/xDUVexiESDCnuNMe9" target="_blank " className="shrink hover:text-primary">
                Krajan Lor, Yosorati, Kec. Sumberbaru, Kabupaten Jember, Jawa Timur
              </a>
            </li>
            <li className="flex">
              <HiPhone className="text-2xl text-primary mr-2" />
              <a
                href="https://wa.me/6282335955903"
                target="_blank"
                className="shrink hover:text-primary"
                rel="noreferrer">
                +62 823-3595-5903
              </a>
            </li>
            <li className="flex">
              <MdEmail className="text-2xl text-primary mr-2" />
              <a
                href="mailto:syahronibwf@gmail.com"
                target="_blank"
                className="shrink hover:text-primary"
                rel="noreferrer">
                syahronibwf@gmail.com
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3 mt-8 md:mt-0">
            <h1 className="font-bold text-xl">Quick Link</h1>
            <li className="hover:text-primary">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/jadwal-sholat">Jadwal Sholat</Link>
            </li>
            <li className="hover:text-primary">
              <a href="https://github.com/bwafi/quran-portal/issues/new" target="_blank">
                Beri Masukan
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mx-auto container px-3 md:px-6 lg:px-16 flex flex-col md:flex-row justify-between py-3 border-t">
        <p className="text-center md:text-left">
          Copyright &copy; 2023{" "}
          <a href="https://www.instagram.com/itssyahroni/" target="_blank" className="hover:text-primary">
            Syahroni Bawafi
          </a>
          . All Right Reserved.
        </p>

        <div className="flex justify-center mt-3 md:mt-0 items-center gap-5 md:gap-3">
          <a href="https://github.com/bwafi" target="_blank">
            <AiFillGithub className="text-3xl hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/syahroni-bawafi-93b422265/" target="_blank">
            <AiFillLinkedin className="text-3xl hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/itssyahroni/" target="_blank">
            <AiFillInstagram className="text-3xl hover:text-primary" />
          </a>
          <a href="https://twitter.com/itssyahroni" target="_blank">
            <AiFillTwitterSquare className="text-3xl hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
