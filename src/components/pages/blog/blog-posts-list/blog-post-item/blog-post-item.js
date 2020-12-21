import React from "react";
import "./blog-post-item.scss";
// Utils
import { useRouteMatch } from "react-router-dom";
import { Icons } from "../../../../../src_/icons";
import { cutTextContent, formatDate } from "../../../../../utils";
// Components
import { Link } from "react-router-dom";
import SocialNetworks from "../../../../social-networks";
import ImgSkeleton from "../../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../../reusable-components/field-skeleton";

const BlogPostItem = ({ post }) => {
  const match = useRouteMatch();

  return (
    <div className="blogPostItem">
      <h3 className="blogPostItem__title">
        {post ? post.title : <FieldSkeleton styles={{ padding: "16px" }} />}
      </h3>
      <div className="blogPostItem__date">
        {post ? (
          formatDate(post.date, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        ) : (
          <FieldSkeleton
            styles={{ padding: "12px 64px", display: "inline-block" }}
          />
        )}
      </div>
      <ImgSkeleton
        title={post?.title}
        src={post?.previewSrc}
        skeletonStyle={{
          width: "100%",
          minHeight: "240px",
          borderRadius: "5px",
          marginBottom: "16px",
        }}
        classes={["blogPostItem__img"]}
      />
      <p className="default-text">
        {post ? (
          post.content.length > 250 ? (
            cutTextContent(post.content, 250)
          ) : (
            post.content
          )
        ) : (
          <FieldSkeleton styles={{ padding: "32px" }} />
        )}
      </p>
      <div className="blogPostItem__controls">
        {post ? (
          <>
            <Link to={`${match.url}${post?.id}`}>Read more</Link>
            <span className="blogPostItem__reviewsWrap">
              {Icons.reviews}
              <span className="blogPostItem__reviews">
                {post?.reviews.length}
              </span>
            </span>
            <SocialNetworks exclude="Youtube" />
          </>
        ) : (
          <FieldSkeleton styles={{ padding: "10px", flexGrow: "1" }} />
        )}
      </div>
    </div>
  );
};

export default BlogPostItem;
