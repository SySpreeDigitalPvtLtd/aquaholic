import React, { useEffect, useRef } from "react";
import styles from "../../styles/CTA.module.scss";
import Section from "./Section";
import { tertiary } from "../../styles/_colors.module.scss";
import contactImg from "../../public/Images/cta-abstract.png";
import Image from "next/image";
const ConnectCTA = () => {
  const text = useRef(null);

  useEffect(() => {
    console.log(text.current);
    text.current.innerHTML = text.current.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
      )
      .join("");
  }, []);
  return (
    <div className={`${styles.connectCTA}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>get in touch</p>
          <h2 className={`${styles.title}`}>
            Take your brand to the
            <span style={{ color: tertiary }}> next </span>
            level
          </h2>
        </div>
        {/* circle */}
        <div className={`${styles.circle}`}>
          <div
            className={`${styles.logo}`}
            style={{ backgroundImage: `url(${contactImg.src})` }}
          >
            {/* <Image src={contactImg} /> */}
          </div>
          <div className={`${styles.text}`}>
            <p ref={text}>
              contact us - contact us - contact us - contact us - contact us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCTA;
