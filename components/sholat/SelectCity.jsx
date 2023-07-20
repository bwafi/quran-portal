"use client";
import { getCity, selectCity } from "@/store/slice/sholatSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiCaretDown } from "react-icons/bi";
import dayjs from "dayjs";

const SelectCity = ({ getCityDropDown, setGetCityDropDown }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dropDownRef = useRef(null);

  const dispatch = useDispatch();
  const listCity = useSelector(selectCity);

  useEffect(() => {
    dispatch(getCity());
  }, [dispatch]);

  const handleGetCity = (city) => {
    setShowDropDown(false);
    setGetCityDropDown(city);
    setSearchQuery("");
  };

  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (
        showDropDown &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutSide);

    return () => document.removeEventListener("click", handleClickOutSide);
  }, [showDropDown]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterCity = listCity.filter((city) =>
    city.includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full mx-auto mt-24 flex justify-center">
      <div className="w-full flex justify-center gap-5 items-center">
        <div className="w-6/12 sm:w-3/12 lg:w-2/12">
          <button
            onClick={() => setShowDropDown(!showDropDown)}
            className="w-full flex items-center gap-1 border py-2 justify-center rounded-md shadow-sm capitalize"
          >
            {getCityDropDown}{" "}
            <BiCaretDown
              className={`${
                showDropDown ? "" : "rotate-180"
              } transition-transform`}
            />
          </button>
          {showDropDown && (
            <div
              ref={dropDownRef}
              className="w-6/12 sm:w-3/12 md:w-3/12 lg:w-[14%] max-h-[200px] absolute"
            >
              <div className="w-full h-14 bg-white dark:bg-soft-dark py-3 px-3 mx-auto z-10 shadow-md">
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Search"
                  className="w-full h-8 border border-text/30 dark:border-gray-400 rounded-lg mr-2 px-2 focus:outline-none focus:ring ring-blue-200 dark:bg-bg-dark"
                />
              </div>
              <ul className="max-h-[380px] overflow-y-auto bg-white dark:bg-soft-dark shadow rounded-b-md">
                {filterCity.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleGetCity(city)}
                    className="py-3 text-center border-t dark:border-t dark:border-t-text-bg-dark/60 capitalize cursor-pointer hover:bg-gray-100 dark:hover:bg-bg-dark"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div>
            <h3 className="font-bold text-xl sm:text-2xl">
              {currentTime} (WIB)
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCity;
