import React from "react";
import styles from "../../styles/Cards.module.scss";
import imageOne from "../../public/product-5-1.jpg";
import Link from "next/link";
import Image from "next/image";
const solidAndHollowBlocks = () => {
  const featureList = [
    {
      title: "Prayosa hollow concrete blocks",
      content: "PraYoSa's Hollow Blocks have well designed Grip Handles.",
      img: imageOne,
      url: "/products/solid-and-hollow-blocks/prayosa-hollow-concrete-blocks",
    },
    {
      title: "Prayosa Solid Concrete Blocks",
      content:
        "PraYoSa's Solid Concrete Blocks are made on world's best Block making machine.",
      img: imageOne,
      url: "/products/solid-and-hollow-blocks/prayosa-solid-concrete-blocks",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>Solid and Hollow Blocks</h1>
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

export default solidAndHollowBlocks;
