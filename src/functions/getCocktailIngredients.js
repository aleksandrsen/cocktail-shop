export default function getCocktailIngredientsFunc(obj) {
    let ingredients = [];
    if (!obj.strIngredient1) return null;
    for (let key in obj) {
        if (key.slice(0, -1) === "strIngredient" && obj[key] !== null) {
            ingredients.push(obj[key]);
        }
    }
    // let res = ingredients.join(', ').toLowerCase();
    // return res[0].toUpperCase() + res.slice(1);
    return ingredients;
}