"use client";
import React, { useEffect, useState } from "react";
import SelectCity from "./SelectCity";
import Container from "../Container";
import JadwalSholatNow from "./JadwalSholatNow";

const BodySholat = () => {
  const [getCityDropDown, setGetCityDropDown] = useState("jember");

  useEffect(() => {
    console.log(getCityDropDown);
  }, [getCityDropDown]);
  return (
    <Container>
      <SelectCity getCityDropDown={getCityDropDown} setGetCityDropDown={setGetCityDropDown} />
      <JadwalSholatNow getCityDropDown={getCityDropDown} />
    </Container>
  );
};

export default BodySholat;
