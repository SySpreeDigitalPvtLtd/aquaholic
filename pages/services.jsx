import React from "react";
import CTA from "../components/Common/CTA";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesSection from "../components/Services/ServicesSection";
import styles from "../styles/Services.module.scss";
import { secondary } from "../styles/_colors.module.scss";
const services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />
      <CTA color={secondary} />
    </>
  );
};

export default services;
