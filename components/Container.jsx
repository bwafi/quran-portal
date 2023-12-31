import React from "react";

const Container = ({ children }) => {
  return <div className="w-full container px-3 md:px-6 lg:px-16 mx-auto">{children}</div>;
};

export default Container;
