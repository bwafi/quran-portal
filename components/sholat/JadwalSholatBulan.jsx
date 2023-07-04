import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import "dayjs/locale/id";

const JadwalSholatBulan = ({ getCityDropDown, jadwalSholat }) => {
  dayjs.locale("id");
  const month = dayjs().format("MMMM");
  const currentDate = dayjs().format("YYYY-MM-DD");

  const headerTable = ["Tanggal", "Imsyak", "Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];

  return (
    <div className="w-full my-24">
      <h1 className="capitalize text-lg font-semibold mb-5">Jadwal Sholat {getCityDropDown} Bulan Ini : </h1>
      <div className="flex flex-col items-center justify-center py-3 bg-[#FEFBF6]">
        <h4 className="text-lg font-semibold py-5">{month} 2023</h4>
        <table className="w-full table-fixed text-center">
          <thead className="w-full bg-primary">
            <tr>
              {headerTable.map((header, index) => (
                <th key={index} className="text-white py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="w-full">
            {jadwalSholat.map((sholat, index) => (
              <tr
                key={index}
                className={`odd:bg-[#F5F5F5] even:bg-[#E8E2E2] ${
                  currentDate === sholat.tanggal ? "bg-primary text-white" : ""
                }`}>
                <td className="py-3">{sholat.tanggal}</td>
                <td className="py-3">{sholat.imsyak} (WIB)</td>
                <td className="py-3">{sholat.shubuh} (WIB)</td>
                <td className="py-3">{sholat.dzuhur} (WIB)</td>
                <td className="py-3">{sholat.ashr} (WIB)</td>
                <td className="py-3">{sholat.magrib} (WIB)</td>
                <td className="py-3">{sholat.isya} (WIB)</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JadwalSholatBulan;
