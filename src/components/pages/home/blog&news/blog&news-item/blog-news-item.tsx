import React from "react";
import "./blog-news-item.scss";
// Types
import { BlogPostItemType } from "../../../../../types/common";
// Utils
import { cutTextContent, formatDate } from "../../../../../utils";
// Components
// @ts-ignore
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../../reusable-components/field-skeleton";

type BlogPostItemTypeProps = {
  idx?: number;
  post: BlogPostItemType;
};

const BlogNewsItem = ({ post, idx }: BlogPostItemTypeProps) => {
  const dayNum: string = formatDate(post?.date, {
    day: "numeric",
  });

  const res = (
    <div className="col col-12 blogNewsItem" data-test="blogNewsItem">
      <div className="row center">
        <div className="col col-5 col-lg-6 col-md-12">
          <div className="blogNewsItem__info">
            <div className="blogNewsItem__date">
              <div
                className="blogNewsItem__dateDay"
                data-test="blogNewsItem__dateDay"
              >
                {dayNum ? (
                  +dayNum < 10 ? (
                    "0" + dayNum
                  ) : (
                    dayNum
                  )
                ) : (
                  <FieldSkeleton
                    styles={{
                      width: "120px",
                      height: "180px",
                    }}
                  />
                )}
              </div>
              <div className="blogNewsItem__dateMonth">
                {formatDate(post?.date, {
                  month: "short",
                })}
              </div>
            </div>
            <div className="blogNewsItem__details">
              {post?.authorFullName ? (
                <div className="blogNewsItem__author">
                  <svg width="16" height="16">
                    <use xlinkHref="#user-icon-home" />
                  </svg>
                  <span className="textOverflow">{`${post.authorFullName}`}</span>
                </div>
              ) : (
                <FieldSkeleton
                  styles={{
                    width: "50%",
                    padding: "16px 0",
                    marginBottom: "16px",
                  }}
                />
              )}
              <Link
                to={`/blog/${post?.id}`}
                className="blogNewsItem__title textOverflow"
              >
                {post?.title ? (
                  post.title
                ) : (
                  <FieldSkeleton
                    styles={{
                      width: "100%",
                      height: "30px",
                    }}
                  />
                )}
              </Link>
              {post?.content ? (
                <p className="default-text" data-test="blogNewsItemTextContent">
                  {post.content.length > 140
                    ? cutTextContent(post.content, 140)
                    : post.content}
                </p>
              ) : (
                <FieldSkeleton
                  styles={{
                    width: "100%",
                    height: "90px",
                    marginBottom: "10px",
                  }}
                />
              )}
              {post?.content ? (
                <div className="blogNewsItem__fullDate">
                  <svg width="16" height="16">
                    <use xlinkHref="#blog-news-clock" />
                  </svg>
                  <span>
                    {formatDate(post?.date, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              ) : (
                <FieldSkeleton
                  styles={{
                    width: "30%",
                    padding: "15px",
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col col-5  col-lg-6 col-md-12">
          <ImgSkeleton
            title={post?.title}
            src={post?.previewSrc}
            skeletonStyle={{ height: "250px" }}
            classes={["blogNewsItem__preview"]}
          />
        </div>
      </div>
    </div>
  );

  return post ? (
    <Fade left={idx === 0} right={idx !== 0} duration={2500}>
      {res}
    </Fade>
  ) : (
    res
  );
};

export default React.memo(BlogNewsItem);
