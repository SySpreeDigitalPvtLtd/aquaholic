import Head from "next/head";
import React from "react";
import AboutSection from "../components/Home/AboutSection";
import ClientSlider from "../components/Home/ClientSlider";
import ConnectCTA from "../components/Home/ConnectCTA";
import Contact from "../components/Home/Contact";
import HeroSection from "../components/Home/HeroSection";
import PortfolioSection from "../components/Home/PortfolioSection";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesSlider from "../components/Home/ServicesSlider";
import TestimonialSection from "../components/Home/TestimonialSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aquaholic | Design First Agency</title>
      </Head>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServicesSlider />
      <ClientSlider />
      <TestimonialSection />
      <PortfolioSection />
      {/* <Contact /> */}
      <ConnectCTA />
    </>
  );
}
