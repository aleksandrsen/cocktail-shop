import React from 'react';
import './blog-posts-container.scss';
import sortedBlogPosts from "../../data/blog-posts";
import {withRouter} from "react-router-dom"
// Components
import BlogPostItem from "../blog-post-item";
import DefaultButton from "../common-components/default-button";

function BlogPostsContainer(props) {
    let {history} = props;
    let blogPosts = sortedBlogPosts.slice(0, 4);

    return (
        <div className="blog-posts-container">
            {
                blogPosts.map((item, idx) => {
                    return <BlogPostItem
                        key={item.id}
                        post={item}
                        readMore={() => {history.push(item.id)}}/>
                })
            }
            <DefaultButton>More posts</DefaultButton>
        </div>
    );
}
export default withRouter(BlogPostsContainer);