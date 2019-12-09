import React, {useEffect} from 'react';
import './blog-news-section.scss';
import {connect} from "react-redux";
// Actions
import {loadAllDataForBlogPosts} from "../../actions";
// Selectors
import {
    blogPostsLoadedSelector,
    usersLoadedSelector,
    getAllDataForBlogPosts
} from "../../selectors";
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import BlogNewsItem from "../blog&news-item";
import Spinner from "../spinner";

function BlogNewsSection(props) {
    let {
        isLoadedBLogPosts,
        isLoadedUsers,
        blogPosts,
        loadAllDataForBlogPosts
    } = props;
    let recentBlogPosts;

    useEffect(() => {
        if (!isLoadedBLogPosts && !isLoadedUsers) {
            loadAllDataForBlogPosts();
        }
    });

    if (isLoadedBLogPosts && isLoadedUsers) {
        recentBlogPosts = blogPosts.slice(0, 2).map((post, idx) => {
            return <BlogNewsItem key={post.id} imgLeft={idx % 2} post={post}/>
        })
    }

    return (
        <Section className="blog-news-section">
            <Container>
                <SectionTitle>Blog & News</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque
                    labore magni nobis omnis rerum, soluta? Delectus id impedit velit veniam vero voluptates.
                    Aliasamet doloribus fuga impedit modi quia
                </DefaultText>
                <div className="blog-news-list">
                    {recentBlogPosts ? recentBlogPosts : <Spinner/>}
                </div>
            </Container>
        </Section>
    );
}

export default connect((state) => {
    return {
        isLoadedBLogPosts: blogPostsLoadedSelector(state),
        isLoadedUsers: usersLoadedSelector(state),
        blogPosts: getAllDataForBlogPosts(state)
    }
}, {loadAllDataForBlogPosts})(BlogNewsSection);
