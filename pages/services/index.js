import React from "react";
// import CTA from "../components/Common/CTA";
import ServicesHero from "../../components/Services/ServicesHero";
import ServicesSection from "../../components/Services/ServicesSection";
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
const services = () => {
  const serviceList = [
    {
      title: "Design Services",
      content: "Our thinking starts and ends with the brand and the audience.",
      img: serviceDesign,
      link: "design",
    },
    {
      title: "Videography Services",
      content:
        "Our team of dedicated event videographers know how to approach each project of every scale, detail and genre, from single-camera studio interviews to multi-camera events video coverage and branding video productions.",
      img: serviceVideo,
      link: "videography",
    },
    {
      title: "Photography Services",
      content:
        "We believe that every moment, big or small, is infinitely precious and deserves to be captured.",
      img: servicePhotography,
      link: "photography",
    },
    {
      title: "Interaction Services",
      content:
        "A good brand needs a visually appealing website to make an impactful presence on the digital platform.",
      img: serviceInteractive,
      link: "interaction",
    },
    {
      title: "Social Media Services",
      content:
        "Social media is a major catalyst that can boost up your brand's sale.",
      img: serviceSocial,
      link: "social-media",
    },
    {
      title: "Branding Services",
      content: "Distinguish your brand from the competition.",
      img: serviceBrand,
      link: "branding",
    },
  ];
  return (
    <>
      <ServicesHero />
      <ServicesSection serviceList={serviceList} />
      {/* <CTA /> */}
    </>
  );
};

export default services;
