"use client";
import { getJadwalSholat, selectJadwalSholat } from "@/store/slice/sholatSlice";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const JadwalSholatNow = ({ getCityDropDown }) => {
  const dispatch = useDispatch();
  const jadwalSholat = useSelector(selectJadwalSholat);

  const month = dayjs().format("MM");
  const year = dayjs().year();
  const currentDate = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    dispatch(getJadwalSholat({ city: getCityDropDown, year, month }));
    console.log(getCityDropDown);
  }, [dispatch, getCityDropDown, month, year]);

  if (!jadwalSholat) {
    return <div>loding..</div>;
  }

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default JadwalSholatNow;
