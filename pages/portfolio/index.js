import React from "react";
import PortfolioGallery from "../../components/Portfolio/PortfolioGallery";
import PortfolioHero from "../../components/Portfolio/PortfolioHero";
import img1 from "../../public/Images/portfolio/portfolio-1.webp";
import img2 from "../../public/Images/portfolio/portfolio-2.webp";
import img3 from "../../public/Images/portfolio/portfolio-3.jpg";
import img4 from "../../public/Images/portfolio/portfolio-4.jpg";
import img5 from "../../public/Images/portfolio/portfolio-5.jpg";
import img6 from "../../public/Images/portfolio/portfolio-6.webp";
import img7 from "../../public/Images/portfolio/portfolio-7.webp";
import img8 from "../../public/Images/portfolio/portfolio-8.webp";
import img9 from "../../public/Images/portfolio/portfolio-9.webp";
import img10 from "../../public/Images/portfolio/portfolio-10.webp";
import img11 from "../../public/Images/portfolio/portfolio-11.webp";
import img12 from "../../public/Images/portfolio/portfolio-12.webp";

const portfolio = () => {
  const imageGallery = [
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
      meta: "Printing",
      content: "State-of-the-art digital printing",
      images: [
        { src: img7, category: "Wall Sticker" },
        { src: img8, category: "Frosted Sticker" },
      ],
      link: "",
    },
    {
      product: "Offset Printing",
      meta: "Printing",
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

  const galleryImg = [
    {
      src: img1,
      title: "Fairmont Bab Al Bahr",
      type: "Advertising, Newsletter, Social",
      category: "Web | Branding | Design",
      link: "",
    },
    {
      src: img2,
      title: "Royal Catering",
      type: "Brand Development, Photography",
      category: "Web | Branding | Design",
      link: "",
    },

    {
      src: img3,
      title: "Enritsch",
      type: "Branding, Print and Web",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "",
    },
    {
      src: img4,
      title: "Delecto",
      type: "Branding, Design and Web",
      category: "Web | Branding | Design",
      link: "",
    },
    {
      src: img5,
      title: "Catch",
      type: "Brand Development, Social and Photography",
      category: "Web | Branding | Design",
      link: "",
    },
    {
      src: img6,
      title: "Qasr Al Watan",
      type: "Arabic Calligraphy, Logo Development",
      category: "Advertising | Branding | Photography",
      link: "",
    },
    {
      src: img7,
      title: "ADNH Compass",
      type: "Design",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "",
    },
    {
      src: img8,
      title: "VOLO",
      type: "Branding Print",
      category: "Web | Branding | Advertising ",
      link: "",
    },
    {
      src: img9,
      title: "Armed forces officers club and hotel",
      type: "Design",
      category: "Web | Branding | Design | Photography ",
      link: "",
    },
    {
      src: img10,
      title: "YAS Island",
      type: "Branding, Design and Print",
      category: "Web | Branding | Design | Photography",
      link: "",
    },
    {
      src: img11,
      title: "Baguette Catering",
      type: "Design, Photography",
      category: "Advertising | Design",
      link: "",
    },
    {
      src: img12,
      title: "Louvre Abu Dhabi",
      type: "Branding",
      category: "Advertising | Design | Photography",
      link: "",
    },
  ];

  return (
    <>
      <PortfolioHero imageGallery={imageGallery} />
      <PortfolioGallery imageGallery={galleryImg} />
    </>
  );
};

export default portfolio;
