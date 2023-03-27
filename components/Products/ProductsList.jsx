import React from "react";
import Image from "next/image";

import styles from "../../styles/Products.module.scss";
import Section from "../Common/Section";
import img1 from "../../public/Images/products/feather-1.jpg";
import img2 from "../../public/Images/products/feather-2.jpg";
import img3 from "../../public/Images/products/gallery-1.jpg";
import img4 from "../../public/Images/products/gallery-2.jpg";
import img5 from "../../public/Images/products/offset-1.jpg";
import img6 from "../../public/Images/products/offset-2.jpg";
import img7 from "../../public/Images/products/printing-1.jpg";
import img8 from "../../public/Images/products/printing-2.jpg";
import img9 from "../../public/Images/products/pvc-1.jpg";
import img10 from "../../public/Images/products/umbrella-1.jpg";
import img11 from "../../public/Images/products/umbrella-2.jpg";
import img12 from "../../public/Images/products/pvc-2.jpg";
import img13 from "../../public/Images/products/printing-2.jpg";

const ProductsList = () => {
  const productData = [
    {
      product: "Flags and Poles",
      meta: "Custom flags and banners, UAE",
      content: "We provide high-calibre custom flag printing Abu Dhabi.",
      images: [
        { src: img1, category: "Feather Flags" },
        { src: img2, category: "Feather Flags" },
      ],
      link: "",
    },
    {
      product: "Exhibition and Display Products",
      meta: "Display Products",
      content: "Make your exhibition stand stand out with portable displays",
      images: [
        { src: img3, category: "Pop up exhibition display" },
        { src: img4, category: "Rollup Banners" },
      ],
      link: "",
    },
    {
      product: "Umbrella Shades and Tents",
      meta: "Umbrella Shades",
      content: "Custom printed outdoor beach umbrellas and tents ",
      images: [
        { src: img10, category: "Umbrella Shades" },
        { src: img11, category: "Popup Tents" },
      ],
      link: "",
    },
    {
      product: "PVC Cards",
      meta: "PVC",
      content: "Printing of PVC cards",
      images: [
        { src: img12, category: "PVC Card" },
        { src: img9, category: "PVC Card" },
      ],
      link: "",
    },
    {
      product: "Digital Printing",
      meta: "printing",
      content: "State-of-the-art digital printing",
      images: [
        { src: img7, category: "Wall Sticker" },
        { src: img8, category: "Frosted Sticker" },
        { src: img13, category: "Banners Printing" },
      ],
      link: "",
    },
    {
      product: "Offset Printing",
      meta: "printing",
      content:
        "Offset printing press offering top-notch quality, efficiency, and professionalism.",
      images: [
        { src: img5, category: "Customized Packaging" },
        { src: img6, category: "Brochures" },
      ],
      link: "",
    },
    {
      product: "Corporate Gifts",
      meta: "Corporate Gifting",
      content: "Lorem Ipsum",
      images: [
        { src: img5, category: "Customized Packaging" },
        { src: img6, category: "Brochures" },
      ],
      link: "",
    },
  ];
  return (
    <Section className={`${styles.productsSection} ${styles.section}`}>
      {productData.map((ele, ind) => (
        <div
          className={`${styles.container} ${
            ind % 2 === 0 ? styles.flexFlipLeft : styles.flexFlip
          }`}
          key={ind}
        >
          <div
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            className={`${styles.content}`}
          >
            <p className={`${styles.meta}`}>{ele.meta}</p>
            <h2 className={`${styles.title}`}>{ele.product}</h2>
            <p className={`${styles.text}`}>{ele.content}</p>
            <button className={`${styles.btn} my-1`}>Learn More</button>
          </div>
          <div className={`${styles.productImages}`}>
            {ele?.images.map((image, imgIndex) => (
              <div
                className={`${styles.serviceImage}`}
                style={{ maxHeight: "700px" }}
                key={imgIndex}
              >
                <Image
                  data-scroll
                  scroll-direction="vertical"
                  data-scroll-speed="2"
                  src={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ProductsList;
