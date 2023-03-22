import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import heroImg from "../../public/Images/hero-abstract-image.png";
import Section from "../Common/Section";
const HeroSection = () => {
  return (
    <Section className={`${styles.heroSection}`}>
      {/* thre column blocks */}
      <div className={`${styles.heroBlockWhite} ${styles.heroContent}`}></div>
      <div className={`${styles.heroBlockBg}`}></div>
      <div
        className={`${styles.heroBlockWhite} ${styles.heroBlockThird}`}
      ></div>
      {/* overlay container for hero content */}
      <div className={`${styles.overlayContainer}`}>
        {/* hero content */}
        <div className={`${styles.heroContentBox}`}>
          {/* hero section abstract container */}
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
          {/* animated text */}
          <div className={`${styles.animatedContent}`}>
            <p className={`${styles.heroMeta}`}>DIGITAL BRANDING</p>
            <div
              className={`${styles.heroAnimatedText} ${styles.heroContentText}`}
            >
              <span className={`${styles.highlight}`}>Branding</span>
              <span className={`${styles.highlight} ${styles.highlightTwo}`}>
                Content
              </span>
              <span className={`${styles.highlight} ${styles.highlightThree}`}>
                Print
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
