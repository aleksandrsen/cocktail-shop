import React from 'react';
import './reviews-list.scss';
import sortedBlogPosts from "../../data/blog-posts";
import ReviewListItem from "../review-list-item";
// Components

function ReviewsList(props) {
    let {postId} = props;
    let reviews = sortedBlogPosts.find(({id}) => postId).reviews;
    console.log(reviews);

    return (
        <div className="reviews-list">
            {
                reviews.map(review => {
                    return <ReviewListItem key={review.id} reviews={review}/>
                })
            }
        </div>
    );
}

export default ReviewsList;
