import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.scss";
import imgOne from "../../public/Images/about-page/team-image-1.png";
import imgTwo from "../../public/Images/about-page/team-image-2.png";
import imgThree from "../../public/Images/about-page/team-image-3.png";
import imgFour from "../../public/Images/about-page/team-image-4.png";
import { FaLinkedinIn } from "react-icons/fa";
import Section from "../Common/Section";
const AboutTeams = () => {
  const teamData = [
    {
      name: "Pikanshu Arya",
      role: "FOUNDER & ACCOUNT DIRECTOR",
      instagram: "",
      img: imgOne,
    },
    {
      name: "Namrita Rakesh",
      role: "CREATIVE DIRECTOR",
      instagram: "",
      img: imgTwo,
    },
    {
      name: "Carl Ilios",
      role: "SENIOR PHOTOGRAPHER",
      instagram: "",
      img: imgThree,
    },
    {
      name: "Anchal Agarwal",
      role: "SENIOR DESIGNER",
      instagram: "",
      img: imgFour,
    },
  ];

  return (
    <Section className={`${styles.teamSection} ${styles.section}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>our team</p>
          <h2 className={`${styles.title}`}>Key team members</h2>
          <p className={`${styles.text}`}>
            A passionate and enthusiastic team made up of account managers,
            creative director, copywriters, photographers, graphic designers and
            production managers. The team is responsible for generating
            attention-grabbing ideas that entice consumers.
          </p>
        </div>
        {/* grid */}
        <div className={`${styles.teamGrid}`}>
          {teamData.map((ele, ind) => (
            <div key={ind} className={`${styles.gridItem}`}>
              <div className={`${styles.image}`}>
                <Image src={ele.img} />
              </div>
              <div className={`${styles.content}`}>
                <h4 className={`${styles.title}`}>{ele.name}</h4>
                <p className={`${styles.meta}`}>{ele.role}</p>
                <div href="" className={`${styles.icon}`}>
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutTeams;
