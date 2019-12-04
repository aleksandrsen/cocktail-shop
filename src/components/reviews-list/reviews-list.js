import React, {useState} from 'react';
import './reviews-list.scss';
import sortedBlogPosts from "../../data/blog-posts";
// Components
import ReviewListItem from "../review-list-item";
import DefaultButton from "../common-components/default-button";

function ReviewsList(props) {
    let {postId} = props;
    let reviews = sortedBlogPosts.find(({id}) => postId).reviews;
    const [isShort, setShort] = useState(true);

    const shortReviewsList = reviews.slice(0, 3).map(review => {
        return <ReviewListItem key={review.id} reviews={review}/>
    });

    const allReviewsList = reviews.map(review => {
        return <ReviewListItem key={review.id} reviews={review}/>
    });

    const showAllCommentsBtn = !isShort || <DefaultButton onClick={() =>  setShort(false)}>Show all reviews</DefaultButton>;

    return (
        <div className="reviews-list">
            {isShort ? shortReviewsList : allReviewsList}
            {showAllCommentsBtn}
        </div>
    );
}

export default ReviewsList;
