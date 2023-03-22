import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import service1 from "../../public/Images/service-grid-1.png";
import service2 from "../../public/Images/service-grid-2.png";
import service3 from "../../public/Images/service-grid-3.png";
import serviceBg from "../../public/Images/service-bg.png";
import Section from "../Common/Section";
const ServicesSection = () => {
  return (
    <Section
      className={`${styles.servicesSection}`}
      style={{
        backgroundImage: `url(${serviceBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`${styles.servicesContainer}`}>
        <div className={`${styles.serviceContent}`}>
          <h2 className={`${styles.title} py-2`}>Services we offer</h2>
          <button className={`${styles.btn}`}>Contact Us</button>
        </div>
        <div className={`${styles.servicesGrid}`}>
          <div className={`${styles.gridItemOne}`}>
            <Image src={service1} />
          </div>
          <div className={`${styles.gridItemTwo}`}>
            <Image src={service2} />
          </div>
          <div className={`${styles.gridItemThree}`}>
            <Image src={service3} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
