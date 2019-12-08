import React from 'react';
import './event-details.scss';
import sortedEvents from "../../normalize-data/events";
import clockIcon from "../../img/icons/clock-regular.svg";
import mapIcon from "../../img/icons/map-icon.svg";
// Components
import DefaultText from "../common-components/default-text";
import Share from "../share/share";
import Section from "../common-components/section";
import Container from "../common-components/container";
import SectionTitle from "../common-components/section-title";
import formatDate from "../../functions/format-date";
import Map from "../map";
import PubPartnersSection from "../pub-partners-section";

function EventDetails(props) {
    let {eventId} = props;
    let event = sortedEvents.find(event => eventId === event.id);
    let {title, bigImg, dateStart, text} = event;
    let eventDate = formatDate(dateStart, {
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric"
    });
    let address = 'New York, 345 Park AveNY 10154, USA';

    return (
        <Section className="event-details">
            <Container>
                <SectionTitle>{title}</SectionTitle>
                <DefaultText>{text}</DefaultText>
            </Container>
            <img className="event-img" src={bigImg} alt=""/>
            <Container>
                <DefaultText className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ex maxime, nobis officiis placeat
                    ratione suscipit voluptates? Debitis distinctio expedita facere maxime minus molestias non
                    perferendis sapiente sequi voluptates? Harum. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Accusantium architecto enim ex non, officiis optio quos rem repudiandae sequi voluptate!
                    Consequatur earum excepturi exercitationem in pariatur quas repellat rerum temporibus. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Ad adipisci aperiam beatae consequuntur debitis
                    dolorem, ducimus exercitationem facilis fuga fugiat ipsum laborum necessitatibus nemo non numquam
                    obcaecati reprehenderit, velit voluptate? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores assumenda atque culpa, deserunt incidunt inventore iusto laudantium magni mollitia non
                    officiis similique suscipit vitae. Ab nihil numquam omnis rem unde?
                </DefaultText>
                <div className="event-details">
                    <div className="event-detail-item">
                        <img className="icon-item" src={clockIcon} alt="clock-icon"/>
                        {eventDate}, in hub on pubs
                    </div>
                    <div className="event-detail-item">
                        <img className="icon-item" src={mapIcon} alt="map-icon"/>
                        {address}
                    </div>
                </div>
                <Share/>
            </Container>
            <Map/>
            <PubPartnersSection/>
        </Section>

    );
}

export default EventDetails;