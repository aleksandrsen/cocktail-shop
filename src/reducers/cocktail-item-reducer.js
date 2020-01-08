import {LOAD_COCKTAIL_BY_ID, START, SUCCESS, FAIL} from "../constants";
import {itemStartRecord} from "./utils";
import getCocktailIngredientsFunc from "../functions/getCocktailIngredients";
import getMeasureIngredient from "../functions/getMeasureIngredient";

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
            let {
                idDrink,
                strDrink,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
                strDrinkThumb,
            } = action.payload.response.drinks[0];

            let ingredients = getCocktailIngredientsFunc(action.payload.response.drinks[0]);
            let measureIngredients = getMeasureIngredient(action.payload.response.drinks[0]);
            let ingredientsWithMeasure = ingredients.map((item, idx) => {
                return {ingredient: item, measure: measureIngredients[idx]};
            });

            let newItem = {
                idDrink,
                strDrink,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
                strDrinkThumb,
                ingredientsWithMeasure
            };

            return {
                loading: false,
                loaded: true,
                error: null,
                item: newItem
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