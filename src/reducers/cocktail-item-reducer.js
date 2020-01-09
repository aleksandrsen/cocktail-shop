import {LOAD_COCKTAIL_BY_ID, START, SUCCESS, FAIL} from "../constants";
import {itemStartRecord} from "./utils";
import getNormalizeCocktailData from "../functions/getNormalizeCocktailData";

export default (cocktailItemState = itemStartRecord(), action) => {
    switch (action.type) {
        case LOAD_COCKTAIL_BY_ID + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                item: null
            };

        case LOAD_COCKTAIL_BY_ID + SUCCESS: {
            let loadFirstTime = action.payload.response.drinks ? action.payload.response.drinks : false;
            if (loadFirstTime) {
                let newItem = getNormalizeCocktailData(action.payload.response.drinks[0]);
                return {
                    loading: false,
                    loaded: true,
                    error: null,
                    item: newItem
                };
            }
            return {
                loading: false,
                loaded: true,
                error: null,
                item: action.payload.response
            };
        }
        case LOAD_COCKTAIL_BY_ID + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                item: null
            };
        default:
            return cocktailItemState
    }
}