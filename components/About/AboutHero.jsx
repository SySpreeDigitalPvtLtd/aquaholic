import React from "react";
import styles from "../../styles/About.module.scss";
import aboutBg from "../../public/Images/about-page/about-bg.png";
import aboutAbstract from "../../public/Images/about-page/about-hero-abstract.png";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className={`${styles.aboutSection}`}
      style={{ backgroundImage: `url(${aboutBg.src})` }}
    >
      <div className={`${styles.container}`}>
        <div className={`${styles.aboutAbstractImage}`}>
          <Image src={aboutAbstract} />
        </div>
        <div className={`${styles.aboutContent}`}>
          <h1 className={`${styles.title}`}>
            Design is not just what it looks like and feels like. Design is how
            it works.
          </h1>
          <p className={`${styles.text}`}>
            Founded in 2014, Aquaholic has been built upon the success of its
            clients.
          </p>
          <button className={`${styles.btn}`}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
