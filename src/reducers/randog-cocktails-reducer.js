import {LOAD_RANDOM_COCKTAILS, START, SUCCESS, FAIL} from "../constants";

let initRandomCocktailsState = {
    loading: false,
    loaded: false,
    error: null,
    entities: []
};

export default (randomCocktailsState = initRandomCocktailsState, action) => {
    switch (action.type) {
        case LOAD_RANDOM_COCKTAILS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_RANDOM_COCKTAILS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_RANDOM_COCKTAILS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return randomCocktailsState
    }
}