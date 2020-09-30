import React, {useEffect} from 'react';
import './blog-details.scss';
import {connect} from "react-redux";
import clockIcon from "../../../../img/icons/clock-regular.svg";
import userIcon from "../../../../img/icons/user-icon.svg";
import formatDate from "../../../../functions/format-date";
// Actions
import {loadBlogPostById} from "../../../../actions";
// Components
import DefaultText from "../../../common-components/default-text";
import ReviewsList from "../reviews-list";
import LeaveReviews from "../leaave-reviews";
import Share from "../../../share/share";
import Spinner from "../../../spinner";
// Selectors
import {
    blogPostDetailsSelector,
    blogPostItemIdSelector,
    blogPostItemLoadedSelector,
    blogPostItemLoadingSelector,
    usersLoadedSelector
} from "../../../../selectors";

const BlogDetails = ({
     blogPostId,
     blogPost,
     blogPostItemLoading,
     blogPostItemLoaded,
     loadBlogPostById,
     usersLoaded,
     oldBlogPostId
 }) => {

    useEffect(() => {
        if (!blogPostItemLoading && !blogPostItemLoaded || (blogPostId !== oldBlogPostId)) {
            loadBlogPostById(blogPostId)
        }
    });

    if (!blogPostItemLoading && blogPostItemLoaded && usersLoaded) {
        let {bigImg, title, text, author, date} = blogPost;
        let {name, surname} = author;
        let blogPostDate = formatDate(date, {year: "numeric", month: "short", day: "numeric"});

        return (
            <div className="blog-details">
                <img className="blog-main-img" src={bigImg} alt=""/>
                <h2 className="event-details-title">{title}</h2>
                <div className="event-details-info">
                    <div className="author">
                        <img src={userIcon} alt="user-icon"/>
                        {name + " " + surname}
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
                <LeaveReviews blogPostId={blogPostId}/>
                <ReviewsList id={blogPostId}/>
            </div>
        );
    }
    return <Spinner/>
};

export default connect((state) => ({
    blogPostItemLoading: blogPostItemLoadingSelector(state),
    blogPostItemLoaded: blogPostItemLoadedSelector(state),
    usersLoaded: usersLoadedSelector(state),
    oldBlogPostId: blogPostItemIdSelector(state),
    blogPost: blogPostDetailsSelector(state)
}), {loadBlogPostById})(BlogDetails);