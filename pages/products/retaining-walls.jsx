import React from "react";
import styles from "../../styles/Cards.module.scss";
import imageOne from "../../public/product-4-1.jpg";
import imageTwo from "../../public/product-4-2.jpg";
import imageThree from "../../public/product-4-3.jpg";
import Link from "next/link";
import Image from "next/image";
const retainingWalls = () => {
  const featureList = [
    {
      title: "AB Collection",
      content:
        "The AB Collection is uniquely designed blocks system used as a retaining walls.",
      img: imageOne,
      url: "/products/retaining-walls/ab-collection",
    },
    {
      title: "AB Fieldstone Collection",
      content:
        "The Unique AB Fieldstone is wall system which has a natural stone appearance coupled with Anchoring units.",
      img: imageTwo,
      url: "/products/retaining-walls/ab-fieldstone-collection",
    },
    {
      title: "Prayosa Terraforce Retaining Blocks",
      content:
        "Prayosa's Uni Paver Blocks displaying outstanding load bearing capacity makes an appropriate choice for industrial surfaces.",
      img: imageThree,
      url: "/products/retaining-walls/prayosa-terraforce-retaining-blocks",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>Retaining Walls</h1>
        </div>
        <div className={styles.grid}>
          {featureList.map((ele, ind) => (
            <div className={styles.card} key={ind}>
              <div className={styles.image}>
                <Image src={ele.img}></Image>
              </div>
              <h2 className={styles.titleFour}>{ele.title}</h2>
              <p className={styles.text}>{ele.content}</p>
              <button className={styles.button}>
                <Link href={ele.url}>View Details</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default retainingWalls;
