import React from "react";
import Section from "../../layout-components/section";
import Container from "../../layout-components/container";
import AsideEventPostsContainer from "../../aside";
import MusicEventsList from "./music-events-list";
import {Row, Col} from "antd";

function MusicEventPage(props) {

    return (
        <Section>
            <Container>
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <MusicEventsList/>
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