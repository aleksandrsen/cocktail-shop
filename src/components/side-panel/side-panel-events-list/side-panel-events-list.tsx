import React, { useEffect } from "react";
import "./side-panel-events-list.scss";
// Utils
import { connect } from "react-redux";
import { getSkeletons } from "../../../utils";
// Actions
import { fetchEventsList } from "../../../actions/events";
// Components
import SideEventItem from "./side-event-item";
// Types
import { AppRootState } from "../../../store";
import { EventItemType } from "../../../types/common";

type SidePanelEventsListPropsType = {
  fetchEventsList: () => void;
  events: null | EventItemType[];
};

const SidePanelEventsList = ({
  fetchEventsList,
  events,
}: SidePanelEventsListPropsType) => {
  useEffect(() => {
    fetchEventsList();
  }, []);

  return (
    <div className="asideEventsList">
      {events
        ? events
            .slice(0, 4)
            .map((event) => <SideEventItem key={event.id} eventItem={event} />)
        : getSkeletons(4, SideEventItem)}
    </div>
  );
};

export default connect(
  (state: AppRootState) => ({ events: state.events.events }),
  {
    fetchEventsList,
  }
)(React.memo(SidePanelEventsList));
