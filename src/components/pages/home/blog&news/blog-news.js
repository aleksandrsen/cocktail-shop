import React, { useEffect } from "react";
import "./blog-news.scss";
import BlogNewsItem from "./blog&news-item";
import img from "../../../../src_/img/upcoming-event-img.jpg";

const BlogNews = ({ loadAllDataForBlogPosts }) => {
  const data = [
    {
      title: "Every evening beer parties from",
      img: img,
      date: "2021-08-30T20:00",
      id: 1,
      author: { name: "Ivan", surname: "Ivanov" },
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae, sunt. Aliquid animi aspernatur blanditiis eligendi ex, fuga in iusto optio possimus repellat sequi temporibus ullam ut? Dolore, fuga, tempora.",
    },
    {
      title: "Every evening beer parties from",
      img: img,
      date: "2021-08-30T20:00",
      id: 2,
      author: { name: "Ivan", surname: "Ivanov" },
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita recusandae, sunt. Aliquid animi aspernatur blanditiis eligendi ex, fuga in iusto optio possimus repellat sequi temporibus ullam ut? Dolore, fuga, tempora.",
    },
  ];

  return (
    <div className="default-section blogNewsHome">
      <div className="container">
        <div className="section-title">Blog & News</div>
        <p className="default-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
          labore magni nobis omnis rerum, soluta? Delectus id impedit velit
          veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
        </p>
        <div className="row center">
          {data.map((post, idx) => (
            <BlogNewsItem key={post.id} imgLeft={idx % 2} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
