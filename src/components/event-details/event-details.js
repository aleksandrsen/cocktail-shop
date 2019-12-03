import React from 'react';
import './event-details.scss';
import commentsIcon from "../../data/img/comments.svg"
// Components
import DefaultText from "../common-components/default-text";
import SocialNetworks from "../social-networks";

function EventDetails(props) {
    let {eventId} = props;
    console.log(eventId);

    return (
        <section className="blog-details">
            <h1>This is event details</h1>
        </section>

    );
}

export default EventDetails;