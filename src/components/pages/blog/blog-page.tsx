import React from "react";
// Components
import SidePanel from "../../side-panel";
import BlogPostsList from "./blog-posts-list";

const BlogPage = () => (
  <section className="default-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-5">
          <BlogPostsList />
        </div>
        <div className="col col-3">
          <SidePanel />
        </div>
      </div>
    </div>
  </section>
);

export default BlogPage;
