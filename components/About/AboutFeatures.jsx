import React from "react";
import styles from "../../styles/About.module.scss";

const AboutFeatures = () => {
  return (
    <section className={`${styles.featureSection}`}>
      <div className={`${styles.container}`}>
        <div>
          <h2 className={`${styles.title}`}>
            Things we are proud of at Aquaholic
          </h2>
        </div>

        <hr />

        <div className={`${styles.featureGrid}`}>
          {/* feature grid */}
          <div className={`${styles.featureCard}`}>
            <p className={`${styles.meta}`}>01</p>
            <h3 className={`${styles.titleTwo}`}>We are also inventive.</h3>
            <p className={`${styles.text}`}>
              An uncompromising team in pursuit of perfection, who stands for
              wide-eyed creativity. Our clients will bear testimony.
            </p>
          </div>
          {/* feaature 2 */}
          <div className={`${styles.featureCard}`}>
            <p className={`${styles.meta}`}>02</p>
            <h3 className={`${styles.titleTwo}`}>We are humble & ethical.</h3>
            <p className={`${styles.text}`}>
              An uncompromising team in pursuit of perfection, who stands for
              wide-eyed creativity. Our clients will bear testimony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
