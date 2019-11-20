import React from 'react';
import './blog-news.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";

function BlogNews(props) {

    return (
        <Section className="blog-news">
            <Container>
                <SectionTitle>Blog & News</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
                    labore magni nobis omnis rerum, soluta? Delectus id impedit velit veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
                </DefaultText>
                <div className="blog-news-container">
                    <div className="blog-news-item">
                        <div className="blog-news-item-date">
                            <div className="date">16</div>
                            <div className="month">oct</div>
                        </div>
                        <div className="blog-news-item-info">
                            <div className="theme">
                                <i className="material-icons">person</i>
                                <span>Ourathemes</span>
                            </div>
                            <div className="title">

                            </div>
                            <div className="text">

                            </div>
                            <div className="date">

                            </div>
                        </div>
                        <div className="blog-news-item-photo">

                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default BlogNews;
