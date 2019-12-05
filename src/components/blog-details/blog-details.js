import React from 'react';
import './blog-details.scss';
import sortedBlogPosts from "../../data/blog-posts";
import clockIcon from "../../data/img/clock-regular.svg";
import userIcon from "../../data/img/user-icon.svg";
import formatDate from "../../functions/format-date";

// Components
import DefaultText from "../common-components/default-text";
import SocialNetworks from "../social-networks";
import ReviewsList from "../reviews-list";
import LeaveComments from "../leaave-comments";
import Share from "../share/share";

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
            <Share/>
            <LeaveComments/>
            <ReviewsList postId={blogPostId}/>
        </div>
    );
}

export default BlogDetails;