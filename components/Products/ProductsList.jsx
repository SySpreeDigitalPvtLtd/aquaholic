import React from "react";
import Image from "next/image";

import styles from "../../styles/Products.module.scss";
import Section from "../Common/Section";

const ProductsList = ({ productsData }) => {
  return (
    <Section className={`${styles.productsSection} ${styles.section}`}>
      {productsData.map((ele, ind) => (
        <div
          className={`${styles.container} ${
            ind % 2 === 0 ? styles.flexFlipLeft : styles.flexFlip
          }`}
          key={ind}
        >
          <div
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            className={`${styles.content}`}
          >
            <p className={`${styles.meta}`}>{ele.meta}</p>
            <h2 className={`${styles.title}`}>{ele.product}</h2>
            <p className={`${styles.text}`}>{ele.content}</p>
            <button className={`${styles.btn} my-1`}>Learn More</button>
          </div>
          <div className={`${styles.productImages}`}>
            {ele?.images.map((image, imgIndex) => (
              <div
                className={`${styles.serviceImage}`}
                style={{ maxHeight: "700px" }}
                key={imgIndex}
              >
                <Image
                  data-scroll
                  scroll-direction="vertical"
                  data-scroll-speed="2"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ProductsList;
