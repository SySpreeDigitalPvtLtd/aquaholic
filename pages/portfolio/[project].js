import React from "react";

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
import Project from "../../components/Portfolio/Project";

import fairmont1 from "../../public/Images/portfolio/projects/project-1/fairmont-1.jpg";
import fairmont2 from "../../public/Images/portfolio/projects/project-1/fairmont-2.jpg";
import fairmont3 from "../../public/Images/portfolio/projects/project-1/fairmont-3.jpg";
import fairmont4 from "../../public/Images/portfolio/projects/project-1/fairmont-4.jpg";
import fairmont5 from "../../public/Images/portfolio/projects/project-1/fairmont-5.jpg";
import fairmont6 from "../../public/Images/portfolio/projects/project-1/fairmont-6.jpg";
import fairmont7 from "../../public/Images/portfolio/projects/project-1/fairmont-7.jpg";
import fairmont8 from "../../public/Images/portfolio/projects/project-1/fairmont-8.jpg";
import fairmont9 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-1.jpg";
import fairmont10 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-2.jpg";
import fairmont11 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-3.jpg";
import fairmont12 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-4.jpg";
import fairmont13 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-5.jpg";
import fairmont14 from "../../public/Images/portfolio/projects/project-1/fairmont-gallery-6.jpg";

const PortfolioProject = () => {
  // arrray containing all the project data on portfolio page

  const galleryImg = [
    {
      src: img1,
      title: "Fairmont Bab Al Bahr",
      type: "Advertising, Newsletter, Social",
      category: "Web | Branding | Design",
      link: "fairmont-bab-al-bahr",
      content:
        "Situated at the gateway to the capital city of the UAE is Fairmont Bab Al Bahr, a beachfront five-star hotel in Abu Dhabi with unrivalled views of a design masterpiece - The Sheikh Zayed Grand Mosque. Fairmont’s world-class dining, including Marco Pierre White Restaurant from the former three-Michelin-star British chef, complete the luxury experience.",
      industry: "Hospitality",
      services: "Design | Advertising | Social",
      date: "2019-2020",
      website: "www.fairmont.com/abu-dhabi/",
      featured: [
        { img: fairmont1 },
        { img: fairmont2 },
        // { img: fairmont3 },
        { img: fairmont4 },
        { img: fairmont5 },
        // { img: fairmont6 },
        { img: fairmont7 },
        { img: fairmont8 },
      ],
      gallery: [
        { img: fairmont9 },
        { img: fairmont10 },
        { img: fairmont11 },
        { img: fairmont12 },
        { img: fairmont13 },
        { img: fairmont14 },
      ],
    },
    {
      src: img2,
      title: "Royal Catering",
      type: "Brand Development, Photography",
      category: "Web | Branding | Design",
      link: "royal-catering",
    },

    {
      src: img3,
      title: "Enritsch",
      type: "Branding, Print and Web",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "enritsch",
    },
    {
      src: img4,
      title: "Delecto",
      type: "Branding, Design and Web",
      category: "Web | Branding | Design",
      link: "delecto",
    },
    {
      src: img5,
      title: "Catch",
      type: "Brand Development, Social and Photography",
      category: "Web | Branding | Design",
      link: "catch",
    },
    {
      src: img6,
      title: "Qasr Al Watan",
      type: "Arabic Calligraphy, Logo Development",
      category: "Advertising | Branding | Photography",
      link: "qasr-al-watan",
    },
    {
      src: img7,
      title: "ADNH Compass",
      type: "Design",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "adnh-compass",
    },
    {
      src: img8,
      title: "VOLO",
      type: "Branding Print",
      category: "Web | Branding | Advertising ",
      link: "volo",
    },
    {
      src: img9,
      title: "Armed forces officers club and hotel",
      type: "Design",
      category: "Web | Branding | Design | Photography ",
      link: "armed-forces-officers-club-and-hotel",
    },
    {
      src: img10,
      title: "YAS Island",
      type: "Branding, Design and Print",
      category: "Web | Branding | Design | Photography",
      link: "yas-island",
    },
    {
      src: img11,
      title: "Baguette Catering",
      type: "Design, Photography",
      category: "Advertising | Design",
      link: "baguette-catering",
    },
    {
      src: img12,
      title: "Louvre Abu Dhabi",
      type: "Branding",
      category: "Advertising | Design | Photography",
      link: "louvre-abu-dhabi",
    },
  ];

  return (
    <>
      <Project projectList={galleryImg} />
    </>
  );
};

export default PortfolioProject;
