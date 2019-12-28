import {LOAD_COCKTAIL_DETAILS, LOAD_COCKTAILS, START, SUCCESS, FAIL} from "../constants";
import {resourceStartRecord} from "./utils";

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

        case LOAD_COCKTAIL_DETAILS + SUCCESS: {
            let cocktail = action.payload;
            let cocktailsList = cocktailsState.entities;
            let idx = cocktailsList.findIndex(({idDrink}) => idDrink === cocktail.idDrink);

            return {
                ...cocktailsState,
                entities: [
                    ...cocktailsList.slice(0, idx),
                    cocktail,
                    ...cocktailsList.slice(idx + 1)
                ]
            };
        }

        case LOAD_COCKTAIL_DETAILS + FAIL:  {
            let {id, err} = action.payload;
            let cocktailsList = cocktailsState.entities;
            let idx = cocktailsList.findIndex(({idDrink}) => idDrink === id);
            let cocktailWithError = {
                ...cocktailsList[idx],
                err
            };
            return {
                ...cocktailsState,
                entities: [
                    ...cocktailsList.slice(0, idx),
                    cocktailWithError,
                    ...cocktailsList.slice(idx + 1)
                ]
            };
        }

        default:
            return cocktailsState
    }
}