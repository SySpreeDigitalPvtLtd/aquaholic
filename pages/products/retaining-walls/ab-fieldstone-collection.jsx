import React from "react";
import styles from "../../../styles/utils.module.scss";
import img1 from "../../../public/products-retaining-fieldstone/img-1.jpg";
import img2 from "../../../public/products-retaining-fieldstone/img-2.jpg";
import img3 from "../../../public/products-retaining-fieldstone/img-3.jpg";
import img4 from "../../../public/products-retaining-fieldstone/img-4.png";
import img5 from "../../../public/products-retaining-fieldstone/img-5.png";
import img6 from "../../../public/products-retaining-fieldstone/img-6.png";
import img7 from "../../../public/products-retaining-fieldstone/img-7.png";
import img8 from "../../../public/products-retaining-fieldstone/img-8.png";
import img9 from "../../../public/products-retaining-fieldstone/img-9.png";
import img10 from "../../../public/products-retaining-fieldstone/img-10.jpg";
import img11 from "../../../public/products-retaining-fieldstone/img-11.jpg";
import img12 from "../../../public/products-retaining-fieldstone/img-12.jpg";
import img13 from "../../../public/products-retaining-fieldstone/img-13.jpg";
import Slider from "../../../components/Slider";

import Image from "next/image";
const abFieldstoneCollection = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const set2 = [{ img: img4 }, { img: img5 }];
  const set3 = [{ img: img10 }, { img: img11 }, { img: img12 }, { img: img13 }];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>AB Fieldstone Collection</h1>
        <Slider images={set1} />
        <h3 className={styles.titleFour}>
          The Revolution in Retaining Walls We Have Been Waiting For
        </h3>
        <p className={styles.text}>
          Introducing the first Eco-Friendly mortarless concrete retaining wall
          system - the AB Fieldstone Collection Using recycled materials has
          allowed us to create a "green" retaining wall system that is safe for
          the environment and is able to use post consumer materials without
          taking away from the quality of the blocks.
        </p>
        <h3 className={styles.titleFour}>Green, Natural, Friendly</h3>
        <p className={styles.text}>
          AB Fieldstone is GREEN. Every block is made with locally recycled
          material in the back of the block. AB Fieldstone is NATURAL. Every AB
          Fieldstone facing unit is cast to emulate the look and feel of natural
          stone. Choose the look you want from our Series of styles. AB
          Fieldstone is FRIENDLY. The blocks are made in two pieces making them
          lightweight and easy to handle.
        </p>

        <Slider images={set2} />
        <h3 className={styles.titleFour}>AB Fieldstone Collection</h3>
        <p className={styles.text}>
          This innovative new product has unlimited possibilities in style and
          constructability. The AB Fieldstone Collection is right at home in
          residential settings where retaining walls 6 ft. (1.8 m) and under are
          typically called for, and up to the task on larger retaining walls 6
          ft. (1.8 m) and over.
        </p>
        <h2 className={styles.titleTwo}>Features:</h2>
        <h3 className={styles.titleFour}>Green</h3>

        <div className={styles.image}>
          <Image src={img6}></Image>
        </div>
        <p className={styles.text}>
          The patented multi-piece AB Fieldstone system allows the use of
          recycled materials in each assembly without sacrificing the beautiful
          appearance of the facing unit. AB Fieldstone anchoring units are
          always buried, so using a higher percentage of recycled materials in
          the anchoring unit will never affect the appearance of the wall. Each
          anchoring unit is produced using recycled materials. Allan Block
          producers use recycled materials available locally.
        </p>
        <ul>
          <li className={styles.text}>
            Materials used to manufacture the product are local raw materials
            that minimize fuel needed for handling and transportation.
          </li>
          <li className={styles.text}>
            Due to efficient manufacturing processes, there is very little waste
            when producing the AB Fieldstone retaining wall product
          </li>
        </ul>
        <h3 className={styles.titleFour}>LEED Chart</h3>
        <ul>
          <li className={styles.text}>
            Improving the environmental impact using a product that is made of
            recycled materials.
          </li>
          <li className={styles.text}>
            If upon project completion there are excess AB Fieldstone anchoring
            units, they can be saved and used on the next retaining wall project
            as they are universal units and can be used on all AB Fieldstone
            projects.
          </li>
          <li className={styles.text}>
            AB Fieldstone retaining walls can help projects achieve LEED® points
            in 14 different credits.
          </li>
          <li className={styles.text}>
            By using the AB Fieldstone product you can build retaining wall
            projects that are environmentally friendly applications to help with
            soil erosion and water management.
          </li>
          <li className={styles.text}>
            AB Fieldstone is made of concrete, which is a durable building
            material that surpasses the life-expectancy of alternative (such as
            timbers or railroad ties). Concrete products do not contain toxic
            materials that are sometimes found in these treated timber and other
            materials.
          </li>
        </ul>
        <h3 className={styles.titleFour}>Natural</h3>
        <div className={styles.image}>
          <Image src={img7}></Image>
        </div>
        <p className={styles.text}>
          AB Fieldstone comes as close as you can get to matching the raw beauty
          of natural stone. The different Series styles and the color options
          available give you truly unlimited design possibilities.
        </p>
        <h3 className={styles.titleFour}>Friendly</h3>
        <div className={styles.image}>
          <Image src={img8}></Image>
        </div>
        <p className={styles.text}>
          The AB Fieldstone Collection has everything you need for a stylish
          look as well as being a recycled product. Not to mention, it also has
          many “Friendly” advantages:
        </p>
        <h3 className={styles.titleFour}>Lightweight</h3>
        <ul>
          <li className={styles.text}>
            The lighter-weight two-piece system makes it easy to handle. These
            ergonomically-friendly blocks are easy to lift from a pallet and
            carry across difficult jobsites
          </li>
        </ul>
        <h3 className={styles.titleFour}>Easy Installation</h3>
        <ul>
          <li className={styles.text}>
            The ability to build taller gravity walls with the same installation
            practices as our AB Collectionand AB Europa Collection, there is no
            new installation process to learn.
          </li>
        </ul>
        <h3 className={styles.titleFour}>Built-in Corners & Height Control</h3>
        <ul>
          <li className={styles.text}>
            The exciting advantages of the facing unit with its built-in corner
            and height control, where every facing unit is the exact same
            height, makes building with AB Fieldstone a hassel free experience.
          </li>
        </ul>
        <p className={styles.text}>
          AB Fieldstone is a multi-piece retaining wall system where each block
          assembly consists of a facing unit and an anchoring unit. These
          universal anchoring units - short anchoring unit (SAU) and long
          anchoring unit (LAU) - are made of recycled materials and are used
          with the 812 and 824 facing units. The long anchoring unit is an
          option for job sites that require taller walls, but do not have room
          for excavation and geogrid placement.
        </p>
        <ul>
          <li className={styles.text}>
            The maximum gravity wall heights using short anchoring units, with
            either of the two facing units, is up to 5 ft. 8 in. (1.7 m) in good
            soil conditions.
          </li>
          <li className={styles.text}>
            The maximum gravity wall heights using long anchoring units, with
            either of the two facing units, is up to 9 ft. 8 in. (3.0 m) in good
            soil conditions.
          </li>
        </ul>
        <p className={styles.text}>
          Good soils conditions are defined as well-graded compactible granular
          aggregate, with an internal angle of friction of 36° or greater. You
          should always consult a registered professional engineer to determine
          actual site specific requirements or to account for seismic loading.
        </p>
        <div className={styles.image}>
          <Image src={img9}></Image>
        </div>
        <Slider images={set3} />
      </div>
    </div>
  );
};

export default abFieldstoneCollection;
