import React from 'react';
import './aside-posts-list.scss';
import sortedBlogPosts from "../../data/events";
// Components
import AsidePostItem from "../aside-post-item";

function AsidePostsList(props) {
    let asideBlogPostsArr = sortedBlogPosts.slice(0, 4);

    return (
        <div className="aside-posts-list">
            {
                asideBlogPostsArr.map(postItem => {
                    return <AsidePostItem key={postItem.id} postItem={postItem}/>
                })
            }
        </div>
    );
}

export default AsidePostsList;