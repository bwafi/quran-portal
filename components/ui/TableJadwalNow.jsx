import React from "react";

const TableJadwalNow = ({ sholat, time }) => {
  return (
    <div className="flex flex-col bg-white justify-center items-center gap-3 py-5 px-8 rounded-md border-r last:border-r-0">
      <h2 className="text-2xl text-primary">{sholat}</h2>
      <p>{time} (WIB)</p>
    </div>
  );
};

export default TableJadwalNow;
