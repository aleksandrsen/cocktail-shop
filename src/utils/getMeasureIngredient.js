export default function getMeasureIngredient(obj) {
    let measure = [];
    if (!obj.strMeasure1) return null;
    for (let key in obj) {
        if (key.slice(0, -1) === "strMeasure" && obj[key] !== null) {
            measure.push(obj[key]);
        }
    }
    return measure;
}