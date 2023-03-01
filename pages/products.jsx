import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Products.module.scss";
import productsTwo from "../public/products-2.jpg";
import productsThree from "../public/products-3.jpg";
import productsFour from "../public/products-4.jpg";

const products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <h3 className={styles.titleTwo}>Our Products</h3>
        <div className={styles.grid}>
          <div className={styles.iframe}>
            <iframe
              src="https://www.youtube.com/embed/reR5N6pLX6Q"
              title="Retaining Wall Product Description - AB Collection"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h4 className={styles.titleFour}>Retaining Walls</h4>
            <p className={styles.text}>
              The AB Collection is our most popular retaining wall collection.
              Whether you are building a simple raised garden or tackling a
              major hillside, the AB Collection will provide just what you need.
            </p>
            <button className={styles.button}>
              <Link href={"/products/retaining-walls"}>View Details</Link>
            </button>
          </div>
          <div>
            <h4 className={styles.titleFour}>Compound Walls / Fence Walls</h4>
            <p className={styles.text}>
              AB Fence is a two-sided fencing system that is the perfect product
              for any project. Its versatile and structurally sound with a
              choice of two different colors and textures - rock like split face
              or a striated face. This offers many different combinations so
              every wall will look unique.
            </p>
            <button className={styles.button}>
              <Link href={"/products/compound-walls"}>View Details</Link>
            </button>
          </div>
          <div className={styles.iframe}>
            <iframe
              src="https://www.youtube.com/embed/_q3oy0DXG3Y"
              title="Privacy or Sound Barrier Product Description - AB Fence"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.iframe}>
            <iframe
              src="https://www.youtube.com/embed/IZVc8SZ4wNc"
              title="What is Courtyard? Building Blocks for the Great Outdoors"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h4 className={styles.titleFour}>Landscaping Elements</h4>
            <p className={styles.text}>
              The AB Courtyard Collection is a durable, versatile and a
              cost-effective way to bring value into your landscaping. This
              two-sided free standing wall system's unique design can be used in
              many different applications.
            </p>
            <p className={styles.text}>
              Create outdoor spaces that are comfortable yet elegant for
              entertaining.
            </p>
            <button className={styles.button}>
              <Link href={"/products/landscaping-elements"}>View Details</Link>
            </button>
          </div>
          <div>
            <h4 className={styles.titleFour}>
              Prayosa Terrafix Erosion Control Blocks
            </h4>
            <p className={styles.text}>
              Terrafix is an interlocking environmentally acceptable element,
              made of high strength concrete. It was specifically designed to
              provide a flexible lining where protection against wind and water
              erosion is required.
            </p>
            <button className={styles.button}>
              <Link href={"/products/prayosa-terrafix-erosion-control-blocks"}>
                View Details
              </Link>
            </button>
          </div>
          <div className={styles.image}>
            <Image src={productsTwo}></Image>
          </div>
          <div className={styles.image}>
            <Image src={productsThree}></Image>
          </div>
          <div>
            <h4 className={styles.titleFour}>Pavers</h4>

            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              nam placeat incidunt nulla laudantium voluptatibus. Doloribus id
              dolorum quod debitis ipsam quae fugiat harum dignissimos
              molestias, reprehenderit placeat, provident corporis?
            </p>
            <button className={styles.button}>
              <Link href={"/products/pavers"}>View Details</Link>
            </button>
          </div>

          <div>
            <h4 className={styles.titleFour}>Solid and Hollow Blocks</h4>
            <p className={styles.text}>
              PraYoSa's Hollow Blocks have well designed Grip Handles. This grip
              handles makes handling these blocks easier and also ensures that
              the mason always puts the Flared side of the Face and Web shells
              on the top to ensure wider surfaces or the mortar. This is a
              feature mentioned in IS 2180(part I) which is hardly taken care by
              any block manufacturers.
            </p>
            <button className={styles.button}>
              <Link href={"/products/solid-and-hollow-blocks"}>
                View Details
              </Link>
            </button>
          </div>
          <div className={styles.image}>
            <Image src={productsFour}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
