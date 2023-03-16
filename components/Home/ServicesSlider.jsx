import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import sliderImgOne from "../../public/Images/slider-img-1.png";
import sliderBg from "../../public/Images/service-slider-bg.png";
const ServicesSlider = () => {
  return (
    <section
      className={`${styles.serviceSliderSection}`}
      style={{
        backgroundImage: `url(${sliderBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${styles.sliderContainer}`}>
        <div className={`${styles.sliderContent}`}>
          <p className={`${styles.meta}`}>Lorem ipsum</p>
          <h2 className={`${styles.titleTwo}`}>Service One</h2>
          <p className={`${styles.textDark}`}>
            An agency that is passionate and enthusiastic about the world of
            advertising & marketing, what’s current and how we can make a
            difference.
          </p>
          <button className={`${styles.btn}`}>Contact Us</button>
        </div>
        {/* slider images container */}
        <div className={`${styles.sliderImage}`}>
          <Image src={sliderImgOne} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
