import React from 'react';
import './aside-events-posts-container.scss';
// Components
import AsideSearchForm from "../aside-search-form";
import AsidePostsContainer from "../aside-posts-container";
import AsideEventsContainer from "../aside-events-container";

function AsideEventsPostsContainer(props) {

    return (
        <aside className="aside-events-posts-container">
            <div className="aside-item">
                <AsideSearchForm/>
            </div>
            <div className="aside-item">
                <h3 className="title">Upcoming events</h3>
                <AsideEventsContainer/>
            </div>
            <div className="aside-item">
                <h3 className="title">Recent Posts</h3>
                <AsidePostsContainer/>
            </div>
        </aside>
    );
}

export default AsideEventsPostsContainer;
