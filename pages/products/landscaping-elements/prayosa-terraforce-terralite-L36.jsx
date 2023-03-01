import React from "react";
import Image from "next/image";
import styles from "../../../styles/utils.module.scss";
import img1 from "../../../public/products-landscaping-l36/img-1.jpg";
import img2 from "../../../public/products-landscaping-l36/img-2.jpg";
import img3 from "../../../public/products-landscaping-l36/img-3.jpg";
import img4 from "../../../public/products-landscaping-l36/img-4.jpeg";
import img5 from "../../../public/products-landscaping-l36/img-5.jpeg";
import img6 from "../../../public/products-landscaping-l36/img-6.jpeg";
import img10 from "../../../public/products-landscaping-l36/img-10.jpg";
import img11 from "../../../public/products-landscaping-l36/img-11.jpg";
import img12 from "../../../public/products-landscaping-l36/img-12.jpg";
import img13 from "../../../public/products-landscaping-l36/img-13.jpg";
import img14 from "../../../public/products-landscaping-l36/img-14.jpg";
import img15 from "../../../public/products-landscaping-l36/img-15.jpg";
import img16 from "../../../public/products-landscaping-l36/img-16.jpg";
import img17 from "../../../public/products-landscaping-l36/img-17.jpg";
import img18 from "../../../public/products-landscaping-l36/img-18.jpg";
import img19 from "../../../public/products-landscaping-l36/img-19.jpg";
import Slider from "../../../components/Slider";

const prayosateraforceterralite = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const set2 = [
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
    { img: img19 },
  ];

  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>Prayosa Terraforce Terralite L36</h1>
        <Slider images={set1} />

        <p className={styles.text}>
          The Terraforce landscaping retaining wall system is available in South
          Africa and other countires in a smaller size block, known as the
          Terralite.
        </p>
        <p className={styles.text}>
          It can be used to create flowerbed borders, tree rings, braai places,
          patio walls, driveway walls, garden landscapes and any light retaining
          needed around the property
        </p>
        <Slider images={set2} />
      </div>
    </div>
  );
};

export default prayosateraforceterralite;
