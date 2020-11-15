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
      {bartenders ? (
        <>
          <div className="row justify-content-center">
            {bartenders.slice(0, 3).map((item) => (
              <BartenderItem key={item.id} bartender={item} />
            ))}
          </div>
          <div className="row justify-content-center">
            {bartenders.slice(3).map((item) => (
              <BartenderItem key={item.id} bartender={item} />
            ))}
          </div>
        </>
      ) : (
        <SmallSpinner />
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    bartenders: state.bartenders.bartenders,
  }),
  { fetchBartenders }
)(BartendersList);
