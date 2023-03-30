import React from "react";
import Section from "../Common/Section";
import styles from "../../styles/ProductPage.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
const Product = ({ productList }) => {
  const router = useRouter();
  const product = router.query.product;
  const content = productList.find((ele) => ele.link === product);
  console.log(content);
  return (
    <Section className={`${styles.section} ${styles.productSection}`}>
      <div className={`${styles.container}`}>
        <div>
          <p className={`${styles.meta}`}>{content?.meta}</p>
          <h1 className={`${styles.title}`}>{content?.product}</h1>
          <p className={`${styles.content}`}>{content?.content}</p>
        </div>
      </div>
      <div className={`${styles.images}`}>
        {content?.images?.map((img, ind) => (
          <Image src={img?.src} />
        ))}
      </div>
    </Section>
  );
};

export default Product;
