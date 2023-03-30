import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/PortfolioProject.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
const Project = ({ projectList }) => {
  const router = useRouter();
  const project = router.query.project;
  const content = projectList.find((ele) => ele.link === project);

  console.log(content);
  return (
    <Section className={`${styles.section} ${styles.projectSection}`}>
      <div className={`${styles.container}`}>
        <div>
          <p className={`${styles.meta}`}>{content?.category}</p>
          <h1 className={`${styles.title}`}>{content?.title}</h1>
          <p className={`${styles.content}`}>
            {content?.content ? content?.content : content?.type}
          </p>
        </div>
      </div>
      <div className={`${styles.images}`}>
        <Image src={content?.src} />
        {/* {content?.images?.map((img, ind) => (
          <Image src={img?.src} />
        ))} */}
      </div>
    </Section>
  );
};

export default Project;
