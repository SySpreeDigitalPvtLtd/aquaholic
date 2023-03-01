import Head from "next/head";
import styles from "../styles/About.module.scss";
import Image from "next/image";
import aboutOne from "../public/about-1.webp";
import aboutTwo from "../public/about-2.webp";
const about = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      {/* <h1>About Page</h1> */}
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <div>
                <p className={styles.subtitle}>About</p>
                <h2 className={styles.title}>A little bit about us</h2>
              </div>

              <p className={styles.text}>
                PraYoSa Buildmat Pvt Ltd was established in the year 1997 as a
                manufacturer and supplier of building blocks. We are a group of
                civil engineers, who run 2 state of the art block manufacturing
                plants with a production capacity of about 20000 blocks per day.
                These are fully automated American Block plants from the world
                leaders in block technology- Columbia Machines, U.S.A.
              </p>
            </div>
            <div className={styles.image}>
              <Image src={aboutOne}></Image>
            </div>
          </div>
          <div>
            <p className={styles.text}>
              We manufacture blocks for all kinds of uses- panel walls in
              buildings, retaining walls for grade changes, retaining wall for
              water applications, compound walls, fences, hardscapes, patio
              walls and pavers.
            </p>
          </div>
          <div className={styles.grid}>
            <div>
              <h4 className={styles.titleFour}>
                Innovative Products to Indian Markets
              </h4>
              <p className={styles.text}>
                We have always brought new and innovative products to the Indian
                market. Our latest products are from the mortarless technology
                which has begun to take the construction industry by storm world
                over.
              </p>
            </div>
            <div className={styles.iframe}>
              <iframe
                allowFullScreen
                src="https://www.youtube.com/embed/_EYoYug3fUk"
                title="PYS Documantary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <h3 className={styles.titleTwo}>Allan Block USA !</h3>
          <div className={styles.grid}>
            <div className={styles.image}>
              <Image src={aboutTwo}></Image>
            </div>
            <div>
              <h4 className={styles.titleFour}>Allan Block USA !</h4>
              <p className={styles.text}>
                AB Fence System Blocks can be used to build free standing
                precast compound walls of up to 30 feet height and can even
                sustain earth fills up to 6 feet. The perfect solution based on
                tested design, hand crafted aesthetics and phenomenal speed of
                construction.
              </p>
            </div>
            <div>
              <h4 className={styles.titleFour}>
                AB Collection or AB Fieldstone
              </h4>
              <p className={styles.text}>
                The unique AB Collection or AB Fieldstone is a wall system which
                can give gravity retaining walls up to 8 feet of fills. All this
                while having an appeal of natural stone! Taller walls can be
                built by using geogrids or reinforcement steel. Engineering
                Wonder, easy to build and elegance par excellence.
              </p>
            </div>
            <div className={styles.image}>
              <Image src={aboutTwo}></Image>
            </div>
            <div className={styles.image}>
              <Image src={aboutTwo}></Image>
            </div>
            <div>
              <h4 className={styles.titleFour}>AB Courtyard Collection</h4>
              <p className={styles.text}>
                The AB Courtyard Collection is a durable, versatile and a cost
                effective way to bring value into your landscaping. Create free
                standing walls or outdoor spaces that are comfortable yet
                elegant for entertaining. Incorporate custom gates, counter
                tops, pergolas, patios etc as beautiful accents for even more
                style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
