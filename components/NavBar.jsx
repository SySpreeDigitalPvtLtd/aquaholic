import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styles from "../styles/Nav.module.scss";
import Link from "next/link";
const NavBar = () => {
  const [isVisible, setVisible] = useState(false);

  const navVisible = () => {
    setVisible((prevCheck) => !prevCheck);
  };

  return (
    <div>
      <div className={`${styles.hamburger}`} onClick={() => navVisible()}>
        <AiOutlineMenu />
      </div>
      <div
        className={` ${styles.navbar} ${
          isVisible ? styles.navbarVisible : styles.navbarHide
        }`}
      >
        <div className={`${styles.navContainer}`}>
          <div className={`${styles.menuList}`}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/products"}>Products</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
