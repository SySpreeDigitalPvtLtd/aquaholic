import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";
import logo from "../public/Images/logo-footer.png";
const Footer = () => {
  return (
    <footer className={`${styles.footerSection}`}>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.footerNav}`}>
          <div className={`${styles.footerColumn}`}>
            <h4 className={`${styles.titleTwo}`}>Products</h4>
            <ul>
              <li>EXHIBITION & DISPLAY PRODUCTS</li>
              <li>UMBRELLA SHADES & TENTS</li>
              <li>PVC CARDS</li>
              <li>DIGITAL PRINTING</li>
              <li>OFFSET PRINTING</li>
              <li>corporate Gifts</li>
            </ul>
          </div>
          <div className={`${styles.footerColumn}`}>
            <h4 className={`${styles.titleTwo}`}>Information</h4>
            <ul>
              <li>FAQ</li>
              <li>Services</li>
              <li>Support</li>
            </ul>
          </div>
          <div className={`${styles.footerColumn}`}>
            <h4 className={`${styles.titleTwo}`}>Company</h4>
            <ul>
              <li>About us</li>
              <li>Potfolio</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className={`${styles.footerColumn}`}>
            <h4 className={`${styles.titleTwo}`}>Company</h4>
            <div>
              <Image src={logo} />
            </div>
            <p>
              Aquaholic Solutions Villa 132, Al Maqta, Between the Bridges, Abu
              Dhabi, UAE
            </p>
            <div className={`${styles.socials}`}>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
