import {LOAD_USERS, START, SUCCESS, FAIL, CREATE_NEW_USER} from "../constants";
import {resourceStartRecord} from "./utils";

export default (usersState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_USERS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };
        case LOAD_USERS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_USERS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        case CREATE_NEW_USER:
            let {id, name, surname, email} = action.payload;
            let {entities} = usersState;
            let newUser = {
                id,
                name,
                surname,
                email
            };

            return {
                ...usersState,
                entities: [
                    ...entities,
                    newUser
                ]
            };

        default:
            return usersState
    }
}