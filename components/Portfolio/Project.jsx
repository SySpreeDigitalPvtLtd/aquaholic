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
    <>
      <Section
        className={`${styles.section} ${styles.projectSection}`}
        style={{
          backgroundImage: `url(${content?.hero?.src})`,
        }}
      >
        <div className={` ${styles.sectionOverlay}`}>
          <div className={`${styles.container} ${styles.projectHero}`}>
            <div className={`${styles.heroContent}`}>
              <p className={`${styles.meta}`}>{content?.category}</p>
              <h1 className={`${styles.title}`}>{content?.title}</h1>
              {/* <p className={`${styles.text}`}>
            {content?.content ? content?.content : content?.type}
          </p> */}
            </div>
            <div className={`${styles.stats}`}>
              {content?.date ? (
                <div className={`${styles.group}`}>
                  <div className={`${styles.icon}`}>
                    <BsFillCalendarDateFill />
                  </div>

                  <p className={`${styles.meta} ${styles.text}`}>
                    {content.date}
                  </p>
                </div>
              ) : (
                ""
              )}
              {content?.industry ? (
                <div className={`${styles.group}`}>
                  <div className={`${styles.icon}`}>
                    <FaIndustry />
                  </div>
                  <p className={`${styles.meta} ${styles.text}`}>
                    {content.industry}
                  </p>
                </div>
              ) : (
                ""
              )}
              {content?.services ? (
                <div className={`${styles.group}`}>
                  <div className={`${styles.icon}`}>
                    <MdOutlineDesignServices />
                  </div>

                  <p className={`${styles.meta} ${styles.text}`}>
                    {content.services}
                  </p>
                </div>
              ) : (
                ""
              )}
              {content?.website ? (
                <div className={`${styles.group}`}>
                  <div className={`${styles.icon}`}>
                    <ImSphere />
                  </div>

                  <p className={`${styles.meta} ${styles.text}`}>
                    {content.website}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Section>
      <Section className={`${styles.section} ${styles.gallerySection}`}>
        <div className={`${styles.container} ${styles.images}`}>
          {/* <Image src={content?.src} /> */}
          {content?.featured?.map((ele, ind) => (
            <div key={ind} className={`${styles.featuredImage}`}>
              <img src={ele} />
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
    </>
  );
};

export default Project;
