import React from "react";
import AboutFeatures from "../components/About/AboutFeatures";
import AboutHero from "../components/About/AboutHero";
import styles from "../styles/About.module.scss";

const about = () => {
  return (
    <>
      <AboutHero />
      <AboutFeatures />
    </>
  );
};

export default about;
