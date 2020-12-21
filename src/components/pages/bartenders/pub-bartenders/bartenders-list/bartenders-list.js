import React, { useEffect } from "react";
import "./bartenders-list.scss";
// Utils
import { connect } from "react-redux";
import { fetchBartenders } from "../../../../../actions/bartenders";
// Components
import BartenderItem from "./bartender-item";
import SmallSpinner from "../../../../spinner";

const BartendersList = ({ fetchBartenders, bartenders }) => {
  useEffect(() => {
    fetchBartenders();
  }, []);

  return (
    <div className="bartendersList">
      <div className="row justify-content-center">
        {bartenders
          ? bartenders.map((item) => (
              <BartenderItem key={item.id} bartender={item} />
            ))
          : new Array(6)
              .fill(1)
              .map((num, idx) => <BartenderItem key={`${num}${idx}`} />)}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    bartenders: state.bartenders.bartenders,
  }),
  { fetchBartenders }
)(BartendersList);
