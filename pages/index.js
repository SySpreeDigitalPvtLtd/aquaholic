import Head from "next/head";
import React from "react";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aquaholic | Design First Agency</title>
      </Head>
      <div>
        <HeroSection />
      </div>
    </div>
  );
}
