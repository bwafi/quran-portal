"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { getDetailSurah, getSurah, selectDetailSurah, selectSurahList } from "@/store/slice/contentSlice";
import DetailSurahComponent from "./DetailSurahComponent";
import NavMenuDetail from "./NavMenuDetail";
import Loading from "../ui/Loading";

const BodyDetail = ({ id }) => {
  const [scrollSticky, setScrollSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const detailSurah = useSelector(selectDetailSurah);
  const surahList = useSelector(selectSurahList);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getDetailSurah(id)).then(() => {
      setIsLoading(false);
    });
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

  if (!dataSurah || isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full text-text relative">
      <div
        className={`py-3 lg:px-16 bg-text-bg-dark dark:bg-[#041b38] dark:text-text-bg-dark w-full ${
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
