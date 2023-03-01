import React from "react";
import styles from "../../../styles/utils.module.scss";
import Image from "next/image";
import img1 from "../../../public/products-retaining-terraforce/img-1.jpg";
import img2 from "../../../public/products-retaining-terraforce/img-2.jpg";
import img3 from "../../../public/products-retaining-terraforce/img-3.jpg";
import Slider from "../../../components/Slider";
const prayosaTRB = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>
          Prayosa Terraforce Retaining blocks L12
        </h1>
        {/* <div className={styles.imageGrid4}>
          <div className={styles.image}>
            <Image src={img1}></Image>
          </div>
          <div className={styles.image}>
            <Image src={img2}></Image>
          </div>
          <div className={styles.image}>
            <Image src={img3}></Image>
          </div>
        </div> */}
        <Slider images={set1} />
      </div>
    </div>
  );
};

export default prayosaTRB;
