"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSurah, getSurah, selectDetailSurah, selectSurahList } from "@/store/slice/contentSlice";
import DetailSurahComponent from "./DetailSurahComponent";
import NavMenuDetail from "./NavMenuDetail";

const BodyDetail = ({ id }) => {
  const [scrollSticky, setScrollSticky] = useState(false);

  const dispatch = useDispatch();
  const detailSurah = useSelector(selectDetailSurah);
  const surahList = useSelector(selectSurahList);

  useEffect(() => {
    dispatch(getDetailSurah(id));
    dispatch(getSurah());
  }, [dispatch, id]);

  // handle scroll
  useEffect(() => {
    const handleStickyScroll = () => {
      if (window.scrollY > 67) {
        setScrollSticky(true);
      } else {
        setScrollSticky(false);
      }
    };

    document.addEventListener("scroll", handleStickyScroll);
    return () => {
      document.removeEventListener("scroll", handleStickyScroll);
    };
  }, []);

  const dataSurah = detailSurah.verses;

  if (!dataSurah) {
    return (
      <div className="flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full text-text relative">
      <div
        className={`py-3 lg:px-16 bg-[#eceff4] w-full ${
          scrollSticky ? "top-0 fixed" : "relative"
        } z-10 transition-all`}>
        <div className="w-full container px-3 md:px-6 lg:px-16 mx-auto flex">
          <NavMenuDetail detailSurah={detailSurah} dataSurah={dataSurah} surahList={surahList} />
        </div>
      </div>

      <Container>
        <div className="w-full my-5 relative">
          <DetailSurahComponent id={id} detailSurah={detailSurah} dataSurah={dataSurah} />
        </div>
      </Container>
    </section>
  );
};

export default BodyDetail;
