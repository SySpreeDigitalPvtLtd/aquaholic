import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import heroImg from "../../public/Images/hero-abstract-image.png";

const HeroSection = () => {
  return (
    <div className={`${styles.heroSection}`}>
      <div className={`${styles.heroBlockWhite} ${styles.heroContent}`}></div>
      <div className={`${styles.heroBlockBg}`}></div>
      <div
        className={`${styles.heroBlockWhite} ${styles.heroBlockThird}`}
      ></div>
      <div className={`${styles.overlayContainer}`}>
        <div className={`${styles.heroContentBox}`}>
          <div className={`${styles.heroAbstract}`}>
            <div className={`${styles.heroImg}`}>
              <Image src={heroImg} />
            </div>
            <p className={`${styles.heroAbstractText}`}>
              An agency that is passionate and enthusiastic about the world of
              advertising & marketing, what’s current and how we can make a
              difference.
            </p>
            <p className={`${styles.link}`}>Our Portfolio</p>
          </div>
          <div className={`${styles.animatedContent}`}>
            <p className={`${styles.heroMeta}`}>DIGITAL BRANDING</p>
            <div
              className={`${styles.heroAnimatedText} ${styles.heroContentText}`}
            >
              <span className={`${styles.highlight}`}>Branding</span>
              <span className={`${styles.highlight} ${styles.highlightTwo}`}>
                Content
              </span>
              <span className={`${styles.highlight}`}>Print</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
