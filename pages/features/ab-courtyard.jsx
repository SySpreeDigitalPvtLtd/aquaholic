import React from "react";
import styles from "../../styles/utils.module.scss";
import Image from "next/image";
// import Link
import imageOne from "../../public/ab-courtyard-1.jpg";
import img2 from "../../public/ab-courtyard-2.jpg";
import img3 from "../../public/ab-courtyard-3.jpg";
import img4 from "../../public/ab-courtyard-4.jpg";
import img5 from "../../public/ab-courtyard-5.jpg";
import img6 from "../../public/ab-courtyard-6.jpg";
import Slider from "../../components/Slider";

const abcourtyard = () => {
  const set1 = [{ img: img2 }, { img: img3 }, { img: img4 }];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Features</p>
        <h1 className={styles.title}>AB Courtyard</h1>
        <Slider images={set1} />
        <p className={styles.text}>
          Small unit for building curved sections or straight walls. Large units
          for straight sections or larger curved sections.
        </p>
        <ul>
          <li className={styles.titleFour}>
            Easy installation | No need of mortar
          </li>
          <li className={styles.titleFour}>
            Do it yourself | Simply stack the blocks on top of the other
          </li>
          <li className={styles.titleFour}>
            Beautify your landscapes and backyards | Create Usable Outdoor Space
          </li>
        </ul>
        <div className={styles.imageGrid}>
          <div className={styles.image}>
            <Image src={img5}></Image>
          </div>
          <div className={styles.image}>
            <Image src={img6}></Image>
          </div>
        </div>
        <ul>
          <li className={styles.titleFour}>
            Beautify your landscapes and backyards | Create Usable Outdoor Space
          </li>
        </ul>
      </div>
    </div>
  );
};

export default abcourtyard;
