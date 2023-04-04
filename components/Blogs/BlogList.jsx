import React from "react";
import styles from "../../styles/Blogs.module.scss";
import Section from "../Common/Section";

import Image from "next/image";
import Link from "next/link";
const BlogList = ({ blogList }) => {
  return (
    <Section className={`${styles.section} ${styles.blogList}`}>
      {/* <div className={`${styles.container}`}>
        <h2 className={`${styles.titleTwo}`}>Blogs that are trending</h2>
      </div> */}

      <div className={`${styles.container} ${styles.blogGrid}`}>
        {blogList.map((ele, ind) => (
          <Link href={"/blogs/" + ele.link}>
            <div className={`${styles.blogItem}`}>
              <div className={`${styles.blogImage}`}>
                <Image src={ele.feat} />
              </div>
              <p className={`${styles.meta} ${styles.category}`}>{ele.meta}</p>
              <h3 className={`${styles.title} ${styles.blogTitle}`}>
                {ele.title}
              </h3>
              {/* <p className={`${styles.text}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
          numquam non fugit. Quaerat, corporis reprehenderit sint neque
        </p> */}
              <Link href={"/blogs/" + ele.link}>
                <div className={`${styles.btn} ${styles.blogBtn}`}>
                  Learn more
                </div>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

export default BlogList;
