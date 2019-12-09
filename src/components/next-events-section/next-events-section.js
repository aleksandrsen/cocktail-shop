import React from 'react';
import {connect} from "react-redux";
import './next-events-section.scss';
// Selectors
import {eventsSelector, eventsLoadedSelector, eventsLoadingSelector} from "../../selectors";
// Components
import Container from "../common-components/container";
import SectionTitle from "../common-components/section-title";
import NextEventItem from "../next-event-item";
import SmallSection from "../common-components/small-section";
import Spinner from "../spinner";

function NextEventsSection(props) {
    let {loading, loaded, events} = props;
    if (!loading && loaded) {
        let nextEvents = events.slice(0, 2);
        console.log(events);
        return (
            <SmallSection className="next-events-section">
                <Container>
                    <SectionTitle>Don't miss our next events</SectionTitle>
                    <div className="next-events-container">
                        {
                            nextEvents.map(({id, dateStart, title}) => {
                                return <NextEventItem key={id} date={dateStart} id={id} title={title}/>
                            })
                        }
                    </div>
                </Container>
            </SmallSection>
        );
    }
    return <Spinner/>
}

export default connect((state) => {
    return {
        loading: eventsLoadingSelector(state),
        loaded: eventsLoadedSelector(state),
        events: eventsSelector(state)
    }
}, null)(NextEventsSection);