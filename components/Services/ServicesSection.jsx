import Image from "next/image";
import React from "react";
import styles from "../../styles/Services.module.scss";
import Section from "../Common/Section";
import Link from "next/link";
const ServicesSection = ({ serviceList }) => {
  // const productData = [
  //   {
  //     product: "Flags and Poles",
  //     meta: "Custom flags and banners, UAE",
  //     content: "We provide high-calibre custom flag printing Abu Dhabi.",
  //     images: [
  //       { src: img1, category: "Feather Flags" },
  //       { src: img2, category: "Feather Flags" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "Exhibition and Display Products",
  //     meta: "Display Products",
  //     content: "Make your exhibition stand stand out with portable displays",
  //     images: [
  //       { src: img3, category: "Pop up exhibition display" },
  //       { src: img4, category: "Rollup Banners" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "Umbrella Shades and Tents",
  //     meta: "Umbrella Shades",
  //     content: "Custom printed outdoor beach umbrellas and tents ",
  //     images: [
  //       { src: img10, category: "Umbrella Shades" },
  //       { src: img11, category: "Popup Tents" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "PVC Cards",
  //     meta: "PVC",
  //     content: "Printing of PVC cards",
  //     images: [
  //       { src: img12, category: "PVC Card" },
  //       { src: img9, category: "PVC Card" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "Digital Printing",
  //     meta: "printing",
  //     content: "State-of-the-art digital printing",
  //     images: [
  //       { src: img7, category: "Wall Sticker" },
  //       { src: img8, category: "Frosted Sticker" },
  //       { src: img13, category: "Banners Printing" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "Offset Printing",
  //     meta: "printing",
  //     content:
  //       "Offset printing press offering top-notch quality, efficiency, and professionalism.",
  //     images: [
  //       { src: img5, category: "Customized Packaging" },
  //       { src: img6, category: "Brochures" },
  //     ],
  //     link: "",
  //   },
  //   {
  //     product: "Corporate Gifts",
  //     meta: "Corporate Gifting",
  //     content: "Lorem Ipsum",
  //     images: [
  //       { src: img5, category: "Customized Packaging" },
  //       { src: img6, category: "Brochures" },
  //     ],
  //     link: "",
  //   },
  // ];
  return (
    <Section className={`${styles.servicesSection} ${styles.section}`}>
      {serviceList.map((ele, ind) => (
        <div
          className={`${styles.container} ${
            ind % 2 === 0 ? styles.flexFlipLeft : styles.flexFlip
          }`}
        >
          <div
            data-scroll
            scroll-direction="vertical"
            data-scroll-speed="2"
            className={`${styles.content}`}
          >
            <h2 className={`${styles.title}`}>{ele.title}</h2>
            <p className={`${styles.text}`}>{ele.content}</p>
            <Link href={"/services/" + ele.link}>
              <button className={`${styles.btn} my-1`}>Learn More</button>
            </Link>
          </div>
          <div
            className={`${styles.serviceImage}`}
            style={{ maxHeight: "700px" }}
          >
            <Image
              data-scroll
              scroll-direction="vertical"
              data-scroll-speed="2"
              src={ele.img}
            />
          </div>
        </div>
      ))}
    </Section>
  );
};

export default ServicesSection;
