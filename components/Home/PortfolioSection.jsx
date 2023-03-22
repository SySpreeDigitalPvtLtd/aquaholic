import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import workAbstract from "../../public/Images/portfolio-home-abstract.png";
import workOne from "../../public/Images/work/work-1.png";
import portfolioBg from "../../public/Images/portfolio-bg.png";
import Section from "../Common/Section";
const PortfolioSection = () => {
  return (
    <Section
      className={`${styles.portfolioSection}`}
      style={{
        backgroundImage: `url(${portfolioBg.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.container}`}>
        {/* content */}
        <div className={`${styles.portfolioContent}`}>
          <h2 className={`${styles.title}`}>Some of our work</h2>
          <div className={`${styles.abstract}`}>
            <Image src={workAbstract} />
          </div>
        </div>
        {/* image slider */}
        <div className={`${styles.portfolioSlider}`}>
          <div className={`${styles.sliderItem}`}>
            <p className={`${styles.meta}`}>01</p>
            <h2 className={`${styles.titleTwo}`}>Lorem Ipsum</h2>
            <div className={`${styles.sliderImage}`}>
              <Image src={workOne} />
            </div>
          </div>
          <div className={`${styles.sliderItem}`}>
            <p className={`${styles.meta}`}>02</p>
            <h2 className={`${styles.titleTwo}`}>Lorem Ipsum</h2>
            <div className={`${styles.sliderImage}`}>
              <Image src={workOne} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PortfolioSection;
