import React from "react";
import Section from "../../components/Common/Section";
import styles from "../../styles/ServicePage.module.scss";

const ServicePage = ({ data }) => {
  return (
    <Section className={`${styles.section} ${styles.serviceSection}`}>
      <div className={`${styles.container}`}>
        <p className={`${styles.meta}`}>Services</p>
        <h1 className={`${styles.title}`}>Service title</h1>
        <p className={`${styles.text}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est earum
          enim nihil iusto impedit tempora pariatur, rem commodi corrupti sit
          veritatis? Voluptatibus blanditiis commodi, ab dolorum animi iusto.
          Magni, fugiat?
        </p>
      </div>
    </Section>
  );
};

// export const getStaticPaths = async () => {
//   const data = [
//     {
//       title: "Design Services",
//       content: "Our thinking starts and ends with the brand and the audience.",
//       //   img: serviceDesign,
//       link: "design",
//       id: 1,
//     },
//     {
//       title: "Videography Services",
//       content:
//         "Our team of dedicated event videographers know how to approach each project of every scale, detail and genre, from single-camera studio interviews to multi-camera events video coverage and branding video productions.",
//       //   img: serviceVideo,
//       link: "videography",
//       id: 2,
//     },
//     {
//       title: "Photography Services",
//       content:
//         "We believe that every moment, big or small, is infinitely precious and deserves to be captured.",
//       //   img: servicePhotography,
//       link: "photography",
//       id: 3,
//     },
//     {
//       title: "Interaction Services",
//       content:
//         "A good brand needs a visually appealing website to make an impactful presence on the digital platform.",
//       //   img: serviceInteractive,
//       link: "interaction",
//       id: 4,
//     },
//     {
//       title: "Social Media Services",
//       content:
//         "Social media is a major catalyst that can boost up your brand's sale.",
//       //   img: serviceSocial,
//       link: "social-media",
//       id: 5,
//     },
//     {
//       title: "Branding Services",
//       content: "Distinguish your brand from the competition.",
//       //   img: serviceBrand,
//       link: "branding",
//       id: 6,
//     },
//   ];

//   const paths = data.map((links) => {
//     return {
//       params: links.id.toString(),
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const link = context.params.link;
//   console.log(link, "link for the service page");
//   const data = [
//     {
//       title: "Design Services",
//       content: "Our thinking starts and ends with the brand and the audience.",
//       //   img: serviceDesign,
//       link: "design",
//     },
//     {
//       title: "Videography Services",
//       content:
//         "Our team of dedicated event videographers know how to approach each project of every scale, detail and genre, from single-camera studio interviews to multi-camera events video coverage and branding video productions.",
//       //   img: serviceVideo,
//       link: "videography",
//     },
//     {
//       title: "Photography Services",
//       content:
//         "We believe that every moment, big or small, is infinitely precious and deserves to be captured.",
//       //   img: servicePhotography,
//       link: "photography",
//     },
//     {
//       title: "Interaction Services",
//       content:
//         "A good brand needs a visually appealing website to make an impactful presence on the digital platform.",
//       //   img: serviceInteractive,
//       link: "interaction",
//     },
//     {
//       title: "Social Media Services",
//       content:
//         "Social media is a major catalyst that can boost up your brand's sale.",
//       //   img: serviceSocial,
//       link: "social-media",
//     },
//     {
//       title: "Branding Services",
//       content: "Distinguish your brand from the competition.",
//       //   img: serviceBrand,
//       link: "branding",
//     },
//   ];

//   return {
//     props: { data: data },
//   };
// };
export default ServicePage;
