import React from "react";
import styles from "../../styles/utils.module.scss";
import Image from "next/image";
// import Link
import img1 from "../../public/ab-fence-1.jpg";
import img2 from "../../public/ab-fence-2.jpg";
import img3 from "../../public/ab-fence-3.jpg";
import img4 from "../../public/ab-fence-4.jpg";
import img5 from "../../public/ab-fence-5.jpg";
import img6 from "../../public/ab-fence-6.png";
import img7 from "../../public/ab-fence-7.png";
import img8 from "../../public/ab-fence-8.jpg";
import img9 from "../../public/ab-fence-9.jpg";
import img10 from "../../public/ab-fence-10.jpg";
import img11 from "../../public/ab-fence-11.jpg";
import img12 from "../../public/ab-fence-12.jpg";
import img13 from "../../public/ab-fence-13.jpg";
import Slider from "../../components/Slider";

const abfencesystem = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const set2 = [{ img: img4 }, { img: img5 }];
  const set3 = [{ img: img6 }, { img: img7 }, { img: img8 }];
  const set4 = [{ img: img9 }, { img: img10 }, { img: img11 }];
  const set5 = [{ img: img12 }, { img: img13 }];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Features</p>
        <h1 className={styles.title}>AB Fence System</h1>
        <Slider images={set1} />
        <p className={styles.text}>
          Small unit for building curved sections or straight walls. Large units
          for straight sections or larger curved sections.
        </p>
        <ul>
          <li>
            <h5 className={styles.titleFive}>Facing pattern</h5>
            <p className={styles.text}>
              One side is split face and other is straited face. Get unique look
              on both sides. Use different sized blocks to make unique walls.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Wall Colour</h5>
            <p className={styles.text}>
              Choose from black, silver, red or yellow coloured blocks to create
              patterns.
            </p>
          </li>
        </ul>
        <Slider images={set2} />

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
        <Slider images={set3} />

        <ul className={styles.grid}>
          <li>
            <h5 className={styles.titleFive}>Curves</h5>
            <p className={styles.text}>
              Have the flexibility to create fluid curves.
            </p>
          </li>
          <li>
            <h5 className={styles.titleFive}>Entryways</h5>
            <p className={styles.text}>
              Create entryway displays of any shape and size.
            </p>
          </li>
        </ul>
        <Slider images={set4} />

        <ul>
          <li>
            <h5 className={styles.titleFive}>Lighting</h5>
            <p className={styles.text}>
              Add ground mounted or decorative fixtures secured to the top or
              side of AB Fence post.
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
        <Slider images={set5} />
      </div>
    </div>
  );
};

export default abfencesystem;
