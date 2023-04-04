import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/PortfolioProject.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { ImSphere } from "react-icons/im";

const Project = ({ projectList }) => {
  const router = useRouter();
  const project = router.query.project;
  const content = projectList.find((ele) => ele.link === project);

  console.log(content);

  return (
    <Section className={`${styles.section} ${styles.projectSection}`}>
      <div className={`${styles.container}`}>
        {/*       title: "Fairmont Bab Al Bahr",
      type: "Advertising, Newsletter, Social",
      category: "Web | Branding | Design",
      link: "fairmont-bab-al-bahr",
      content:
        "Situated at the gateway to the capital city of the UAE is Fairmont Bab Al Bahr, a beachfront five-star hotel in Abu Dhabi with unrivalled views of a design masterpiece - The Sheikh Zayed Grand Mosque. Fairmont’s world-class dining, including Marco Pierre White Restaurant from the former three-Michelin-star British chef, complete the luxury experience.",
      industry: "Hospitality",
      services: "Design | Advertising | Social",
      date: "2019 - 2020",
      website: "www.fairmont.com/abu-dhabi/", */}
        <div>
          <p className={`${styles.meta}`}>{content?.category}</p>
          <h1 className={`${styles.title}`}>{content?.title}</h1>
          <p className={`${styles.text}`}>
            {content?.content ? content?.content : content?.type}
          </p>
        </div>
        <div className={`${styles.stats}`}>
          <div className={`${styles.group}`}>
            <div className={`${styles.icon}`}>
              <BsFillCalendarDateFill />
            </div>

            <p className={`${styles.meta} ${styles.text}`}>{content?.date}</p>
          </div>
          <div className={`${styles.group}`}>
            <div className={`${styles.icon}`}>
              <FaIndustry />
            </div>
            <p className={`${styles.meta} ${styles.text}`}>
              {content?.industry}
            </p>
          </div>
          <div className={`${styles.group}`}>
            <div className={`${styles.icon}`}>
              <MdOutlineDesignServices />
            </div>

            <p className={`${styles.meta} ${styles.text}`}>
              {content?.services}
            </p>
          </div>
          <div className={`${styles.group}`}>
            <div className={`${styles.icon}`}>
              <ImSphere />
            </div>

            <p className={`${styles.meta} ${styles.text}`}>
              {content?.website}
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.images}`}>
        {/* <Image src={content?.src} /> */}
        {content?.featured?.map((ele, ind) => (
          <div className={`${styles.featuredImage}`}>
            <Image src={ele.img} />
          </div>
        ))}
      </div>
      <div className={`${styles.container} ${styles.gallerySection}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>GALLERY</p>
          <h2 className={`${styles.titleTwo}`}>Project Gallery</h2>
        </div>
      </div>
      <div className={`${styles.projectGallery}`}></div>
    </Section>
  );
};

export default Project;
