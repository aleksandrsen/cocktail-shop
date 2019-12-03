import React from 'react';
import './music-event-item.scss';
import {Row, Col} from "antd";
import formatDate from "../../functions/format-date";
import DefaultText from "../common-components/default-text";

function MusicEventItem(props) {
    let {title, text, dateStart, middleImg} = props.eventItem;
    let {showEventDetails} = props;
    let date = formatDate(dateStart, {year: "numeric", month: "long", day: "numeric"});

    return (
        <div className="music-event-item">
            <Row type="flex" justify="space-between" align="middle">
                <Col span={10}>
                    <img src={middleImg} alt="event-img"/>
                </Col>
                <Col span={13}>
                    <h3 className="event-item-title">
                        <a href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            showEventDetails();
                        }}
                        >{title}</a>
                    </h3>
                    <div className="event-item-date">{date}</div>
                    <DefaultText>{text}</DefaultText>
                </Col>
            </Row>
        </div>
    );
}
export default MusicEventItem;