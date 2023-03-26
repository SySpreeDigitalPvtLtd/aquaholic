import React from "react";
import Section from "./Section";
import styles from "../../styles/CTA.module.scss";
import {
  tertiary,
  white,
  black,
  primary,
  secondary,
} from "../../styles/_colors.module.scss";
import Image from "next/image";
import ctaImg from "../../public/Images/cta-abstract.png";
const CTA = ({ title, link, color, image }) => {
  return (
    <Section
      style={{ backgroundColor: `${color ? color : primary}` }}
      className={`${styles.section} ${styles.CTASection}`}
    >
      <div className={`${styles.container}`}>
        <div>
          <h2 className={`${styles.title}`} style={{ color: white }}>
            {title ? title : "Connect with us today"}
          </h2>
          <button className={` ${styles.btn} my-1`}>Connect with us</button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
