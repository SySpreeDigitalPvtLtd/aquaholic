import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/ServicePage.module.scss";
import { useRouter } from "next/router";

const ServicePage = ({ data }) => {
  const router = useRouter();
  const service = router.query.service;
  const content = data.find((ele) => ele.link === service);
  return (
    <Section className={`${styles.section} ${styles.serviceSection}`}>
      <div className={`${styles.container}`}>
        <p className={`${styles.meta}`}>{content?.link}</p>
        <h1 className={`${styles.title}`}>{content?.title}</h1>
        <p className={`${styles.text}`}>{content?.content}</p>
      </div>
    </Section>
  );
};

export default ServicePage;
