import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import logo from "../public/Images/logo-footer.png";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import ConnectCTA from "./Common/ConnectCTA";
const Footer = () => {
  return (
    <>
      <footer data-scroll-section className={`${styles.footerSection}`}>
        <ConnectCTA />
        <div className={`${styles.footerContainer}`}>
          <div className={`${styles.footerColumn}`}>
            <h4 className={`${styles.titleTwo}`}>Products</h4>
            <ul>
              <li>Exhibition and display products</li>
              <li>Umbrella Shades and tents</li>
              <li>Pvc Cards</li>
              <li>digital printing</li>
              <li>offset printing</li>
              <li>corporate gifts</li>
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
          <div className={`${styles.footerColumn} ${styles.address}`}>
            <div>
              <Image src={logo} />
            </div>
            <p className={`${styles.text}`}>
              Aquaholic Solutions Villa 132, Al Maqta, Between the Bridges, Abu
              Dhabi, UAE
            </p>
            <div className={`${styles.socials}`}>
              {/* <FaLinkedinIn /> */}
              <div className={`${styles.socialsIcon}`}>
                <FaLinkedinIn />
              </div>
              <div className={`${styles.socialsIcon}`}>
                <FaFacebookF />
              </div>
              <div className={`${styles.socialsIcon}`}>
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
