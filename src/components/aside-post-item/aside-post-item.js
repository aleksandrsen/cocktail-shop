import React from 'react';
import './aside-post-item.scss';
import asideCalendarIcon from "../../data/img/aside-calendar-icon.svg";
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";

function AsidePostItem(props) {
    let {asideImg, title, date} = props.postItem;
    const maxTitleLength = 45;
    let recentPostTitle = cutTextContent(title, maxTitleLength);
    let recentPostDate = formatDate(date, {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    return (
        <div className="aside-post-item">
            <img src={asideImg} className="post-img" alt="post-img"/>
            <div className="post-info">
                <div className="post-title">
                    {recentPostTitle}
                </div>
                <div className="post-date">
                    <img src={asideCalendarIcon} alt="calendar-icon"/>
                    <span>{recentPostDate}</span>
                </div>
            </div>
        </div>
    )
}

export default AsidePostItem;