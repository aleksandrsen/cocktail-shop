import React from "react";
// import AsideEventPostsContainer from "../../aside";
import MusicEventsList from "./music-events-list";
import {Row, Col} from "antd";

function MusicEventPage(props) {

    return (
        <section className="default-section">
            <div className="container">
                <Row type="flex" justify="space-between">
                    <Col span={17}>
                        <MusicEventsList/>
                    </Col>
                    <Col span={6}>
                        {/*<AsideEventPostsContainer/>*/}
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default MusicEventPage;