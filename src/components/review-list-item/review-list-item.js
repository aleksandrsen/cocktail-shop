import React from 'react';
import './review-list-item.scss';
import formatDate from "../../functions/format-date";
import like from "../../img/icons/like.svg";
import dislike from "../../img/icons/dislike.svg";

// Components
function ReviewListItem(props) {
    let {text, date, likes, dislikes, author} = props.review;
    let {name, surname} = author;
    let reviewDate = formatDate(date, {year: "numeric", month: "long", day: "numeric"});

    return (
        <div className="reviews-list-item">
            <div className="review-header">
                <div className="review-author">
                    {name + " " + surname}
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
                    <span className="rating">{!likes ? '' : likes}</span>
                </div>
                <div className="dislike">
                    <img src={dislike} alt="dislike"/>
                    <span className="rating">{!dislikes ? '' : dislikes}</span>
                </div>
            </div>
        </div>
    );
}

export default ReviewListItem;
