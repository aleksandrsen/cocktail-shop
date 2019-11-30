import React from 'react';
import './aside-posts-container.scss';
import sortedBlogPosts from "../../data/blog-posts";
// Components
import AsidePostItem from "../aside-post-item";

function AsidePostsContainer(props) {
    let asideBlogPostsArr = sortedBlogPosts.slice(0, 4);

    return (
        <div className="aside-posts-container">
            {
                asideBlogPostsArr.map(postItem => {
                    return <AsidePostItem key={postItem.id} postItem={postItem}/>
                })
            }
        </div>
    );
}

export default AsidePostsContainer;
