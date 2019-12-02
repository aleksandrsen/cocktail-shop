import React from 'react';
import './blog-news-item.scss';
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";
// Components
import DefaultText from "../common-components/default-text";

function BlogNewsItem(props) {
    const maxTitleLength = 39;
    const maxTextLength = 127;

    let {imgLeft} = props;
    let {title, text, img, date, author} = props.post;

    let blogNewsItemTitle = title.length > maxTitleLength ? cutTextContent(title, maxTitleLength) : title;
    let blogNewsItemText = text.length > maxTextLength ? cutTextContent(text, maxTextLength) : text;
    let blogDate = formatDate(date, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    let shortMonth = formatDate(date, {
        month: "short"
    });
    let dayNumber = formatDate(date, {
        day: "numeric"
    });

    return (
        <div className="blog-news-item">
            <div className="blog-news-item-info">
                <div className="blog-news-item-date">
                    <div className="main-date">{dayNumber < 10 ? "0" + dayNumber : dayNumber}</div>
                    <div className="month">{shortMonth}</div>
                </div>
                <div className="blog-news-item-details">
                    <div className="theme">
                        <i className="material-icons">person</i>
                        <span>{author}</span>
                    </div>
                    <div className="title">
                        {blogNewsItemTitle}
                    </div>
                    <DefaultText>
                        {blogNewsItemText}
                    </DefaultText>
                    <div className="date">
                        <i className="material-icons">query_builder</i>
                        <span>{blogDate}</span>
                    </div>
                </div>
            </div>
            <div className={`blog-news-item-photo ${imgLeft ? "img-left" : ""}`}>
                <img src={img} alt={title}/>
            </div>
        </div>
    );
}

export default BlogNewsItem;