import React from 'react';
import './review-list-item.scss';
import formatDate from "../../functions/format-date";
import like from "../../data/img/like.svg";
import dislike from "../../data/img/dislike.svg";
// Components

function ReviewListItem(props) {
    let {text, userName, date, likes, dislikes} = props.reviews;
    let reviewDate = formatDate(date, {year: "numeric", month: "long", day: "numeric"});

    return (
        <div className="reviews-list-item">
            <div className="review-header">
                <div className="review-author">
                    {userName}
                </div>
                <div className="review-date">
                    {reviewDate}
                </div>
            </div>
            <div className="review-text">
                {text}
            </div>
            <div className="review-footer">
                <div className="like">
                    <img src={like} alt="like"/>
                    <span className="rating">{likes}</span>
                </div>
                <div className="dislike">
                    <img src={dislike} alt="dislike"/>
                    <span className="rating">{dislikes}</span>
                </div>


            </div>

        </div>
    );
}

export default ReviewListItem;
