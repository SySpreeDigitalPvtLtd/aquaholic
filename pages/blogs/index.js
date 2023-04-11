import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import BlogHero from "../../components/Blogs/BlogHero";
import BlogList from "../../components/Blogs/BlogList";
import blogImg from "../../public/Images/blogs/blog-test.jpg";
const BlogsListing = ({ post }) => {
  const blogContent = [
    {
      title: "5 Strategies to Boost Your Social Media Marketing in UAE",
      meta: "ipsum",
      feat: blogImg,
      date: "29th March, 2023",
      link: "lorem",
    },
    {
      title: "Lorem ipsum dolor sit amit",
      meta: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      title: "Lorem ipsum dolor sit amit",
      meta: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      title: "Lorem ipsum dolor sit amit",
      meta: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      title: "Lorem ipsum dolor sit amit",
      meta: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
  ];

  return (
    <>
      <BlogHero />
      <BlogList blogList={post} />
    </>
  );
};

export async function getStaticProps() {
  // get blog files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // get slug and front matter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      post: posts,
    },
  };
}
export default BlogsListing;
