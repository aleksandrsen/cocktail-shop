import getCocktailIngredientsFunc from "./getCocktailIngredients";
import getMeasureIngredient from "./getMeasureIngredient";

export default function getNormalizeCocktailData(cocktail) {
    let {
        idDrink,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
    } = cocktail;

    let ingredients = getCocktailIngredientsFunc(cocktail);
    let measureIngredients = getMeasureIngredient(cocktail);
    let ingredientsWithMeasure = ingredients.map((item, idx) => {
        return {ingredient: item, measure: measureIngredients[idx]};
    });

    return {
        idDrink,
        strDrink,
        strCategory,
        strAlcoholic,
        strGlass,
        strInstructions,
        strDrinkThumb,
        ingredients,
        ingredientsWithMeasure
    }
}