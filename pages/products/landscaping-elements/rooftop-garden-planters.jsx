import React from "react";
import styles from "../../../styles/utils.module.scss";
import img1 from "../../../public/products-landscaping-rooftop/img-1.webp";
import img2 from "../../../public/products-landscaping-rooftop/img-2.webp";
import img3 from "../../../public/products-landscaping-rooftop/img-3.webp";
import img4 from "../../../public/products-landscaping-rooftop/img-4.webp";
import img5 from "../../../public/products-landscaping-rooftop/img-5.webp";
import img6 from "../../../public/products-landscaping-rooftop/img-6.webp";
import img7 from "../../../public/products-landscaping-rooftop/img-7.webp";
import Image from "next/image";
import Slider from "../../../components/Slider";
const rooftopgardenplanters = () => {
  const set1 = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
  ];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>Rooftop Garden Planters</h1>
        <Slider images={set1} />
        <h2 className={styles.titleTwo}>Garden Wall collection</h2>
        <h3 className={styles.titleFour}>AB Jumbo Junior</h3>
        <p className={styles.text}>
          AB Jumbo Junior delivers the sturdy, rugged qualities you need. Our
          winged-back design lets you build both straight and curved walls with
          one block and have a Classic Cut Stone finish.
        </p>
        <p className={styles.text}>
          You can't find more potential, more possibilities, and more
          performance in a lightweight, easy to use block. AB Junior offers a
          world of design opportunity - and delivers professional results. This
          products are preferably used for raised garden bed
        </p>
        <p className={styles.text}>
          Whether you are bordering your flower beds or building a backyard
          oasis, Allan Block's Garden Wall Collection brings you the selection
          and style you need. The Garden Wall Collection gives you three choices
          for building great gardens!
        </p>
        <div className={styles.iframe}>
          <iframe
            allowFullScreen
            src="https://www.youtube.com/embed/A-C8W_MokDQ"
            title="Building Terraced Retaining Walls or In-Wall Planters"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default rooftopgardenplanters;
