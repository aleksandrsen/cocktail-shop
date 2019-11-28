import React from 'react';
import './blog-posts-container.scss';
import sortedBlogPosts from "../../data/blog-posts";
// Components
import BlogPostItem from "../blog-post-item";
import DefaultButton from "../common-components/default-button";

function BlogPostsContainer(props) {

    return (
        <div className="blog-posts-container">
            {
                sortedBlogPosts.map((item, idx) => {
                    if (idx >= 3) return "";
                    return <BlogPostItem key={item.id} post={item}/>
                })
            }
            <DefaultButton>More posts</DefaultButton>
        </div>
    );
}
export default BlogPostsContainer;