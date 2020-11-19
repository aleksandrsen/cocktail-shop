import React from "react";
import "./blog-post-item.scss";
// Utils
import { Icons } from "../../../../../src_/icons";
import { useRouteMatch } from "react-router-dom";
import { cutTextContent, formatDate } from "../../../../../utils";
// Components
import { Link } from "react-router-dom";
import SocialNetworks from "../../../../social-networks";

const BlogPostItem = ({
  post: { id, title, previewSrc, date, content, reviews },
}) => {
  const match = useRouteMatch();

  return (
    <div className="blogPostItem">
      <h3 className="blogPostItem__title">{title}</h3>
      <div className="blogPostItem__date">
        {formatDate(date, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <img className="blogPostItem__img" src={previewSrc} alt={title} />
      <p className="default-text">
        {content.length > 250 ? cutTextContent(content, 250) : content}
      </p>
      <div className="blogPostItem__controls">
        <Link to={`${match.url}${id}`}>Read more</Link>
        <span className="blogPostItem__reviewsWrap">
          {Icons.reviews}
          <span className="blogPostItem__reviews">{reviews.length}</span>
        </span>
        <SocialNetworks exclude="Youtube" />
      </div>
    </div>
  );
};

export default BlogPostItem;
