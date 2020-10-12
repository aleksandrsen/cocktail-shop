import React from "react";
import "./music-event-item.scss";
import { Row, Col } from "antd";
import { withRouter } from "react-router-dom";
import formatDate from "../../../../functions/format-date";
import DefaultText from "../../../layout-components/default-text";
// Components
import cutTextContent from "../../../../functions/cut-text-content";

const MusicEventItem = ({
  history,
  eventItem: { title, text, dateStart, middleImg, id },
}) => {
  let date = formatDate(dateStart, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="music-event-item">
      <Row type="flex" justify="space-between" align="middle">
        <Col span={10}>
          <img src={middleImg} alt="event-img" />
        </Col>
        <Col span={13}>
          <h3 className="event-item-title">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                history.push(id);
              }}
            >
              {title}
            </a>
          </h3>
          <div className="event-item-date">{date}</div>
          <DefaultText>{cutTextContent(text, 350)}</DefaultText>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(MusicEventItem);
