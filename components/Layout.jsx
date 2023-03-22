import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import gsap from "gsap";
// import NavBar from "./NavBar";

const Layout = ({ children }) => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize")), [children];
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    return () => {
      // ctx.revert();
      if (scroll) scroll.destroy();
    };
  });
  return (
    <>
      {/* navbar component here */}
      <NavBar />

      <main data-scroll-container>
        {children}
        <Footer />
      </main>

      {/* footer component here */}
    </>
  );
};

export default Layout;
