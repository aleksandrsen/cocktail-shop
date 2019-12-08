import React from 'react';
import './next-events-section.scss';
// Components
import Container from "../common-components/container";
import SectionTitle from "../common-components/section-title";
import NextEventItem from "../next-event-item";
import SmallSection from "../common-components/small-section";
import sortedEvents from "../../normalize-data/events";

function NextEventsSection(props) {

    let events = sortedEvents.slice(0, 2);

    return (
        <SmallSection className="next-events-section">
            <Container>
                <SectionTitle>Don't miss our next events</SectionTitle>
                <div className="next-events-container">
                    {
                        events.map(({id, dateStart, title}) => {
                            return <NextEventItem key={id} date={dateStart} id={id} title={title}/>
                        })
                    }
                </div>
            </Container>
        </SmallSection>
    );
}

export default NextEventsSection;