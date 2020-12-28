import React from "react";
// Components
import BlogPostDetails from "./details";
import SidePanel from "../../side-panel";
// Utils
import { match } from "react-router-dom";

interface MatchTypeParams {
  id: string;
}

type BlogDetailsPropsType = {
  match: match<MatchTypeParams>;
};

const BlogDetails = ({
  match: {
    params: { id },
  },
}: BlogDetailsPropsType) => (
  <section className="default-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-5">
          <BlogPostDetails blogPostId={+id} />
        </div>
        <div className="col col-3">
          <SidePanel />
        </div>
      </div>
    </div>
  </section>
);

export default BlogDetails;
