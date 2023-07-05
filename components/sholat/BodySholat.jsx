"use client";
import React, { useEffect, useState } from "react";
import SelectCity from "./SelectCity";
import Container from "../Container";
import JadwalSholatNow from "./JadwalSholatNow";
import JadwalSholatBulan from "./JadwalSholatBulan";
import { useDispatch, useSelector } from "react-redux";
import { getJadwalSholat, selectJadwalSholat } from "@/store/slice/sholatSlice";
import dayjs from "dayjs";

const BodySholat = () => {
  const [getCityDropDown, setGetCityDropDown] = useState("jember");
  const dispatch = useDispatch();
  const jadwalSholat = useSelector(selectJadwalSholat);

  const month = dayjs().format("MM");
  const year = dayjs().year();

  useEffect(() => {
    dispatch(getJadwalSholat({ city: getCityDropDown, year, month }));
    console.log(getCityDropDown);
  }, [dispatch, getCityDropDown, month, year]);

  useEffect(() => {
    console.log(getCityDropDown);
  }, [getCityDropDown]);

  return (
    <>
      <SelectCity
        getCityDropDown={getCityDropDown}
        setGetCityDropDown={setGetCityDropDown}
      />
      <JadwalSholatNow
        getCityDropDown={getCityDropDown}
        jadwalSholat={jadwalSholat}
      />
      <JadwalSholatBulan
        getCityDropDown={getCityDropDown}
        jadwalSholat={jadwalSholat}
      />
    </>
  );
};

export default BodySholat;
