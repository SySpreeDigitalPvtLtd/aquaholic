import Image from "next/image";
import React from "react";
import styles from "../../styles/Services.module.scss";
import Section from "../Common/Section";
import serviceDesign from "../../public/Images/services-page/service-design.jpg";
import serviceVideo from "../../public/Images/services-page/service-video.avif";
import servicePhotography from "../../public/Images/services-page/service-photography.jpg";
import serviceInteractive from "../../public/Images/services-page/service-interactive.jpg";
import serviceSocial from "../../public/Images/services-page/service-social.jpg";
import serviceBrand from "../../public/Images/services-page/service-branding.avif";

const ServicesSection = () => {
  return (
    <Section className={`${styles.servicesSection} ${styles.section}`}>
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div
          data-scroll
          scroll-direction="vertical"
          data-scroll-speed="2"
          className={`${styles.content}`}
        >
          <h2 className={`${styles.title}`}>Design Services</h2>
          <p className={`${styles.text}`}>
            Our thinking starts and ends with the brand and the audience.
          </p>
        </div>
        <div className={`${styles.serviceImage}`}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={serviceDesign}
          />
        </div>
      </div>
      {/* 2 */}
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div className={`${styles.serviceImage}`}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={serviceVideo}
          />
        </div>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title}`}>Videography Services</h2>
          <p className={`${styles.text}`}>
            Our team of dedicated event videographers know how to approach each
            project of every scale, detail and genre, from single-camera studio
            interviews to multi-camera events video coverage and branding video
            productions.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title}`}>Photography Services</h2>
          <p className={`${styles.text}`}>
            We believe that every moment, big or small, is infinitely precious
            and deserves to be captured.
          </p>
        </div>
        <div className={`${styles.serviceImage}`}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={servicePhotography}
          />
        </div>
      </div>
      {/* 4 */}
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div className={`${styles.serviceImage}`} style={{ maxWidth: "400px" }}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={serviceInteractive}
          />
        </div>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title}`}>Interaction Services</h2>
          <p className={`${styles.text}`}>
            A good brand needs a visually appealing website to make an impactful
            presence on the digital platform.
          </p>
        </div>
      </div>
      {/* 5 */}
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title}`}>Social Media Services</h2>
          <p className={`${styles.text}`}>
            Social media is a major catalyst that can boost up your brand's
            sale.
            {/* SOCIAL MEDIA IS A MAJOR CATALYST THAT CAN BOOST UP YOUR BRAND’S SALE */}
          </p>
        </div>
        <div className={`${styles.serviceImage}`}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={serviceSocial}
          />
        </div>
      </div>
      {/* 6 */}
      <div className={`${styles.container} ${styles.flexFlip}`}>
        <div className={`${styles.serviceImage}`}>
          <Image
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            src={serviceBrand}
          />
        </div>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title}`}>Branding Services</h2>
          <p className={`${styles.text}`}>
            Distinguish your brand from the competition.
            {/* DISTINGUISH YOUR BRAND FROM THE COMPETITION */}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
