import React from 'react';
import './blog-news-item.scss';
import blogPhoto from "./img/blog-photo.jpg"
// Components
import DefaultText from "../common-components/default-text";

function BlogNewsItem(props) {
    let {imgLeft} = props;

    let title = "Private parties from 20 to 50 guests";
    let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur dignissimos est expedita ratione repellendus";

    function cutTextContent(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength - 3) + "..."
        }
        return text;
    }

    return (
        <div className="blog-news-item">
            <div className="blog-news-item-info">
                <div className="blog-news-item-date">
                    <div className="main-date">16</div>
                    <div className="month">oct</div>
                </div>
                <div className="blog-news-item-details">
                    <div className="theme">
                        <i className="material-icons">person</i>
                        <span>Ourathemes</span>
                    </div>
                    <div className="title">
                        {cutTextContent(title, 39)}
                    </div>
                    <DefaultText>
                        {cutTextContent(text, 127)}
                    </DefaultText>
                    <div className="date">
                        <i className="material-icons">query_builder</i>
                        <span>16 oct 2020</span>
                    </div>
                </div>
            </div>
            <div className={`blog-news-item-photo ${imgLeft ? "img-left" : ""}`}>
                <img src={blogPhoto} alt=""/>
            </div>
        </div>
    );
}

export default BlogNewsItem;
