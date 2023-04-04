import React from "react";
import Blog from "../../components/Blogs/Blog";
import blogImg from "../../public/Images/blogs/blog-test.jpg";
const BlogItem = () => {
  const blogContent = [
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
    {
      title: "Lorem ipsum dolor sit amit",
      meta: "ipsum",
      feat: blogImg,
      link: "lorem",
    },
  ];
  return (
    <>
      <Blog blogList={blogContent} />
    </>
  );
};

export default BlogItem;
