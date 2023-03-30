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
      content: "We provide high-calibre custom flag printing Abu Dhabi.",
      images: [
        { src: img1, category: "Feather Flags" },
        { src: img2, category: "Feather Flags" },
      ],
      link: "flags-and-poles",
    },
    {
      product: "Exhibition and Display Products",
      meta: "Display Products",
      content: "Make your exhibition stand stand out with portable displays",
      images: [
        { src: img3, category: "Pop up exhibition display" },
        { src: img4, category: "Rollup Banners" },
      ],
      link: "exhibition-and-display-products",
    },
    {
      product: "Umbrella Shades and Tents",
      meta: "Umbrella Shades",
      content: "Custom printed outdoor beach umbrellas and tents ",
      images: [
        { src: img10, category: "Umbrella Shades" },
        { src: img11, category: "Popup Tents" },
      ],
      link: "umbrella-and-tents",
    },
    {
      product: "PVC Cards",
      meta: "PVC",
      content: "Printing of PVC cards",
      images: [
        { src: img12, category: "PVC Card" },
        { src: img9, category: "PVC Card" },
      ],
      link: "pvc-cards",
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
      link: "digital-printing",
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
