import EventsService from "../services/events-service";
import {
    USER_LOGIN,
    USER_LOGOUT,
    LOAD_USERS,
    LOAD_EVENTS,
    LOAD_BLOG_POSTS,
    LOAD_REVIEWS,
    ADD_REVIEW,
    DELETE_REVIEW,
    EDIT_REVIEW,
    USER_LOG_IN,
    USER_LOG_OUT,
    START,
    SUCCESS,
    FAIL
} from "../constants";

let eventsService = new EventsService();

export const loadEvents = () => ({
    type: LOAD_EVENTS
});

export const loadEventsAndGetNearestEvent = () => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.events.loading;
    let isLoaded = state.events.loaded;
    if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_EVENTS + START});
        eventsService.getAllEvents()
            .then(data => {
                let events = data.filter(evenItem => {
                    let date = Date.now();
                    let dateEventStart = +Date.parse(evenItem.dateStart);
                    return date < dateEventStart;
                }).sort((firstEvent, secondEvent) => {
                    let dateStartFirst = +Date.parse(firstEvent.dateStart);
                    let dateStartSecond = +Date.parse(secondEvent.dateStart);
                    return dateStartFirst - dateStartSecond;
                });
                dispatch({
                    type: LOAD_EVENTS + SUCCESS,
                    payload: {
                        response: events
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_EVENTS + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};