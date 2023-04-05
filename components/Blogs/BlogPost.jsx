import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/Blogs.module.scss";
import { marked } from "marked";
import Image from "next/image";

const BlogPost = ({ blog, frontMatter, content }) => {
  console.log(frontMatter);
  // const router = useRouter();
  // const blog = router.query.blog;
  // const content = blogList.find((ele) => ele.link === blog);

  return (
    <Section className={`${styles.section} ${styles.blogSection}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <p className={`${styles.metaTitle}`}>Blog category</p>
          <h1 className={`${styles.title}`}>{frontMatter.title}</h1>
          <p className={`${styles.text}`}>{frontMatter.date}</p>
        </div>
        <div className={`${styles.featuredImage}`}>
          <img src={frontMatter.cover_image} />
        </div>
        <div
          className={`${styles.text} ${styles.blogContent}`}
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
      </div>
    </Section>
  );
};

export default BlogPost;
