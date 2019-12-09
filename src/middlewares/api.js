import {START, SUCCESS, FAIL} from "../constants";
import EventsService from "../services/events-service";
import BartendersService from "../services/bartenders-service";

const eventsService = new EventsService();
const bartendersService = new BartendersService();

export default (store) => (next) => (action) => {
    const {callApi, ...rest} = action;
    if (callApi) {
        next({
            ...rest,
            type: action.type + START
        });

        if (callApi === "events") {
            eventsService.getAllEvents()
                .then(data => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        payload: {
                            response: data
                        }
                    });
                })
                .catch(err => {
                    next({
                        ...rest,
                        type: action.type + FAIL,
                        error: err
                    })
                })
        } else if (callApi === "bartenders") {
            bartendersService.getAllBartenders()
                .then(data => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        payload: {
                            response: data
                        }
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