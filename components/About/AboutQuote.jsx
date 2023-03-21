import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.scss";
import authorSign from "../../public/Images/about-page/author-sign.png";
import authorPotrait from "../../public/Images/about-page/quote-portrait.png";
const AboutQuote = () => {
  return (
    <section className={`${styles.quoteSection}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.image}`}>
          <Image src={authorPotrait} />
        </div>
        <div className={`${styles.content}`}>
          <div className={`${styles.contentText}`}>
            <p className={`${styles.meta}`}>FOUNDERS NOTE</p>
            <h2 className={`${styles.title}`}>
              The willingness and persistence to take the extra initiative and
              build on the idea and make it real is what keeps us going.
            </h2>
          </div>

          <div className={`${styles.authorGroup}`}>
            <div className={`${styles.author}`}>
              <h3 className={`${styles.titleTwo}`}>Pradeep Kumar</h3>
              <p className={`${styles.meta}`}>From the founder's desk</p>
            </div>
            <div className={`${styles.authorImage}`}>
              <Image src={authorSign} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutQuote;
