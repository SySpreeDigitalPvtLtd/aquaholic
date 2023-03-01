import React from "react";
import styles from "../styles/Cards.module.scss";
import featureOne from "../public/feature-1.jpg";
import featureTwo from "../public/feature-2.png";
import featureThree from "../public/feature-3.jpg";

import Link from "next/link";
import Image from "next/image";

const features = () => {
  const featureList = [
    {
      title: "AB Courtyard",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nisi veritatis incidunt mollitia optio soluta voluptatibus iusto expedita nihil, eius corrupti rem consequuntur voluptatum recusandae, ea voluptate nobis deserunt vitae.",
      img: featureOne,
      url: "/features/ab-courtyard",
    },
    {
      title: "AB Fence System",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nisi veritatis incidunt mollitia optio soluta voluptatibus iusto expedita nihil, eius corrupti rem consequuntur voluptatum recusandae, ea voluptate nobis deserunt vitae.",
      img: featureTwo,
      url: "/features/ab-fence-system",
    },
    {
      title: "AB Retaining Walls",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nisi veritatis incidunt mollitia optio soluta voluptatibus iusto expedita nihil, eius corrupti rem consequuntur voluptatum recusandae, ea voluptate nobis deserunt vitae.",
      img: featureThree,
      url: "/features/ab-retaining-walls",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div>
          <p className={styles.subTitle}>Features</p>
          <h1 className={styles.title}>Some of our Features</h1>
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

export default features;
