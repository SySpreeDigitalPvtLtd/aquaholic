import React from "react";
import Image from "next/image";

import styles from "../../styles/Products.module.scss";
import Section from "../Common/Section";
import img1 from "../../public/Images/products/feather-1.jpg";
import img2 from "../../public/Images/products/feather-2.jpg";
import img3 from "../../public/Images/products/gallery-1.jpg";
import img4 from "../../public/Images/products/offset-1.jpg";
import img5 from "../../public/Images/products/offset-2.jpg";
import img6 from "../../public/Images/products/printing-1.jpg";
import img7 from "../../public/Images/products/printing-2.jpg";
import img8 from "../../public/Images/products/pvc-1.jpg";
import img9 from "../../public/Images/products/umbrella-1.jpg";

const ProductsHero = () => {
  const sliderImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  //   product list data

  return (
    <>
      <Section className={` ${styles.section} ${styles.productsHero} `}>
        <div className={`${styles.container}`}>
          <div className={`${styles.content}`}>
            <p className={`${styles.meta}`}>OUR PRODUCTS</p>
            <h1 className={`${styles.title}`}>
              Make a Lasting Impression with High-Quality
              <span className={`${styles.highlight}`}>
                Print Media Services
              </span>
            </h1>
          </div>
          {/* image */}
        </div>
        <div className={`${styles.imageSlider}`}>
          {sliderImages.map((ele, ind) => (
            <div className={`${styles.sliderImage}`}>
              <Image src={ele} />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ProductsHero;
