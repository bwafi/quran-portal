import React from "react";

const HumburgerMenu = ({ humburgerMenu, setHumburgerMenu }) => {
  const handleHumburgerMenu = () => {
    setHumburgerMenu(!humburgerMenu);
  };

  return (
    <button
      className="relative group lg:hidden"
      onClick={() => handleHumburgerMenu()}
    >
      <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
        <div className="flex flex-col justify-between w-[24px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div
            className={`bg-text h-[2px] w-8 transform transition-all duration-300 origin-left ${
              humburgerMenu ? "translate-x-10" : ""
            }`}
          ></div>
          <div
            className={`bg-text h-[2px] w-8 rounded transform transition-all duration-300 ${
              humburgerMenu ? "translate-x-10" : ""
            } delay-75`}
          ></div>
          <div
            className={`bg-text h-[2px] w-8 transform transition-all duration-300 origin-left ${
              humburgerMenu ? "translate-x-10" : ""
            } delay-150`}
          ></div>

          <div
            className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
              humburgerMenu ? "w-14 translate-x-0" : ""
            }`}
          >
            <div
              className={`absolute bg-text h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300 ${
                humburgerMenu ? "!rotate-45" : ""
              }`}
            ></div>
            <div
              className={`absolute bg-text h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300 ${
                humburgerMenu ? "!-rotate-45" : ""
              } `}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default HumburgerMenu;
