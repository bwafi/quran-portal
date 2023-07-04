"use client";
import dayjs from "dayjs";
import "dayjs/locale/id";
import React from "react";
import TableJadwalNow from "../ui/TableJadwalNow";

const JadwalSholatNow = ({ getCityDropDown, jadwalSholat }) => {
  dayjs.locale("id");

  const currentDate = dayjs().format("YYYY-MM-DD");
  const day = dayjs().format("dddd");
  const jadwalNow = jadwalSholat.filter((sholat) => sholat.tanggal == currentDate);

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
            <TableJadwalNow sholat={"Imsyak"} time={jadwal.imsyak} />
            <TableJadwalNow sholat={"Subuh"} time={jadwal.shubuh} />
            <TableJadwalNow sholat={"Dzuhur"} time={jadwal.dzuhur} />
            <TableJadwalNow sholat={"Ashar"} time={jadwal.ashr} />
            <TableJadwalNow sholat={"Maghrib"} time={jadwal.magrib} />
            <TableJadwalNow sholat={"Isya"} time={jadwal.isya} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JadwalSholatNow;
