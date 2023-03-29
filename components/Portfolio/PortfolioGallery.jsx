import React from "react";
import styles from "../../styles/Portfolio.module.scss";
import Section from "../../components/Common/Section";
import Image from "next/image";

const PortfolioGallery = ({ imageGallery }) => {
  return (
    <Section className={`${styles.section} ${styles.gallerySection}`}>
      {imageGallery.map((ele, ind) => (
        <div
          className={`${styles.container} ${
            ind % 2 === 0 ? styles.flexFlipLeft : styles.flexFlip
          }`}
        >
          <div
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            className={`${styles.content}`}
          >
            {/*     {
      src: img1,
      title: "Fairmont Bab Al Bahr",
      type: "Advertising, Newsletter, Social",
      category: "Web | Branding | Design",
      link: "",
    }, */}
            <p className={`${styles.meta}`}>{ele.category}</p>
            <h2 className={`${styles.title}`}>{ele.title}</h2>
            <p className={`${styles.text}`}>{ele.type}</p>
            <button className={`${styles.btn} my-1`}>Learn More</button>
          </div>
          <div className={`${styles.image}`}>
            <Image
              data-scroll
              scroll-direction="vertical"
              data-scroll-speed="2"
              src={ele.src}
            />
          </div>
          {/* <div key={ind} className={`${styles.galleryItem}`}>
            <div className={`${styles.serviceImage}`}>
              <Image src={ele.src} />
            </div>
            <div className={`${styles.content}`}>
              <p className={`${styles.meta}`}>{ele.category}</p>
              <h3 className={`${styles.title}`}>{ele.title}</h3>
              <p className={`${styles.text}`}>{ele.type}</p>
            </div>
          </div> */}
        </div>
      ))}
    </Section>
  );
};

export default PortfolioGallery;
