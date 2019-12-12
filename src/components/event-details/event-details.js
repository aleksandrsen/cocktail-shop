import React, {useEffect} from 'react';
import './event-details.scss';
import clockIcon from "../../img/icons/clock-regular.svg";
import {connect} from "react-redux";
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
// Actions
import {loadEventById} from "../../actions";
// Selectors
import {
    eventItemLoadedSelector,
    eventItemSelector,
    eventItemLoadingSelector
} from "../../selectors";
import Spinner from "../spinner";

function EventDetails(props) {
    let {eventId, isLoading, isLoaded, eventItem, loadEventById} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadEventById(eventId);
        }
    });

    if (!isLoading && isLoaded) {
        let {title, bigImg, dateStart, text} = eventItem;
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
                    <DefaultText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam dolorem exercitationem fugit in ipsa ipsum libero, maiores minus nihil obcaecati pariatur perspiciatis quas quibusdam sint ullam voluptate voluptatibus?
                    </DefaultText>
                </Container>
                <img className="event-img" src={bigImg} alt=""/>
                <Container>
                    <DefaultText className="description">
                        {text}
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

    return <Spinner/>
}

export default connect((state) => {
    return {
        isLoading: eventItemLoadingSelector(state),
        isLoaded: eventItemLoadedSelector(state),
        eventItem: eventItemSelector(state)
    }
}, {loadEventById})(EventDetails);