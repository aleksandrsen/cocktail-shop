import React from 'react';
import './blog-details.scss';
import sortedBlogPosts from "../../data/blog-posts";
import clockIcon from "../../data/img/clock-regular.svg";
import userIcon from "../../data/img/user-icon.svg";
import formatDate from "../../functions/format-date";

// Components
import DefaultText from "../common-components/default-text";
import ContactForm from "../contact-form";
import SocialNetworks from "../social-networks";
import ReviewsList from "../reviews-list";

function BlogDetails(props) {
    let {blogPostId} = props;
    let blog = sortedBlogPosts.find(blog => blog.id === blogPostId);
    let {bigImg, title, text, author, date} = blog;
    let blogPostDate = formatDate(date, {year: "numeric", month: "short", day: "numeric"});

    return (
        <div className="blog-details">
            <img className="blog-main-img" src={bigImg} alt=""/>
            <h2 className="event-details-title">{title}</h2>
            <div className="event-details-info">
                <div className="author">
                    <img src={userIcon} alt="user-icon"/>
                    {author}
                </div>
                <div className="date">
                    <img src={clockIcon} alt="user-icon"/>
                    {blogPostDate}
                </div>
            </div>
            <DefaultText>
                {text}
            </DefaultText>
            <div className="share">
                <span className="share-title">Share:</span>
                <SocialNetworks/>
            </div>
            <ReviewsList postId={blogPostId}/>
            <h3 className="leave-comments">Leave your comments</h3>
            <ContactForm btnPos="right" btnText="Submit comment"/>
        </div>
    );
}

export default BlogDetails;