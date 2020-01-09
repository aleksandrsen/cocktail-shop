import {LOAD_COCKTAILS, START, SUCCESS, FAIL, LOAD_COCKTAIL_BY_ID} from "../constants";
import {resourceStartRecord} from "./utils";
import getNormalizeCocktailData from "../functions/getNormalizeCocktailData";

export default (cocktailsState = resourceStartRecord(), action) => {
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
        case LOAD_COCKTAIL_BY_ID + SUCCESS: {
            let loadFirstTime = action.payload.response.drinks ? action.payload.response.drinks : false;
            if (loadFirstTime) {
                let entities = cocktailsState.entities;
                let newItem = getNormalizeCocktailData(action.payload.response.drinks[0]);
                let idx = cocktailsState.entities.findIndex(({idDrink}) => idDrink === newItem.idDrink);
                return {
                    ...cocktailsState,
                    entities: [
                        ...entities.slice(0, idx),
                        newItem,
                        ...entities.slice(idx + 1)
                    ]
                }
            }
            return cocktailsState;
        }
        default:
            return cocktailsState
    }
}