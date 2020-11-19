import React from "react";
// Components
import BlogPostDetails from "./details";
import SidePanel from "../../side-panel";

const BlogDetails = ({ match: { params: id } }) => (
  <section className="default-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-5">
          <BlogPostDetails blogPostId={id} />{" "}
        </div>
        <div className="col col-3">
          <SidePanel />
        </div>
      </div>
    </div>
  </section>
);

export default BlogDetails;
