import {START, SUCCESS, FAIL} from "../constants";
import EventsService from "../services/events-service";

const eventsService = new EventsService();

export default (store) => (next) => (action) => {
    const {callApi, ...rest} = action;
    if (callApi) {
        next({
            ...rest,
            type: action.type + START
        });
        if (callApi) {
            eventsService.getAllEvents()
                .then(response => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        response: response
                    });
                })
                .catch(err => {
                    next({
                        ...rest,
                        type: action.type + FAIL,
                        error: err
                    })
                })
        }
    } else {
        next(action);
    }
}