import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import featureImage from "../public/hero-img.png";
import img1 from "../public/home-1.webp";
import img2 from "../public/home-2.webp";
import img3 from "../public/home-3.webp";
import img4 from "../public/home-4.webp";
import img5 from "../public/clients/img-1.webp";
import img6 from "../public/clients/img-2.png";
import img7 from "../public/clients/img-3.png";
import img8 from "../public/clients/img-4.png";
import { GiBrickWall } from "react-icons/gi";
import { TbFence } from "react-icons/tb";
import { MdYard } from "react-icons/md";
import Link from "next/link";
import Slider from "../components/Slider";
import { Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {
  const products = [
    {
      product: "Compound Walls",
      img: "",
      url: "/products/compound-walls",
      color: "#891008",
    },
    {
      product: "Retaining Walls",
      img: "",
      url: "/products/retaining-walls",
      color: "#c2271c",
    },
    {
      product: "Landscaping Elements",
      img: "",
      url: "/products/landscaping-elements",
      color: "#891008",
    },
    {
      product: "Erosion Control Blocks",
      img: "",
      url: "/products/erosion-control-blocks",
      color: "#c2271c",
    },
    {
      product: "Solid and Hollow Walls",
      img: "",
      url: "/products/solid-and-hollow-walls",
      color: "#891008",
    },
    { product: "Pavers", img: "", url: "/products/pavers", color: "#c2271c" },
  ];

  const set1 = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
  const set2 = [
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
  ];
  return (
    <div>
      <Head>
        <title>Prayosa Build</title>
        <meta name="description" content="Prayosa Build Mat" />
        <meta name="keywords" content="Prayosa Build Mat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heroContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>BUILD A BETTER FUTURE</h1>
          <div className={styles.flex}>
            <button className={styles.button}>
              <Link href={"/contact"}>Contact Us</Link>
            </button>
            <button className={styles.button}>
              <Link href={"/products"}>View Products</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.featureContainer}  ${styles.section}`}>
        <div className={`${styles.container}`}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <div>
                <p className={styles.subtitle}>Services</p>
                <h2 className={styles.title}>What we Provide</h2>
              </div>

              <p className={styles.text}>
                We manufacture blocks for all kinds of uses - panel walls in
                buildings, retaining walls for grade changes, retaining walls
                for water applications, compound walls, fences, hardscapes,
                patio walls and pavers.
              </p>
            </div>
            <div className={styles.image}>
              <Image src={featureImage} alt="" />
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <GiBrickWall className={styles.icon} />
              <div className={styles.content}>
                <h3 className={styles.title}>Retaining Walls</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <TbFence className={styles.icon} />
              <div className={styles.content}>
                <h3 className={styles.title}>Fence System</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <MdYard className={styles.icon} />
              <div className={styles.content}>
                <h3 className={styles.title}>Courtyard</h3>
                <p className={styles.text}>
                  Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                  lectus erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.projectContainer}  ${styles.section}`}>
        <div className={`${styles.container} ${styles.grid}`}>
          <div className={styles.content}>
            <div>
              <p className={styles.subtitle}>Projects</p>
              <h2 className={styles.title}>All our Projects</h2>
            </div>

            <p className={styles.text}>
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p>
            <div className={styles.flex}>
              <button className={styles.button}>
                <Link href={"/contact"}>Contact Us</Link>
              </button>
              <button className={styles.button}>
                <Link href={"/products"}>View Products</Link>
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <div className={styles.grid}>
              <div className={styles.image}>
                <Image src={img1} alt="" />
              </div>
              <div className={styles.image}>
                <Image src={img2} alt="" />
              </div>
              <div className={styles.image}>
                <Image src={img3} alt="" />
              </div>
              <div className={styles.image}>
                <Image src={img4} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.sliders}>
            <Slider images={set1} slideCount={"auto"} />
          </div>
        </div>
      </div>
      <div className={styles.clients}>
        <div className={`${styles.flex} ${styles.container}`}>
          <Swiper
            // install Swiper modules
            loop={true}
            modules={[Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={4200}
          >
            {set2.map((ele, ind) => (
              <SwiperSlide key={ind}>
                <div className={styles.image}>
                  <Image src={ele.img}></Image>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.container}>
          <h2 className={styles.title}>Our Products</h2>
          <div className={styles.grid}>
            {products.map((ele, ind) => (
              <div
                key={ind}
                className={styles.card}
                style={{ backgroundColor: `${ele.color}` }}
              >
                <Link href={ele.url}>{ele.product}</Link>
                <div className={styles.blob}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.container}>
          <h1 className={styles.title}>Testimonials</h1>
          <div className={styles.content}>
            <p className={styles.text}>
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo in
              maxime officiis corrupti."
            </p>
            <div className={styles.credit}>
              <div className={styles.avatar}></div>
              <p className={styles.name}>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
