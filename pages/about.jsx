import React from "react";
import AboutEthics from "../components/About/AboutEthics";
import AboutFeatures from "../components/About/AboutFeatures";
import AboutHero from "../components/About/AboutHero";
import AboutQuote from "../components/About/AboutQuote";
import AboutTeams from "../components/About/AboutTeams";

const about = () => {
  return (
    <>
      <AboutHero />
      <AboutFeatures />
      <AboutEthics />
      <AboutQuote />
      <AboutTeams />
    </>
  );
};

export default about;
