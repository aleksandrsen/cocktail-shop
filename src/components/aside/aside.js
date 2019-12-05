import React from 'react';
import './aside.scss';
// Components
import AsideSearchForm from "../aside-search-form";
import AsidePostsList from "../aside-posts-list";
import AsideEventsList from "../aside-events-list";
import InstagramGallery from "../instagram-gallery";

function Aside(props) {

    return (
        <aside className="aside">
            <div className="aside-item">
                <AsideSearchForm/>
            </div>
            <div className="aside-item">
                <h3 className="title">Upcoming events</h3>
                <AsideEventsList/>
            </div>
            <div className="aside-item">
                <h3 className="title">Recent Posts</h3>
                <AsidePostsList/>
            </div>
            <div className="aside-item">
                <h3 className="title">Instagram</h3>
                <InstagramGallery/>
            </div>
        </aside>
    );
}

export default Aside;
