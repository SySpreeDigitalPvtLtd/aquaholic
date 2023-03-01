import React from "react";
import styles from "../../styles/Cards.module.scss";
import imageOne from "../../public/product-3-1.jpg";
import imageTwo from "../../public/product-3-2.jpg";
// import imageThree from "../../public/product-3-3.webp";
// import imageFour from "../../public/product-3-4.webp";
import Link from "next/link";
import Image from "next/image";

const landscapingElements = () => {
  const featureList = [
    {
      title: "AB Courtyard Collection",
      content:
        "The AB courtyard collection is a durable, versatile & a cost effective  way to bring value into your landscaping.",
      img: imageOne,
      url: "/products/landscaping-elements/ab-courtyard-collection",
    },
    {
      title: "Prayosa TerraforceTerralite L36",
      content:
        "It’s small size means that it goes around sharp or wide convex and concave curves with ease.",
      img: imageTwo,
      url: "/products/landscaping-elements/prayosa-terraforce-terralite-L36",
    },
    {
      title: "Prayosa Terraforce Multi 4x4 Step Block",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: imageTwo,
      url: "/products/landscaping-elements/prayosa-terraforce-multi",
    },
    {
      title: "Rooftop Garden Planters",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: imageTwo,
      url: "/products/landscaping-elements/rooftop-garden-planters",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Products</p>
          <h1 className={styles.title}>Landscaping Elements</h1>
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

export default landscapingElements;
