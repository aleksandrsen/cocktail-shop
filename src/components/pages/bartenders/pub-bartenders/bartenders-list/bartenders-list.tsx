import React, { useEffect } from "react";
import "./bartenders-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../../../utils";
// Actions
import { fetchBartenders } from "../../../../../actions/bartenders";
// Components
import BartenderItem from "./bartender-item";
// Types
import { AppRootState } from "../../../../../store";
import { BartenderItemType } from "../../../../../types/common";

type BartendersListPropsType = {
  bartenders: null | BartenderItemType[];
  fetchBartenders: () => void;
};

const BartendersList = ({
  bartenders,
  fetchBartenders,
}: BartendersListPropsType) => {
  useEffect(() => {
    fetchBartenders();
  }, [fetchBartenders]);

  return (
    <div className="bartendersList">
      <div className="row justify-content-center">
        {bartenders
          ? bartenders.map((item) => (
              <BartenderItem key={item.id} bartender={item} />
            ))
          : getSkeletons(6, BartenderItem)}
      </div>
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({
    bartenders: state.bartenders.bartenders,
  }),
  { fetchBartenders }
)(React.memo(BartendersList));
