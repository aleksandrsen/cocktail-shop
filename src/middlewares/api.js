import {START, SUCCESS, FAIL} from "../constants";

export default (store) => (next) => (action) => {
    const {callApi, ...rest} = action;
    if (callApi) {
        next({
            ...rest,
            type: action.type + START
        });

        fetch(callApi)
            .then(data => {
                if (data.status === 200 && data.ok === true) {
                    return data.json();
                }
            })
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
    } else {
        next(action);
    }
}