import React from "react";

const TableJadwalNow = ({ sholat, time }) => {
  return (
    <div className="w-full flex flex-col bg-white justify-center items-center gap-3 py-8 px-14 sm:py-10 sm:px-16 lg:py-5 lg:px-8 rounded-md border-b last:border-b-0 lg:border-r lg:last:border-r-0">
      <h2 className="text-2xl  text-primary">{sholat}</h2>
      <p>{time} (WIB)</p>
    </div>
  );
};

export default TableJadwalNow;
