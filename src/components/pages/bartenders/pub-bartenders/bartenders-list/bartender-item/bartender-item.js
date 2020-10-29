import React, { useState } from "react";
import "./bartender-item.scss";
// Components
import semanticImg from "../../../../../../img/semantic -bartenders.png";
import { Link } from "react-router-dom";

const BartenderItem = ({ bartender: { name, surname, img, id } }) => {
  const [loadImg, setLoad] = useState(false);

  // is load ???????????????????????????????????????????????????????????????????

  return (
    <div className="col col-3">
      <Link to={`/bartenders/${id}`} className="bartenderItem">
        {loadImg ? "" : <img src={semanticImg} alt={name + " " + surname} />}
        <div className="bartenderItem__imgWrapper">
          <img
            className="bartenderItem__img"
            src={img}
            alt={name + " " + surname}
            onLoad={(e) => setLoad(true)}
          />
          <div className="bartenderItem__frame" />
        </div>
        <div className="bartenderItem__name">
          {name} {surname}
        </div>
      </Link>
    </div>
  );
};

export default BartenderItem;
