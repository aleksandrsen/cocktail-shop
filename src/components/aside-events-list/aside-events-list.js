import React, {useEffect} from 'react';
import './aside-events-list.scss';
import {connect} from "react-redux";
// Actions
import {loadAndSortEvents} from "../../actions";
// Selectors
import {
    eventsLoadedSelector,
    eventsLoadingSelector,
    eventsSelector
} from "../../selectors";
// Components
import AsideEventItem from "../aside-event-item";
import Spinner from "../spinner";

function AsideEventsList(props) {
    let {isLoading, isLoaded, events, loadAndSortEvents} = props;

    useEffect(() => {
        if (!isLoading && !isLoaded) {
            loadAndSortEvents();
        }
    });

    if (!isLoading && isLoaded) {
        return (
            <div className="aside-events-list">
                {
                    events.slice(0, 4).map(event => {
                        return <AsideEventItem key={event.id} eventItem={event}/>
                    })
                }
            </div>
        );
    }
    return <Spinner/>
}

export default connect((state) => {
    return {
        isLoading: eventsLoadingSelector(state),
        isLoaded: eventsLoadedSelector(state),
        events: eventsSelector(state)
    }
}, {loadAndSortEvents})(AsideEventsList);
