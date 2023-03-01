import React from "react";
import styles from "../../styles/Cards.module.scss";
import imageOne from "../../public/product-3-1.jpg";
import imageTwo from "../../public/product-3-2.jpg";
import Link from "next/link";
import Image from "next/image";
// import styles from
const pavers = () => {
  const featureList = [
    {
      title: "Prayosa Terracrete Paver Blocks",
      content:
        "The AB courtyard collection is a durable, versatile & a cost effective  way to bring value into your landscaping.",
      img: imageOne,
      url: "/products/pavers/prayosa-terracrete-paver-blocks",
    },
    {
      title: "Prayosa Uni Paver Blocks",
      content:
        "Prayosa's Uni Paver Blocks displaying outstanding load bearing capacity makes an appropriate choice for industrial surfaces.",
      img: imageTwo,
      url: "/products/pavers/prayosa-uni-paver-blocks",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>Pavers</h1>
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

export default pavers;
