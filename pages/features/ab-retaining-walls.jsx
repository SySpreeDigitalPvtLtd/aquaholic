import React from "react";
import styles from "../../styles/utils.module.scss";
import Image from "next/image";
import imageOne from "../../public/ab-retain-1.png";
import imageTwo from "../../public/ab-retain-2.png";
import imageThree from "../../public/ab-retain-3.png";
import imageFour from "../../public/ab-retain-4.png";
import imageFive from "../../public/ab-retain-5.png";
import imageSix from "../../public/ab-retain-6.png";
import imageSeven from "../../public/ab-retain-7.jpg";
import imageEight from "../../public/ab-retain-8.jpg";
import imageNine from "../../public/ab-retain-9.jpg";
import imageTen from "../../public/ab-retain-10.jpg";
import imageEleven from "../../public/ab-retain-11.png";
import imageTwelve from "../../public/ab-retain-12.jpg";
import imageThirteen from "../../public/ab-retain-13.jpg";
import imageFourteen from "../../public/ab-retain-14.jpg";
import Slider from "../../components/Slider";
const abretainingwalls = () => {
  const set1 = [{ img: imageOne }, { img: imageTwo }, { img: imageThree }];
  const set2 = [{ img: imageFour }, { img: imageFive }, { img: imageSix }];

  const set3 = [
    { img: imageSeven },
    { img: imageEight },
    { img: imageNine },
    { img: imageTen },
  ];
  const set4 = [
    { img: imageEleven },
    { img: imageTwelve },
    { img: imageThirteen },
  ];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Features</p>
        <h1 className={styles.title}>AB Retaining Walls</h1>
        <Slider images={set1} />

        <ul className={styles.grid}>
          <li>
            <h5 className={styles.titleFive}>Easy Step-up and Step-down</h5>
            <p className={styles.text}>
              Make elevation transitions with ease while dramatically reducing
              costs.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Gates</h5>
            <p className={styles.text}>
              The concrete filled post blocks provide a secure backing for
              nearly any gate type.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Railings</h5>
            <p className={styles.text}>
              Add accent railings to increase curb appeal.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Corner</h5>
            <p className={styles.text}>
              Make 90 degree corner using AB corner block. Make custom angles if
              needed.
            </p>
          </li>
        </ul>
        <Slider images={set2} />

        <ul>
          <li>
            <h5 className={styles.titleFive}>
              Predetermined setback and multiple setback options in AB
              Collection
            </h5>
            <p className={styles.text}>
              Vertical Wall vs Battered AB Wall, 3.5'(1.1m) Tall Wall Fa = 3165
              N/m, Ka = 0.2973
            </p>
          </li>

          <li>
            <h5 className={styles.titleFive}>Corner</h5>
            <p className={styles.text}>
              Make 90 degree corner using AB corner block. Make custom angles if
              needed.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Hollow Core System</h5>
            <ul>
              <li className={styles.text}>Superior Drainage</li>
              <li className={styles.text}>Faster drying</li>
              <li className={styles.text}>
                Better resistance to freeze-thaw cycles
              </li>
              <li className={styles.text}>Less efflorescence</li>
              <li className={styles.text}>Faster installation</li>
              <li className={styles.text}>
                Lower production, labor & freight cost
              </li>
            </ul>
          </li>
        </ul>
        <Slider images={set3} />

        <ul className={styles.grid}>
          <li>
            <h5 className={styles.titleFive}>Planters</h5>
          </li>
          <li>
            <h5 className={styles.titleFive}>Real stone finish</h5>
            <p className={styles.text}>
              AB Fieldstone facing units have the finish of real stone
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>
              Easy corners using AB Fieldstone
            </h5>
            <p className={styles.text}>Inside corners | Outside corner</p>
          </li>
        </ul>
        <Slider images={set4} />

        <div className={styles.imageGrid}></div>
      </div>
    </div>
  );
};

export default abretainingwalls;
