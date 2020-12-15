import React from "react";
import "./bartender-item.scss";
// Components
import { Link } from "react-router-dom";
import ImgSkeleton from "../../../../../reusable-components/img-skeleton";
import FieldSkeleton from "../../../../../reusable-components/field-skeleton";

const BartenderItem = ({ bartender }) => (
  <div className="col col-3">
    <Link to={`/bartenders/${bartender?.id}`} className="bartenderItem">
      <div className="bartenderItem__imgWrapper">
        <ImgSkeleton
          src={bartender?.img}
          classes={["bartenderItem__img"]}
          title={`${bartender?.name} ${bartender?.surname}`}
          skeletonStyle={{
            width: "100%",
            height: "410px",
            borderRadius: "5px",
          }}
        />
        <div className="bartenderItem__frame" />
      </div>
      <div className="bartenderItem__name">
        {bartender ? (
          `${bartender.name} ${bartender.surname}`
        ) : (
          <FieldSkeleton
            styles={{ padding: "16px 0", width: "70%", margin: "auto" }}
          />
        )}
      </div>
    </Link>
  </div>
);

export default BartenderItem;
