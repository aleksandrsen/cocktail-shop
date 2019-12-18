import {LOAD_COCKTAILS, START, SUCCESS, FAIL} from "../constants";

let initCocktailsState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
};

export default (cocktailsState = initCocktailsState, action) => {
    switch (action.type) {
        case LOAD_COCKTAILS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_COCKTAILS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_COCKTAILS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return cocktailsState
    }
}