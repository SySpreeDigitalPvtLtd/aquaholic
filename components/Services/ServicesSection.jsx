import Image from "next/image";
import React from "react";
import styles from "../../styles/Services.module.scss";
import Section from "../Common/Section";
import serviceDesign from "../../public/Images/services-page/service-design.jpg";
import serviceVideo from "../../public/Images/services-page/service-video.avif";
import servicePhotography from "../../public/Images/services-page/service-photography.jpg";
import serviceInteractive from "../../public/Images/services-page/service-interactive.jpg";
import serviceSocial from "../../public/Images/services-page/service-social.jpg";
import serviceBrand from "../../public/Images/services-page/service-branding.avif";
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
const ServicesSection = () => {
  const serviceList = [
    {
      title: "Design Services",
      content: "Our thinking starts and ends with the brand and the audience.",
      img: serviceDesign,
      link: "",
    },
    {
      title: "Videography Services",
      content:
        "Our team of dedicated event videographers know how to approach each project of every scale, detail and genre, from single-camera studio interviews to multi-camera events video coverage and branding video productions.",
      img: serviceVideo,
      link: "",
    },
    {
      title: "Photography Services",
      content:
        "We believe that every moment, big or small, is infinitely precious and deserves to be captured.",
      img: servicePhotography,
      link: "",
    },
    {
      title: "Interaction Services",
      content:
        "A good brand needs a visually appealing website to make an impactful presence on the digital platform.",
      img: serviceInteractive,
      link: "",
    },
    {
      title: "Social Media Services",
      content:
        "Social media is a major catalyst that can boost up your brand's sale.",
      img: serviceSocial,
      link: "",
    },
    {
      title: "Branding Services",
      content: "Distinguish your brand from the competition.",
      img: serviceBrand,
      link: "",
    },
  ];
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
            <button className={`${styles.btn} my-1`}>Learn More</button>
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
