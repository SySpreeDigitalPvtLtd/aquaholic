import React from "react";
import img1 from "../../public/Images/portfolio/projects/project-1/hero.jpg";
import img2 from "../../public/Images/portfolio/projects/project-2/hero.jpg";
import img3 from "../../public/Images/portfolio/projects/project-3/hero.jpg";
import img4 from "../../public/Images/portfolio/projects/project-4/hero.jpg";
import img6 from "../../public/Images/portfolio/projects/project-5/hero.jpg";
import img7 from "../../public/Images/portfolio/projects/project-6/hero.jpg";
import img9 from "../../public/Images/portfolio/projects/project-7/hero.jpg";

import Project from "../../components/Portfolio/Project";
import fairmont4 from "../../public/Images/portfolio/projects/project-1/fairmont-4.jpg";

const PortfolioProject = () => {
  // arrray containing all the project data on portfolio page
  const fairmontImage = {
    folder: "project-1",
    picture: [
      "fairmont-1.jpg",
      "fairmont-2.jpg",
      "fairmont-3.jpg",
      "fairmont-4.jpg",
      "fairmont-5.jpg",
      "fairmont-6.jpg",
      "fairmont-7.jpg",
      "fairmont-8.jpg",
    ],
    gallery: [
      "fairmont-gallery-1.jpg",
      "fairmont-gallery-2.jpg",
      "fairmont-gallery-3.jpg",
      "fairmont-gallery-4.jpg",
      "fairmont-gallery-5.jpg",
      "fairmont-gallery-6.jpg",
    ],
  };
  const royalCatering = {
    folder: "project-2",
    picture: [
      "royal-1.jpg",
      "royal-2.jpg",
      "royal-3.jpg",
      "royal-4.jpg",
      "royal-5.jpg",
      "royal-6.jpg",
      "royal-7.jpg",
      "royal-8.jpg",
      "royal-9.jpg",
    ],
    gallery: [
      "royal-10.jpg",
      "royal-11.jpg",
      "royal-12.jpg",
      "royal-13.jpg",
      "royal-14.jpg",
      "royal-15.jpg",
      "royal-16.jpg",
      "royal-17.jpg",
      "royal-18.jpg",
    ],
  };

  const enritsch = {
    folder: "project-3",
    picture: [
      "enritsch-1.jpg",
      "enritsch-2.jpg",
      "enritsch-3.jpg",
      "enritsch-4.jpg",
    ],
    gallery: [
      "enritsch-5.jpg",
      "enritsch-6.jpg",
      "enritsch-7.jpg",
      "enritsch-8.jpg",
    ],
  };

  const delecto = {
    folder: "project-4",
    picture: [
      "delecto-1.jpg",
      "delecto-2.jpg",
      "delecto-3.jpg",
      "delecto-4.jpg",
      "delecto-5.jpg",
      "delecto-6.jpg",
      "delecto-7.jpg",
    ],
    gallery: [
      "delecto-8.jpg",
      "delecto-9.jpg",
      "delecto-10.jpg",
      "delecto-11.jpg",
      "delecto-12.jpg",
      "delecto-13.jpg",
      "delecto-14.jpg",
    ],
  };

  const qasr = {
    folder: "project-5",
    picture: [
      "qasr-1.jpg",
      "qasr-2.jpg",
      "qasr-3.jpg",
      "qasr-4.jpg",
      "qasr-5.jpg",
      "qasr-6.jpg",
      "qasr-7.jpg",
    ],
    gallery: [
      "qasr-8.jpg",
      "qasr-9.jpg",
      "qasr-10.jpg",
      "qasr-11.jpg",
      "qasr-12.jpg",
      "qasr-13.jpg",
    ],
  };

  const adnh = {
    folder: "project-6",
    picture: [
      "adnh-1.jpg",
      "adnh-2.jpg",
      "adnh-3.jpg",
      "adnh-4.jpg",
      "adnh-5.jpg",
    ],
    gallery: ["adnh-6.jpg", "adnh-7.jpg", "adnh-8.jpg", "adnh-9.jpg"],
  };

  const armed = {
    folder: "project-7",
    picture: ["armed-1.jpg", "armed-2.jpg", "armed-3.jpg", "armed-4.jpg"],
    gallery: ["armed-5.jpg", "armed-6.jpg", "armed-7.jpg"],
  };

  // functioning turning image names into paths
  const allImage = (imageNames, folderName) => {
    const commonPath = `/Images/portfolio/projects/${folderName}/`;
    const images = imageNames.map((img, ind) => {
      return commonPath + img;
    });
    return images;
  };

  const galleryImg = [
    {
      hero: img1,
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
      featured: allImage(fairmontImage.picture, fairmontImage.folder),
      gallery: allImage(fairmontImage.gallery, fairmontImage.folder),
    },
    {
      hero: img2,
      title: "Royal Catering",
      type: "Brand Development, Photography",
      category: "Web | Branding | Design",
      link: "royal-catering",
      content:
        "With a combination of expertise, quality and innovation, Royal Catering Services has gained its reputation as one of the region’s leading catering and hospitality service providers. Founded in 2003, employing more than 2,500 highly trained professionals across its commercial, contractual and creations services.",
      industry: "Hospitality",
      services: "Design | Website | Brochure Design | Photography",
      // date: "2019-2020",
      website: "https://www.royalcatering.ae/",
      featured: allImage(royalCatering.picture, royalCatering.folder),
      gallery: allImage(royalCatering.gallery, royalCatering.folder),
    },
    {
      hero: img3,
      title: "Enritsch",
      type: "Branding, Print and Web",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "enritsch",
      content:
        "A community health and wellness platform that provides people seeking emotional, mental, physical or spiritual growth or improvement in their lives, free resources to help them on their journey to happyness and healing.",
      industry: "Health & Wellness",
      services: "Design, Website, Print Production",
      // date: "2019-2020",
      website: "https://www.enritsch.com/.html",
      featured: allImage(enritsch.picture, enritsch.folder),
      gallery: allImage(enritsch.gallery, enritsch.folder),
    },
    {
      hero: img4,
      title: "Delecto",
      type: "Branding, Design and Web",
      category: "Web | Branding | Design",
      link: "delecto",
      content:
        "Royal Catering's boutique retail and dining destination - offering the finest selection of gourmet delicacies, prepared with distiniguished quality, using the finest ingredients. Featuring impeccably presented boutique retail, and a perfectly orchestrated showroom that boasts an open kitchen, visitors are invited to enjoy the creative and colorful selection of culinary delights.",
      industry: "Retail",
      services: "Branding, Design, Packaging",
      date: "2018",
      featured: allImage(delecto.picture, delecto.folder),
      gallery: allImage(delecto.gallery, delecto.folder),
    },

    {
      hero: img6,
      title: "Qasr Al Watan",
      type: "Arabic Calligraphy, Logo Development",
      category: "Advertising | Branding | Photography",
      link: "qasr-al-watan",
      content:
        "Qasr Al Watan, the new cultural landmark in Abu Dhabi, opened its doors to the public in an invitation to discover the legacy of knowledge and tradition that have shaped the journey of the nation, boosting cultural understanding of the United Arab Emirates More than a traditional palace, Qasr Al Watan is an exquisitely crafted tribute to the Arabian heritage and artistry, and its architecture and design echo the significance of the exhibits housed within its halls and the function of its most iconic rooms.",
      industry: "Travel",
      services: "Logo Design, Arabic Calligraphy, Branding",
      date: "2018",
      featured: allImage(qasr.picture, qasr.folder),
      gallery: allImage(qasr.gallery, qasr.folder),
    },
    {
      hero: img7,
      title: "ADNH Compass",
      type: "Design",
      category: "Web | Branding | Design | Advertising | Photography",
      link: "adnh-compass",
      content:
        "ADNH Compass was born out of a joint venture partnership in November 2000 between Abu Dhabi National Hotels PJSC (ADNH), one of the UAE’s leading hospitality companies, and Compass Group PLC, currently ranked in the UK Top 30 FTSE listed companies.",
      industry: "Hospitality",
      services: "Kiosk Design, Food Trolley Design",
      date: "2019",
      website: "www.adnhcompassme.com",
      featured: allImage(adnh.picture, adnh.folder),
      gallery: allImage(adnh.gallery, adnh.folder),
    },

    {
      hero: img9,
      title: "Armed forces officers club and hotel",
      type: "Design",
      category: "Web | Branding | Design | Photography ",
      link: "armed-forces-officers-club-and-hotel",
      content:
        "The award-winning Armed Forces Officers' Club and Hotel (AFOC&H) is the result of a vision of the late Sheikh Zayed bin Sultan Al Nahyan, the Father of the Nation.",
      industry: "Hospitality",
      services:
        "Marketing Collateral, Advertising, Print Production, Vehicle Branding",
      date: "2019 - 2020",
      website: "www.afoc.ae",
      featured: allImage(armed.picture, armed.folder),
      gallery: allImage(armed.gallery, armed.folder),
    },
  ];

  return (
    <>
      <Project projectList={galleryImg} />
    </>
  );
};

export default PortfolioProject;
