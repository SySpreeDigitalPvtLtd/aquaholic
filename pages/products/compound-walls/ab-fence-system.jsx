import React from "react";
import styles from "../../../styles/utils.module.scss";
import Image from "next/image";
import img1 from "../../../public/products-compound-fence/img-1.jpg";
import img2 from "../../../public/products-compound-fence/img-2.jpg";
import img3 from "../../../public/products-compound-fence/img-3.jpg";
import img4 from "../../../public/products-compound-fence/img-4.jpeg";
import img5 from "../../../public/products-compound-fence/img-5.png";
import img6 from "../../../public/products-compound-fence/img-6.jpg";
import img7 from "../../../public/products-compound-fence/img-7.jpg";
import Slider from "../../../components/Slider";
const abfencesystem = () => {
  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const set2 = [{ img: img6 }, { img: img7 }];
  return (
    <div className={styles.general}>
      <div className={styles.container}>
        <p className={styles.subtitle}>Products</p>
        <h1 className={styles.title}>AB Fence System</h1>
        <Slider images={set1} />

        <p className={styles.text}>
          AB Fence is a two-sided fencing system that is the perfect product for
          any project. Its versatile and structurally sound with a choice of two
          different colors and textures - rock like split face or a striated
          face. This offers many different combinations so every wall will look
          unique. Use the blocks together to create a work of art or use just
          the AB Fence Panel block to create a a clean architectural look.
        </p>
        <div className={styles.image}>
          <Image src={img4}></Image>
        </div>
        <p className={styles.text}>
          Inspired by the city walls of ancient civilizations, AB Fence adds a
          refined style to any enclosure. Surround your sanctuary with a
          champion, AB Fence.
        </p>
        <h3 className={styles.titleFour}>
          Let nature be the only sound you hear.
        </h3>
        <p className={styles.text}>
          AB Fence is a mortarless concrete fence system that uses maintenance
          free interlocking blocks to create an attractive and effective
          solution for sound abatement, security, privacy and more. With a
          clean, crisp architectural look, AB Fence is sure to be the product of
          choice.
        </p>
        <h3 className={styles.titleThree}>Features</h3>
        <h3 className={styles.titleFour}>The System</h3>
        <p className={styles.text}>
          This concrete fence uses posts and panelspatterned fences. like many
          typical fence systems to construct beautiful and durable concrete
          structures that will stand the test of time. The AB Fence Blocks have
          a split-faced look on one side and striated look on the other side.
          This gives the AB Fence System the ability to offer many different
          looks and styles without having to order any special blocks.
          Incorporating different color blocks to form patterns or banding
          within the panels and posts allows for even more options.
        </p>
        <p className={styles.text}>
          The AB Fence Blocks lock together to create posts and panel sections
          that are versatile and stack up quickly for easy installation, which
          saves you time and money. The system can incorporate curves and
          corners with ease and use different colored/textured or multiple
          shaped blocks to create beautiful patterned fences.
        </p>
        <div className={styles.image}>
          <Image src={img5}></Image>
        </div>
        <h3 className={styles.titleFour}>Patterned Walls</h3>
        <p className={styles.text}>
          The design possibilities are endless. Use the blocks from the AB Fence
          System blended together to create AB Ashlar Blend patterned fence
          panels.
        </p>
        <Slider images={set2} />
      </div>
    </div>
  );
};

export default abfencesystem;
