import { React, useState, useEffect } from "react";

import styles from "../../../styles/utils.module.scss";
import img1 from "../../../public/products-retaining-collection/img-1.jpg";
import img2 from "../../../public/products-retaining-collection/img-2.jpg";
import img3 from "../../../public/products-retaining-collection/img-3.jpg";
import img4 from "../../../public/products-retaining-collection/img-4.jpg";
import img5 from "../../../public/products-retaining-collection/img-5.jpg";
import img6 from "../../../public/products-retaining-collection/img-6.jpg";
import img7 from "../../../public/products-retaining-collection/img-7.jpg";
import img8 from "../../../public/products-retaining-collection/img-8.jpg";
import img9 from "../../../public/products-retaining-collection/img-9.jpg";
import img10 from "../../../public/products-retaining-collection/img-10.jpg";
import img11 from "../../../public/products-retaining-collection/img-11.jpg";
import img12 from "../../../public/products-retaining-collection/img-12.jpg";
import Slider from "../../../components/Slider";

const abcollection = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const set2 = [
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
  ];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <h1 className={styles.title}>AB Collection</h1>
        <Slider images={set1} slideCount={3} />
        <h3 className={styles.titleFour}>
          The Perfect Blend of Performance and Style
        </h3>
        <p className={styles.text}>
          The simple clean lines of the AB Collection bring home the essence of
          Main Street USA. The "apple pie" of the Allan Block family of
          retaining wall products brings a refined look of classic beauty to any
          landscape.
        </p>
        <h3 className={styles.titleFour}>
          Classic, Comfortable and Always Reliable
        </h3>
        <p className={styles.text}>
          The AB Collection is our most popular retaining wall collection.
          Whether you are building a simple raised garden or tackling a major
          hillside, the AB Collection will provide just what you need.
        </p>
        <h2 className={styles.titleTwo}>Features</h2>
        <h3 className={styles.titleFour}>Easy Installation</h3>
        <p className={styles.text}>
          The AB Collection is easy to install. These blocks dry-stack without
          mortar or footings. The hollow core feature makes them easier to
          handle and promotes good drainage behind the wall. The raised lip and
          notch lock each block in place and creates a natural setback. Use one
          sized block or mix the different block sizes together in the wall to
          capture the look of hand laid stone. The AB Collection is right at
          home in residential settings where retaining walls 6’ and under are
          typically called for, and up to the task on larger retaining walls 6’
          and over.
        </p>
        <Slider images={set2} slideCount={3} />
      </div>
    </div>
  );
};

export default abcollection;
