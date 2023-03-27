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
  const serviceList = [
    {
      title: "Design Services",
      content: "Our thinking starts and ends with the brand and the audience.",
      img: serviceDesign,
      link: "",
    },
    {
      title: "Videography Services",
      content:
        "Our team of dedicated event videographers know how to approach each project of every scale, detail and genre, from single-camera studio interviews to multi-camera events video coverage and branding video productions.",
      img: serviceVideo,
      link: "",
    },
    {
      title: "Photography Services",
      content:
        "We believe that every moment, big or small, is infinitely precious and deserves to be captured.",
      img: servicePhotography,
      link: "",
    },
    {
      title: "Interaction Services",
      content:
        "A good brand needs a visually appealing website to make an impactful presence on the digital platform.",
      img: serviceInteractive,
      link: "",
    },
    {
      title: "Social Media Services",
      content:
        "Social media is a major catalyst that can boost up your brand's sale.",
      img: serviceSocial,
      link: "",
    },
    {
      title: "Branding Services",
      content: "Distinguish your brand from the competition.",
      img: serviceBrand,
      link: "",
    },
  ];

  return (
    <Section className={`${styles.servicesSection} ${styles.section}`}>
      {serviceList.map((ele, ind) => (
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
            <h2 className={`${styles.title}`}>{ele.title}</h2>
            <p className={`${styles.text}`}>{ele.content}</p>
            <button className={`${styles.btn} my-1`}>Learn More</button>
          </div>
          <div
            className={`${styles.serviceImage}`}
            style={{ maxHeight: "700px" }}
          >
            <Image
              data-scroll
              scroll-direction="vertical"
              data-scroll-speed="2"
              src={ele.img}
            />
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ServicesSection;
