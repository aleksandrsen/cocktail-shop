import React from 'react';
import './blog-news-section.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import BlogNewsItem from "../blog&news-item";

function BlogNewsSection(props) {

    return (
        <Section className="blog-news-section">
            <Container>
                <SectionTitle>Blog & News</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
                    labore magni nobis omnis rerum, soluta? Delectus id impedit velit veniam vero voluptates. Aliasamet doloribus fuga impedit modi quia
                </DefaultText>
                <div className="blog-news-container">
                    <BlogNewsItem/>
                    <BlogNewsItem imgLeft = {true}/>
                </div>
            </Container>
        </Section>
    );
}

export default BlogNewsSection;
