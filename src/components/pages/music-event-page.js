import React from "react";
import Section from "../common-components/section";
import Container from "../common-components/container";
import AsideEventPostsContainer from "../aside";
import MusicEventsContainer from "../music-events-list";
import {Row, Col} from "antd";

function MusicEventPage(props) {

    return (
        <Section>
            <Container>
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <MusicEventsContainer/>
                    </Col>
                    <Col span={6}>
                        <AsideEventPostsContainer/>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default MusicEventPage;