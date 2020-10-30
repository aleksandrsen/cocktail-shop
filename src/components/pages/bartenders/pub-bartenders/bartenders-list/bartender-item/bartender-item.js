import React from "react";
import "./bartender-item.scss";
// Components
import { Link } from "react-router-dom";

const BartenderItem = ({ bartender: { name, surname, img, id } }) => (
  <div className="col col-3">
    <Link to={`/bartenders/${id}`} className="bartenderItem">
      <div className="bartenderItem__imgWrapper">
        <img
          className="bartenderItem__img"
          src={img}
          alt={name + " " + surname}
        />
        <div className="bartenderItem__frame" />
      </div>
      <div className="bartenderItem__name">
        {name} {surname}
      </div>
    </Link>
  </div>
);

export default BartenderItem;
