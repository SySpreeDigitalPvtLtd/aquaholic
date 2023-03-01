import React from "react";
import styles from "../styles/utils.module.scss";
import Image from "next/image";
import imageOne from "../public/contracting-1.webp";
import Link from "next/link";
const contractingService = () => {
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contracting Services</h1>
        <div className={styles.image}>
          <Image src={imageOne}></Image>
        </div>
        <h3 className={styles.titleTwo}>Design, Supply & Installation</h3>
        <p className={styles.text}>
          PraYoSa's Contracting Services team offer a full design, supply,
          installation and project management services for Infrastructure jobs
          mainly Compound retaining wall projects.
        </p>
        <p className={styles.text}>
          Our highly qualified team consists of senior engineers, site engineers
          and experienced project managers who can assist with compound wall,
          storm water drains,landscaping and retaining wall projects.
        </p>
        <h3 className={styles.titleTwo}>
          The Supply and Install team specialize in:
        </h3>
        <ul>
          <li className={styles.text}>
            Gravity soil segmental retaining walls
          </li>
          <li className={styles.text}>Boundary Walls/ Compoundwall</li>
          <li className={styles.text}>
            Gravity soil segmental retaining walls
          </li>
          <li className={styles.text}>No fines concrete retaining walls</li>
          <li className={styles.text}>Permeable pavement systems</li>
          <li className={styles.text}>Erosion control solutions </li>
          <li className={styles.text}>Garden Planters </li>
        </ul>
        <button className={styles.button}>
          <Link href={"/contact"}>Know More</Link>
        </button>
      </div>
    </div>
  );
};

export default contractingService;
