import React from "react";
import ProductsHero from "../components/Products/ProductsHero";
import ProductsList from "../components/Products/ProductsList";
// import CTA from "../components/Common/CTA";
import ServicesHero from "../components/Services/ServicesHero";
import ServicesSection from "../components/Services/ServicesSection";
import styles from "../styles/Products.module.scss";
import { secondary, primary } from "../styles/_colors.module.scss";

const products = () => {
  return (
    <>
      <ProductsHero />
      <ProductsList />
    </>
  );
};

export default products;
