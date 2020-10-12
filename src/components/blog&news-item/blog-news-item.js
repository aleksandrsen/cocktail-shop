import React from 'react';
import './blog-news-item.scss';
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";
import {Link} from "react-router-dom";
// Components
import DefaultText from "../common-components/default-text";
import {Col, Row} from "antd";

function BlogNewsItem(props) {
    const maxTitleLength = 37;
    const maxTextLength = 127;

    let {imgLeft} = props;
    let {title, text, img, date, id} = props.post;
    let {name, surname} = props.post.author;

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
        <Col span={24} className="blog-news-item">
            <Row type="flex" gutter={30} justify="space-between" align="middle">
                <Col span={12} order={imgLeft ? 1 : 0}>
                    <div className="blog-news-item-info">
                        <div className="blog-news-item-date">
                            <div className="main-date">{dayNumber < 10 ? "0" + dayNumber : dayNumber}</div>
                            <div className="month">{shortMonth}</div>
                        </div>
                        <div className="blog-news-item-details">
                            <div className="theme">
                                <i className="material-icons">person</i>
                                <span>{name + " " + surname}</span>
                            </div>
                            <Link to={`/blog/${id}`} className="title">
                                {blogNewsItemTitle}
                            </Link>
                            <DefaultText>
                                {blogNewsItemText}
                            </DefaultText>
                            <div className="date">
                                <i className="material-icons">query_builder</i>
                                <span>{blogDate}</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="blog-news-item-photo">
                        <img src={img} alt={title}/>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default BlogNewsItem;