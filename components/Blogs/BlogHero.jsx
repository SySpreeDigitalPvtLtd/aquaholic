import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/Blogs.module.scss";
const BlogHero = () => {
  return (
    <Section className={`${styles.section} ${styles.blogsHero}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>News and Updates</p>
          <h1 className={`${styles.title}`}>Latest from our content team!</h1>
          <p className={`${styles.text}`}>
            Check out the latest stuff that we are putting out
          </p>
        </div>
        <div className={`${styles.socials}`}></div>
      </div>
    </Section>
  );
};

export default BlogHero;
