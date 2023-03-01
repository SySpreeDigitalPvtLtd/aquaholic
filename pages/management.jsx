import React from "react";
import styles from "../styles/Management.module.scss";
// import utils from "../styles/utils.module.scss";
import manageOne from "../public/management-1.webp";
import manageTwo from "../public/management-2.webp";
import manageThree from "../public/management-3.webp";
import manageFour from "../public/management-4.webp";
import Image from "next/image";

const management = () => {
  return (
    <div className={styles.manageContainer}>
      <div className={styles.container}>
        <h3 className={styles.titleTwo}>MANAGEMENT TEAM</h3>
        <div className={styles.grid}>
          <div className={styles.image}>
            <Image src={manageOne}></Image>
          </div>
          <div>
            <h4 className={styles.titleFour}>
              Mr Deepak Gadhia (Managing Director)
            </h4>
            <p className={styles.text}>
              AA civil engineer with 35 years experience in Contracting,
              Execution & Planning of High Rise Buildings &Researcher in
              Building Materials having done his B.E. Civil from S.P. Uni. in
              1982. His experience is as Project Management Consultant to
              Developers of Large Residential Complexes having started
              Professional career with Engineers India
              Ltd.(http://www.engineersindia.com/) & had been a Technical
              Advisor with Ajmera Group (http://www.ajmera.com/) .
            </p>
            <p className={styles.text}>
              He Started his first business as Executive Director of Gurjari
              Building Material Pvt. Ltd in 1985, a company manufacturing Fly
              ash Concrete Block subsequently started this Company PraYoSa
              Buildmat Pvt. Ltd along with Bharat Patel in 1999
            </p>
          </div>
          <div>
            <div className={`${styles.image} ${styles.imageMobile}`}>
              <Image src={manageTwo}></Image>
            </div>
            <h4 className={styles.titleFour}>Mr Bharat Patel (Director)</h4>
            <p className={styles.text}>
              A civil engineer with 40 years experience having done his M.S.
              (structure), S P University, India.Has extensive experience in
              design & construction of Load bearing beautifully carved temples
              of breathtaking grandeur& beauty. Working as Project Manager for
              construction of BAPS projects in India and abroad (www.baps.org).
              He has been working with BAPS since 1981.
            </p>
            <p className={styles.text}>
              He has migrated to the USA in 1998 and involved in construction
              and development of five major projects of B A P S in U S A. The
              projects are in Bartlett- IL, Sugar lane, TX, Toronto, Canada,
              Chino hills, CA and Atlanta, GA.He is currently working for
              development of Akshardham at Robbinsville,. New Jersey project,
              which is the 3rd temple in the Akshardham series being constructed
              by H.D.H. Pramukh Swami Maharaj starting from Gandhinagar & Delhi
              (http://www.akshardham.com/)
            </p>
            <p className={styles.text}>
              This 160 acre project being built in Robbinsville includes a
              Sunday school, Assembly hall, Temple, Community kitchen &
              Residential facility. His expertise is to build beautifully &
              intricately carved stone buildings without any metal reinforcement
              bars as a structural element.{" "}
            </p>
          </div>
          <div className={`${styles.image} ${styles.imgDesktop}`}>
            <Image src={manageTwo}></Image>
          </div>
          <div className={styles.image}>
            <Image src={manageThree}></Image>
          </div>
          <div>
            <h4 className={styles.titleFour}>Mr Sanjay Parikh (Director)</h4>
            <p className={styles.text}>
              A Civil engineer with 30 years experience having done his M.Tech.
              (Civil), IIT Kanpur, India. Having a Masters degree with a
              specialization in Soil Mechanics has in intense knowledge in
              design of Reinforced Earth walls (re walls).
            </p>
            <p className={styles.text}>
              Working as Senior Vice President in planning and construction
              division of BAPS as a volunteer (www.baps.org). He has an
              extensive knowledge of stone, carving in stone& load bearing& RCC
              design of buildings as he was involved in national and
              international projects in all 5 continents.
            </p>
            <p className={styles.text}>
              His duty starts from developing site plan to finishing the project
              and get occupancy certificate. The projects includes variety of
              buildings like Religious temple buildings ,residential, community,
              hostel& schools in small villages of India to metropolitan city
              like London, U.K
            </p>
          </div>
          <div className={`${styles.image} ${styles.imageMobile}`}>
            <Image src={manageFour}></Image>
          </div>
          <div>
            <h4 className={styles.titleFour}>Mr Jay Gadhia (Director)</h4>
            <p className={styles.text}>
              He is the youngest director of the company.
            </p>
            <p className={styles.text}>
              He has completed his Masters in E-Business from Sardar Patel
              University Since last 3 years he has been training people on the
              Best Practices laid down by Allan Block for installation of Allan
              Block Segmental retaining walls.
            </p>
            <p className={styles.text}>
              He trains and creates new applicators for the Mortarless RBC
              Compound wall from Allan Block namely AB fence and also Segmental
              retaining walls from Allan Blocks namely AB Collection and AB
              Fieldstone.
            </p>
            <p className={styles.text}>
              He is also the incharge of civil construction contracts taken by
              the company. Being a master's degree from an associated IT field,
              he takes care of digital marketing.
            </p>
          </div>
          <div className={`${styles.image} ${styles.imgDesktop}`}>
            <Image src={manageFour}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default management;
