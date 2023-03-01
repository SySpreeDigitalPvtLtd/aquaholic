import React from "react";
// import styles from "../../../styles/LandscapingCourtyard.module.scss";
import styles from "../../../styles/utils.module.scss";
import Image from "next/image";
import img1 from "../../../public/products-landscaping-courtyard/img-1.webp";
import img2 from "../../../public/products-landscaping-courtyard/img-2.webp";
import img3 from "../../../public/products-landscaping-courtyard/img-3.webp";
import img4 from "../../../public/products-landscaping-courtyard/img-4.webp";
import img5 from "../../../public/products-landscaping-courtyard/img-5.webp";
import img6 from "../../../public/products-landscaping-courtyard/img-6.webp";
import img7 from "../../../public/products-landscaping-courtyard/img-7.webp";
import img8 from "../../../public/products-landscaping-courtyard/img-8.jpeg";
import Slider from "../../../components/Slider";

const abcourtyardcollection = () => {
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
        <h1 className={styles.title}>AB Courtyard Collection</h1>
        <Slider images={set1} />

        <p className={styles.text}>
          The AB Courtyard Collection is a durable, versatile and a
          cost-effective way to bring value into your landscaping. This
          two-sided free standing wall system's unique design can be used in
          many dfferent applications. Create outdoor spaces that are comfortable
          yet elegant for entertaining. Incorporate custom gates, counter tops,
          natural stone or pavers as beautiful accents for even more style.
        </p>
        <p className={styles.text}>
          The AB Courtyard Collection is a two-sided free standing patio wall
          system that has three main components plus caps - AB Dublin, AB York
          and a Corner Block. Cutting of some of the blocks at designed places
          on the block is easy and could be done when necessary.
        </p>
        <div className={styles.image}>
          <Image src={img8}></Image>
        </div>
        <div className={styles.grid}>
          <div className={styles.iframe}>
            <iframe
              allowFullScreen
              src="https://www.youtube.com/embed/IZVc8SZ4wNc"
              title="What is Courtyard? Building Blocks for the Great Outdoors"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <div className={styles.iframe}>
            <iframe
              allowFullScreen
              src="https://www.youtube.com/embed/RgfIh1-ZYEQ"
              title="Patio Seating Wall Product Description - AB Courtyard"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default abcourtyardcollection;
