import React from "react";
import Product from "../../components/Products/Product";
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
const ProductPage = () => {
  const productsData = [
    {
      product: "Flags and Poles",
      meta: "Custom flags and banners, UAE",
      content:
        "They come in so many more shapes and sizes and are much more versatile than a traditional banner. Custom printed, National, International, Angled, County, Feather, Banner, Crowd, Handwaving, Guard of Honour and Portrait flags are just to name a few types of what we supply. If you’re looking for something custom made, we have wide format printers in-house so can print all kind of flags, bunting, signage and display products all at competitive prices.",
      images: [
        { src: img1, category: "Feather Flags" },
        { src: img2, category: "Feather Flags" },
      ],
      link: "flags-and-poles",
    },
    {
      product: "Exhibition and Display Products",
      meta: "Display Products",
      content:
        "We offer a full range of innovative exhibition & trade show products including custom exhibition stands, portable exhibition modules, branded trade show display stands & an eye catching trade show backdrop. We also have accessories to really make your stand one to remember at your next trade show. If you are not sure what you need give us a call & we can have you walk you through the products and get you ready for your next exhibit!",
      images: [
        { src: img3, category: "Pop up exhibition display" },
        { src: img4, category: "Rollup Banners" },
      ],
      link: "exhibition-and-display-products",
    },
    {
      product: "Umbrella Shades and Tents",
      meta: "Umbrella Shades",
      content:
        "Our commercial grade outdoor canopies are made from strong fabric that can withstand any environmental conditions and help your brand get noticed! If you are not sure what you need give us a call & we can have you walk you through the products and get you ready for your next exhibit!",
      images: [
        { src: img10, category: "Umbrella Shades" },
        { src: img11, category: "Popup Tents" },
      ],
      link: "umbrella-and-tents",
    },
    {
      product: "PVC Cards",
      meta: "PVC",
      content:
        "Affordable printing of PVC cards with complete flexibility, from loyalty cards, gift cards, and VIP cards to any other pre-printed card services.",
      images: [
        { src: img12, category: "PVC Card" },
        { src: img9, category: "PVC Card" },
      ],
      link: "pvc-cards",
    },
    {
      product: "Digital Printing",
      meta: "printing",
      content:
        "For banners, posters, window stickers, totems, roll up banners and all other advertising solutions, we provide integrated printing solutions for all your marketing and communications collateral. Aquaholic Solutions provides high-quality glass partition sticker design in UAE along with window branding service in UAE",
      images: [
        { src: img7, category: "Wall Sticker" },
        { src: img8, category: "Frosted Sticker" },
        { src: img13, category: "Banners Printing" },
      ],
      link: "digital-printing",
    },
    {
      product: "Offset Printing",
      meta: "printing",
      content:
        "You can count on our offset printing press services to not only meet, but exceed all your needs and requests. Learn more about the services we provide below, and let us know if you’d like to learn more about a specific offering.",
      images: [
        { src: img5, category: "Customized Packaging" },
        { src: img6, category: "Brochures" },
      ],
      link: "offset-printing",
    },
    {
      product: "Corporate Gifts",
      meta: "Corporate Gifting",
      content: "Lorem Ipsum",
      images: [
        { src: img5, category: "Customized Packaging" },
        { src: img6, category: "Brochures" },
      ],
      link: "corporate-gifts",
    },
  ];
  return <Product productList={productsData} />;
};

export default ProductPage;
