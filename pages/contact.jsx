import React from "react";
import styles from "../styles/utils.module.scss";

const contact = () => {
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <h1 className={styles.title}>GET IN TOUCH</h1>

        <div className={styles.flex}>
          <div>
            <h3 className={styles.titleFour}>PraYoSa Buildmat Pvt Ltd</h3>
            <p className={styles.text}>
              PraYosa BUILDMAT PVT. LTD, opp. Tata Amantra, Pimplas, Kalyan,
              Maharashtra, India
            </p>
            <p className={styles.text}>
              Phone <span className={styles.number}>02522 672321</span>
            </p>
            <p className={styles.text}>
              Cell <span className={styles.number}>+91 9619183462</span>
            </p>
            <p className={styles.text}>
              Email <span className={styles.email}>sales@prayosa.co.in</span>
            </p>
            <h3 className={styles.titleFour}>Better yet, see us in person!</h3>
            <p className={styles.text}>
              We love our customers, so feel free to visit us about normal
              business hours.
            </p>
            <button className={styles.button}>WhatsApp Us</button>
          </div>

          <div>
            <h3 className={styles.titleFour}>Hours</h3>
            <ul>
              <li className={styles.text}>Mon 09:00 am – 05:00 pm</li>
              <li className={styles.text}>Tue 09:00 am – 05:00 pm</li>
              <li className={styles.text}>Wed 09:00 am – 05:00 pm</li>
              <li className={styles.text}>Thu 09:00 am – 05:00 pm</li>
              <li className={styles.text}>Fri 09:00 am – 05:00 pm</li>
              <li className={styles.text}>Sat 09:00 am – 04:00 pm </li>
              <li className={styles.text}>Sun Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
