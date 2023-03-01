import React from "react";
import styles from "../../../styles/utils.module.scss";
import img1 from "../../../public/products-solid-hollow/img-1.jpg";
import Image from "next/image";
const prayosaSolidConcreteBlocks = () => {
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>PraYoSa's Solid Concrete Blocks</h1>
        <div className={styles.image}>
          <Image src={img1}></Image>
        </div>
        <p className={styles.text}>
          PraYoSa's Hollow Blocks have well designed Grip Handles. This grip
          handles makes handling these blocks easier and also ensures that the
          mason always puts the Flared side of the Face and Web shells on the
          top to ensure wider surfaces or the mortar. This is a feature
          mentioned in IS 2180(part I) which is hardly taken care by any block
          manufacturers.
        </p>
      </div>
    </div>
  );
};

export default prayosaSolidConcreteBlocks;
