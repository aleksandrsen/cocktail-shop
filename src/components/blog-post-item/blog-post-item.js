import React from 'react';
import './blog-post-item.scss';
import commentsIcon from "../../data/img/comments.svg"
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";
import {Link} from "react-router-dom";
// Components
import DefaultText from "../common-components/default-text";
import SocialNetworks from "../social-networks";

function BlogPostItem(props) {
    const maxTitleLength = 39;
    const maxTextLength = 248;

    let {title, text, img, date, reviews} = props.post;

    let blogPostTitle = title.length > maxTitleLength ? cutTextContent(title, maxTitleLength) : title;
    let blogPostText = text.length > maxTextLength ? cutTextContent(text, maxTextLength) : text;
    let blogPostDate = formatDate(date, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="blog-post-item">
            <h3 className="blog-post-title">{blogPostTitle}</h3>
            <div className="blog-post-date">{blogPostDate}</div>
            <img className="blog-post-img" src={img} alt=""/>
            <DefaultText>
                {blogPostText}
            </DefaultText>
            <div className="blog-post-controls">
                <Link to={`/blog/details`}>
                {/*<a className="read-more" href="/blog/blogItem">Read more</a>*/}
                Read more
                </Link>
                <span className="comments">
                    <img src={commentsIcon} alt=""/>
                    <span className="reviews-count">{reviews.length}</span>
                </span>
                <SocialNetworks exclude="youtube"/>
            </div>
        </div>
    );
}

export default BlogPostItem;