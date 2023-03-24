import React, { useEffect } from "react";
import styles from "../../styles/Home.module.scss";
import Section from "../Common/Section";
import { tertiary } from "../../styles/_colors.module.scss";
import contactImg from "../../public/Images/cta-abstract.png";
import Image from "next/image";
const ConnectCTA = () => {
  useEffect(() => {
    const text = document.querySelector(".text p");

    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <Section className={`${styles.connectCTA}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>get in touch</p>
          <h2 className={`${styles.title}`}>
            Take your brand to the
            <span style={{ color: tertiary }}>next </span>
            level
          </h2>
        </div>
        {/* circle */}
        <div className="circle">
          <div className="logo">
            <Image src={contactImg} />
          </div>
          <div className="text">
            <p>I never tell the same joke twice I have a DRY sense of humor.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ConnectCTA;
