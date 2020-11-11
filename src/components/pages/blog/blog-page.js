import React from "react";
// Components
import Aside from "../../aside";
import BlogPostsList from "./blog-posts-list";

const BlogPage = (props) => (
  <section className="default-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-5">
          <BlogPostsList />
        </div>
        <div className="col col-2">
          {/*<Aside />*/}
        </div>
      </div>
    </div>
  </section>
);

export default BlogPage;
