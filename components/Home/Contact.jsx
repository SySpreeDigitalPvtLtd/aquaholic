import React from "react";
import styles from "../../styles/Home.module.scss";
import contactBg from "../../public/Images/contact-bg.png";
const Contact = () => {
  return (
    <section
      className={`${styles.contactSection}`}
      style={{ backgroundImage: `url(${contactBg.src})` }}
    >
      <div className={`${styles.contentBg}`}>
        <h2 className={`${styles.titleTwo}`}>Tell us about your project</h2>
        <p className={`${styles.text}`}>
          We help clients grow their business and websites online by driving
          more traffic, more calls, and more sales
        </p>
      </div>
      <div className={`${styles.contentBox}`}>
        <p className={`${styles.meta}`}>Contact Us</p>
        <h2 className={`${styles.titleTwo}`}>Get in Touch!</h2>
        <p className={`${styles.text}`}>
          Get in touch with us for branding and creative designing company in
          Abu Dhabi and all other parts of UAE
        </p>

        <div className={`${styles.form}`}>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">Full Name</label>
            <input type="text" placeHolder="Enter your full name" />
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="name">Email Address</label>
            <input type="text" placeHolder="email@gmail.com" />
          </div>
          <button className={`${styles.btn}`}>Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
