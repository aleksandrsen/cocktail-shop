import React, { useState } from "react";
import "./bartender-item.scss";
// Components
import { Col } from "antd";
import semanticImg from "../../../../img/semantic -bartenders.png";

const BartenderItem = ({
  bartenderDetails,
  bartender: { name, surname, img },
}) => {
  const [loadImg, setLoad] = useState(false);

  return (
    <Col span={8}>
      <div className="bartender-item" onClick={() => bartenderDetails()}>
        {loadImg ? "" : <img src={semanticImg} alt={name + " " + surname} />}
        <img
          className="bartender-item-img"
          src={img}
          alt={name + " " + surname}
          onLoad={(e) => setLoad(true)}
        />
        <span className="name">
          {name} {surname}
        </span>
      </div>
    </Col>
  );
};

export default BartenderItem;
