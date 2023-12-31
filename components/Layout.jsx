import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <>
      <Navbar className={className} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
