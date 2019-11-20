import React from 'react';
import './next-events-section.scss';
// Components
import Container from "../common-components/container";
import SectionTitle from "../common-components/section-title";
import NextEventsItem from "../next-events-item";
import SmallSection from "../common-components/small-section";

function NextEventsSection(props) {

    return (
        <SmallSection className="next-events-section">
            <Container>
                <SectionTitle>Don't miss our next events</SectionTitle>
                <div className="next-events-container">
                    <NextEventsItem/>
                    <NextEventsItem/>
                </div>
            </Container>
        </SmallSection>
    );
}

export default NextEventsSection;