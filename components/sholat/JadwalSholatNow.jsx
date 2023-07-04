"use client";
import { getJadwalSholat, selectJadwalSholat } from "@/store/slice/sholatSlice";
import dayjs from "dayjs";
import "dayjs/locale/id";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const JadwalSholatNow = ({ getCityDropDown }) => {
  const dispatch = useDispatch();
  const jadwalSholat = useSelector(selectJadwalSholat);

  dayjs.locale("id");

  const day = dayjs().format("dddd");
  const month = dayjs().format("MM");
  const year = dayjs().year();
  const currentDate = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    dispatch(getJadwalSholat({ city: getCityDropDown, year, month }));
    console.log(getCityDropDown);
  }, [dispatch, getCityDropDown, month, year]);

  const jadwalNow = jadwalSholat.filter((sholat) => sholat.tanggal == currentDate);
  console.log(jadwalNow);

  if (!jadwalSholat) {
    return <div>loding..</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center my-10">
      {jadwalNow.map((jadwal) => (
        <div key={jadwal.tanggal}>
          <div>
            <h4 className="text-center text-xl font-bold capitalize">Jadwal Sholat {getCityDropDown}</h4>
            <p className="text-center text-lg">
              {day}
              <span className="ml-2">{jadwal.tanggal}</span>
            </p>
          </div>
          <div className="flex shadow-md">
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Imsyak</h2>
              <p className="">{jadwal.imsyak} (WIB)</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Subuh</h2>
              <p className="">{jadwal.shubuh} (WIB)</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Dzuhur</h2>
              <p className="">{jadwal.dzuhur} (WIB)</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Ashar</h2>
              <p className="">{jadwal.ashr} (WIB)</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Maghrib</h2>
              <p className="">{jadwal.magrib} (WIB)</p>
            </div>
            <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
              <h2 className="text-2xl text-primary">Isya</h2>
              <p className="">{jadwal.isya} (WIB)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JadwalSholatNow;
