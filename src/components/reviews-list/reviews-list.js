import React, {useEffect, useState} from 'react';
import './reviews-list.scss';
import {connect} from "react-redux";
// Actions
import {loadReviews} from "../../actions";
// Components
import ReviewListItem from "../review-list-item";
import DefaultButton from "../common-components/default-button";
import Spinner from "../spinner";
// Selectors
import {
    blogPostsReviewsLoadedSelector,
    blogPostsReviewsLoadingSelector,
    getAllReviewsForBlogPost
} from "../../selectors";

function ReviewsList(props) {
    let {postId, isLoading, isLoaded, reviews, loadReviews} = props;

    const [isShort, setShort] = useState(true);

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadReviews();
        }
    });

    if (!isLoading && isLoaded) {

        const shortReviewsListLength = 3;

        const shortReviewsList = reviews.slice(0, shortReviewsListLength).map(review => {
            return <ReviewListItem key={review.id} review={review}/>
        });

        const allReviewsList = reviews.map(review => {
            return <ReviewListItem key={review.id} review={review}/>
        });

        const showAllCommentsBtn = !isShort || <DefaultButton onClick={() =>  setShort(false)}>Show all reviews</DefaultButton>;

        return (
            <div className="reviews-list">
                {isShort ? shortReviewsList : allReviewsList}
                {reviews.length < shortReviewsListLength + 1 ? '' : showAllCommentsBtn}
            </div>
        );
    }

    return <Spinner/>
}

export default connect((state, ownProps) => {
    return {
        isLoading: blogPostsReviewsLoadingSelector(state),
        isLoaded: blogPostsReviewsLoadedSelector(state),
        reviews: getAllReviewsForBlogPost(state, ownProps)
    }
}, {loadReviews})(ReviewsList);




// import React, {useEffect, useState} from 'react';
// import './reviews-list.scss';
// import {connect} from "react-redux";
// // Actions
// import {loadReviews} from "../../actions";
// // Components
// import ReviewListItem from "../review-list-item";
// import DefaultButton from "../common-components/default-button";
// import Spinner from "../spinner";
// // Selectors
// import {
//     blogPostsReviewsLoadedSelector,
//     blogPostsReviewsLoadingSelector,
//     getAllReviewsForBlogPost
// } from "../../selectors";
//
// function ReviewsList(props) {
//     let {postId, isLoading, isLoaded, reviews, loadReviews} = props;
//
//     const [isShort, setShort] = useState(true);
//
//     useEffect(() => {
//         if (!isLoading && !isLoaded) {
//             loadReviews();
//         }
//     });
//
//     if (!isLoading && isLoaded) {
//
//         const shortReviewsListLength = 3;
//
//         const shortReviewsList = reviews.slice(0, shortReviewsListLength).map(review => {
//             return <ReviewListItem key={review.id} review={review}/>
//         });
//
//         const allReviewsList = reviews.map(review => {
//             return <ReviewListItem key={review.id} review={review}/>
//         });
//
//         const showAllCommentsBtn = !isShort || <DefaultButton onClick={() =>  setShort(false)}>Show all reviews</DefaultButton>;
//
//         return (
//             <div className="reviews-list">
//                 {isShort ? shortReviewsList : allReviewsList}
//                 {reviews.length < shortReviewsListLength + 1 ? '' : showAllCommentsBtn}
//             </div>
//         );
//     }
//
//     return <Spinner/>
// }
//
// export default connect((state, ownProps) => {
//     return {
//         isLoading: blogPostsReviewsLoadingSelector(state),
//         isLoaded: blogPostsReviewsLoadedSelector(state),
//         reviews: getAllReviewsForBlogPost(state, ownProps)
//     }
// }, {loadReviews})(ReviewsList);