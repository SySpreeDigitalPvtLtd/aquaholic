import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.scss";
import icon from "../../public/Images/left-quotes.png";

const TestimonialSection = () => {
  return (
    <section className={`${styles.testimonialSection}`}>
      <div className={`${styles.testimonialsContainer}`}>
        <h2 className={`${styles.titleTwo}`}>Testimonials</h2>
        <div className={`${styles.slider}`}>
          <div className={`${styles.icon}`}>
            <Image src={icon} />
          </div>
          <p className={`${styles.textDark}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={`${styles.author}`}>
            <p className={`${styles.authorName}`}>Joan B. Doe</p>
            <p className={`${styles.authorCompany}`}>CEO, Demo Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
