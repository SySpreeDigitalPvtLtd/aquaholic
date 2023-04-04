import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/Blogs.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";


const Blog = ({ blogList }) => {
  const router = useRouter();
  const blog = router.query.blog;
  const content = blogList.find((ele) => ele.link === blog);

  return (
    <Section className={`${styles.section} ${styles.blogSection}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.meta}`}>Blog category</p>
          <h1 className={`${styles.title}`}>Blog title</h1>
          <p className={`${styles.text}`}>Blog date</p>
        </div>
        <div className={`${styles.featuredImage}`}>
          <Image />
        </div>
        <div className={`${styles.text}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          repellendus blanditiis, quas nisi voluptatum aliquam omnis error
          beatae architecto nam voluptatibus repudiandae, molestias distinctio
          fugiat excepturi ut modi quo fugit.
        </div>
      </div>
    </Section>
  );
};

export default Blog;
