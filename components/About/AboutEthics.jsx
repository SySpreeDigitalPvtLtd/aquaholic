import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.scss";
import sectionImage from "../../public/Images/about-page/about-ethics-bg.png";
import bgImage from "../../public/Images/about-page/ethics-bg.png";
import Section from "../Common/Section";
const AboutEthics = () => {
  return (
    <Section
      className={`${styles.ethicSection} ${styles.section}`}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>our ethics</p>
          <h2 className={`${styles.title}`}>
            Our philosophy is rooted in the values of integrity, commitment, and
            ingenuity.
          </h2>
          <p className={`${styles.text}`}>
            We do not have layers of management but as a team, we all roll up
            our sleeves to provide the expertise that will engage, impact, and
            build your brand.
          </p>
        </div>
        <div className={`${styles.sectionImage}`}>
          <Image src={sectionImage} />
        </div>
      </div>
    </Section>
  );
};

export default AboutEthics;
