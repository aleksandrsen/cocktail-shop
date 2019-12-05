import React from 'react';
import './blog-posts-list.scss';
import sortedBlogPosts from "../../data/blog-posts";
import {withRouter} from "react-router-dom"
import "./blog-posts-list.scss"
// Components
import BlogPostItem from "../blog-post-item";
import DefaultButton from "../common-components/default-button";

function BlogPostsList(props) {
    let {history} = props;
    let blogPosts = sortedBlogPosts.slice(0, 4);

    return (
        <div className="blog-posts-list">
            {
                blogPosts.map(item => {
                    return <BlogPostItem
                        key={item.id}
                        post={item}
                        readMore={() => {
                            history.push(item.id)
                        }}/>
                })
            }
            <DefaultButton>More posts</DefaultButton>
        </div>
    );
}

export default withRouter(BlogPostsList);