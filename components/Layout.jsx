import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      {/* navbar component here */}
      <NavBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      {/* footer component here */}
    </>
  );
};

export default Layout;
