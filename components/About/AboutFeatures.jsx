import React from "react";
import styles from "../../styles/About.module.scss";

const AboutFeatures = () => {
  const gridData = [
    {
      index: "01",
      title: "We are also inventive.",
      content:
        "An uncompromising team in pursuit of perfection, who stands for wide-eyed creativity. Our clients will bear testimony.",
    },
    {
      index: "02",
      title: "We are humble & ethical.",
      content:
        "An uncompromising team in pursuit of perfection, who stands for wide-eyed creativity. Our clients will bear testimony.",
    },
    {
      index: "03",
      title: "We've been around",
      content:
        "An uncompromising team in pursuit of perfection, who stands for wide-eyed creativity. Our clients will bear testimony.",
    },
    {
      index: "04",
      title: "We are based in Abu Dhabi.",
      content:
        "An uncompromising team in pursuit of perfection, who stands for wide-eyed creativity. Our clients will bear testimony.",
    },
  ];

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
          {gridData.map((ele, ind) => (
            <div key={ind} className={`${styles.featureCard}`}>
              <p className={`${styles.meta}`}>{ele.index}</p>
              <h3 className={`${styles.titleTwo}`}>{ele.title}</h3>
              <p className={`${styles.text}`}>{ele.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
