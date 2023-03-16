import React from "react"; 
import styles from "../../styles/Home.module.scss";
import aboutBg from "../../public/Images/about-img-bg.png";
const AboutSection = () => {
  return (
    <section
      className={`${styles.aboutSection}`}
      style={{
        backgroundImage: `url(${aboutBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* about section container */}
      <div className={`${styles.aboutContainer}`}>
        <div className={`${styles.aboutContent}`}>
          <p className={`${styles.meta}`}>Digital branding</p>
          <h2 className={`${styles.title}`} style={{ color: "white" }}>
            About Us
          </h2>
          <p className={`${styles.text}`}>
            An agency that is passionate and enthusiastic about the world of
            advertising & marketing, what’s current and how we can make a
            difference.
          </p>
          <p className={`${styles.text}`}>
            Through innovative thinking, client understanding and defined
            objectives we set the stage and let your product shine.
          </p>
          {/* about section content stats */}
          <div className={`${styles.aboutStats}`}>
            <div className={`${styles.stat}`}>
              <p className={`${styles.tag}`}>since</p>
              <p className={`${styles.number}`}>2014</p>
            </div>
            <div className={`${styles.stat}`}>
              <p className={`${styles.tag}`}>Happy Clients</p>
              <p className={`${styles.number}`}>80+</p>
            </div>
            <div className={`${styles.stat}`}>
              <p className={`${styles.tag}`}>Projects Completed</p>
              <p className={`${styles.number}`}> 2,257</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
