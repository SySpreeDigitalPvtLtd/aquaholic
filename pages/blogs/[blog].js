import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import BlogPost from "../../components/Blogs/BlogPost";
import blogImg from "../../public/Images/blogs/blog-test.jpg";
const BlogItem = ({ frontMatter, blog, content }) => {
  const blogContent = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amit",
      metaTitle: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amit",
      metaTitle: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      id: "3",
      title: "Lorem ipsum dolor sit amit",
      metaTitle: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amit",
      metaTitle: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
    {
      id: "5",
      title: "Lorem ipsum dolor sit amit",
      date: "",
      author: "",
      content: [
        {
          paragraph: "",
          image: "",
        },
      ],
      metaTitle: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
  ];
  return (
    <>
      <BlogPost frontMatter={frontMatter} blog={blog} content={content} />
      {/* <div>{title}</div> */}
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      blog: filename.replace(".md", ""),
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { blog } }) {
  console.log(blog);
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", blog + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      content,
      blog,
    },
  };
}
export default BlogItem;
