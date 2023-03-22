import React from "react";
import styles from "../../styles/Home.module.scss";
import logoOne from "../../public/Images/clients/client-jumeirah.png";
import logoTwo from "../../public/Images/clients/client-emirates.png";
import logoThree from "../../public/Images/clients/client-finance.png";
import logoFour from "../../public/Images/clients/client-al.png";
import logoFive from "../../public/Images/clients/client-aldar.png";
import Section from "../Common/Section";
import Image from "next/image";
const ClientSlider = () => {
  const clientImages = [
    {
      img: logoOne,
    },
    {
      img: logoTwo,
    },
    {
      img: logoThree,
    },
    {
      img: logoFour,
    },
    {
      img: logoFive,
    },
  ];
  return (
    <Section className={`${styles.clientLogos}`}>
      <div className={`${styles.logoContainer}`}>
        <p className={`${styles.meta}`}>WE ARE PROUD TO HAVE WORKED WITH</p>
        <div className={`${styles.logoSlider}`}>
          {clientImages.map((ele, ind) => (
            <div key={ind} className={`${styles.logo}`}>
              <Image src={ele.img} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ClientSlider;
