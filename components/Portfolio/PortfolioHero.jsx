import React from "react";
import styles from "../../styles/Portfolio.module.scss";
import Section from "../../components/Common/Section";
import Image from "next/image";

const PortfolioHero = ({ imageGallery }) => {
  return (
    <Section className={`${styles.section} ${styles.portfolioHero} `}>
      <div className={`${styles.container}`}>
        <p className={`${styles.meta}`}>OUR WORK</p>
        <h1 className={`${styles.title}`}>
          Portfolio of our creative work and achievements
        </h1>
        <p className={`${styles.text}`}>
          Aquaholic is proud to have produced engaging work for well known
          brands in a wide range of sectors.
        </p>
      </div>
      <div className={`${styles.heroGallery}`}>
        {imageGallery.map((ele, ind) => (
          <div className={`${styles.galleryImages}`}>
            {ele.images.map((image, ind) => (
              <div className={`${styles.galleryImage}`}>
                <Image src={image.src} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioHero;
