import React from "react";
import Image from "next/image";

import styles from "../../styles/Services.module.scss";
import Section from "../Common/Section";
import heroImage from "../../public/Images/services-page/hero-img.png";
import {
  MdDesignServices,
  MdOutlineBrandingWatermark,
  MdAddPhotoAlternate,
} from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";

const ServicesHero = () => {
  return (
    <Section className={`${styles.servicesHero} ${styles.section}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>OUR SYSTEMS</p>
          <h1 className={`${styles.title}`}>
            Expressing the fundamental
            <span className={`${styles.highlight}`}> values</span> and{" "}
            <span className={`${styles.highlight}`}> beliefs</span> of the brand
            through our systems.
          </h1>
          <div className={`${styles.serviceList}`}>
            <div className={`${styles.icon}`}>
              <MdDesignServices />
            </div>
            <div className={`${styles.icon}`}>
              <MdOutlineBrandingWatermark />
            </div>
            <div className={`${styles.icon}`}>
              <MdAddPhotoAlternate />
            </div>
            <div className={`${styles.icon}`}>
              <BsCameraVideo />
            </div>
            <div className={`${styles.icon}`}>
              <GiSparkles />
            </div>
          </div>
        </div>
        {/* image */}
      </div>
      <div
        className={` ${styles.imageSection}`}
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className={`${styles.container} ${styles.imageContent}`}>
          <div className={`${styles.container}`}>
            <div className={`${styles.title}`}>Logo</div>
          </div>

          <div className={`${styles.statsContainer}`}>
            <div className={`${styles.statGroup}`}>
              <p className={`${styles.meta}`}>Known for</p>
              <p className={`${styles.titleTwo}`}>12345+</p>
            </div>
            <div className={`${styles.statGroup}`}>
              <p className={`${styles.meta}`}>Known for</p>
              <p className={`${styles.titleTwo}`}>12345+</p>
            </div>
            <div className={`${styles.statGroup}`}>
              <p className={`${styles.meta}`}>Known for</p>
              <p className={`${styles.titleTwo}`}>12345+</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesHero;
