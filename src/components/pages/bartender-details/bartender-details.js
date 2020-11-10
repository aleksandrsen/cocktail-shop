import React, { useEffect } from "react";
import "./bartener-details.scss";
import { connect } from "react-redux";
// Actions
import { fetchBartendersDetails } from "../../../actions/bartenders";
// Components
import SmallSpinner from "../../spinner";
import TalkToBartender from "./talk-to-bartender";
import RippleButton from "../../reusable-components/Button";

const BartenderDetails = ({
  match: {
    params: { id },
  },
  bartenderDetails,
  fetchBartendersDetails,
}) => {
  useEffect(() => {
    fetchBartendersDetails(id);
  }, []);

  return (
    <>
      <div className="default-section bartenderDetails">
        <div className="container">
          {bartenderDetails ? (
            <>
              <h2 className="section-sub-title">Bartender</h2>
              <h1 className="section-title">{`${bartenderDetails.name} ${bartenderDetails.surname}`}</h1>
              <p className="default-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                deleniti dolores eaque et expedita harum hic illo iste modi
                necessitatibus nostrum nulla porro quae quidem repellat soluta
                tempora, veniam veritatis! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Amet cumque debitis eligendi
                expedita modi, nemo quia ratione. Corporis, deleniti error ex
                maiores nam nesciunt perspiciatis quaerat tempora tempore velit,
                voluptatem.
              </p>
              <img
                className="bartenderDetails__photo"
                src={bartenderDetails.img}
                alt={`${bartenderDetails.name} ${bartenderDetails.surname}`}
              />
              <p className="default-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                deleniti dolores eaque et expedita harum hic illo iste modi
                necessitatibus nostrum nulla porro quae quidem repellat soluta
                tempora, veniam veritatis!
              </p>
              <RippleButton>Awards</RippleButton>
              <TalkToBartender bartenderDetails={bartenderDetails} />
            </>
          ) : (
            <SmallSpinner />
          )}
        </div>
      </div>
    </>
  );
};

export default connect(
  (state) => ({ bartenderDetails: state.bartenders.bartenderDetails }),
  { fetchBartendersDetails }
)(BartenderDetails);
