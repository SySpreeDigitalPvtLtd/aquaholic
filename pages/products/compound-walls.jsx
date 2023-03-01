import React from "react";
import styles from "../../styles/Cards.module.scss";
import imageOne from "../../public/product-1-1.jpg";
import imageTwo from "../../public/product-1-2.webp";

import Link from "next/link";
import Image from "next/image";
const compoundWall = () => {
  const featureList = [
    {
      title: "AB Fence System",
      content:
        "AB Fence can be used to build free standing compound walls from 4-30 feet (1.2 to 9m) in height & can even sustain earth fills up to six feet.",
      img: imageOne,
      url: "/products/compound-walls/ab-fence-system",
    },
    {
      title: "Conventional Compound Walls",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      img: imageTwo,
      url: "/products/compound-walls/conventional-compound-walls",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>Compound Walls</h1>
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

export default compoundWall;
