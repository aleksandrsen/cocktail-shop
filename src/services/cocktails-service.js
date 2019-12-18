export default class CocktailsService {
    constructor(prop) {
        this.api_Base = "https://www.thecocktaildb.com/api/json/v1/1/"
    }

    http(link) {
        return fetch(`${this.api_Base}${link}`)
            .then(data => data.json())
            .then(response => {
                return response;
            })
            .catch(err => console.log(err));
    }

    searchCocktailByName(name) {
        return this.http(`search.php?s=${name}`);
    }

    searchAllCocktailsByFirstLetter(letter) {
        return this.http(`search.php?f=${letter}`);
    }

    searchIngredientByName(name) {
        return this.http(`search.php?i=${name}`);
    }

    lookUpCocktailDetailsById(id) {
        return this.http(`search.php?i=${id}`)
    }

    lookUpIngredientById(id) {
        return this.http(`lookup.php?iid=${id}`)
    }

    lookUpRandomCocktail() {
        return Promise.all([
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`),
            this.http(`random.php`)
        ])
    };

    lookUp10RandomCocktails(id) {
        return this.http(`randomselection.php`)
    }

    getPopularCocktails(id) {
        return this.http(`popular.php`)
    }

    getLatestCocktails(id) {
        return this.http(`latest.php`)
    }

    searchCocktailsByIngredient(ingredient) {
        return this.http(`filter.php?i=${ingredient}`)
    }

    filterByMultiIngredient(ingredientsArr) {
        let ingredients = ingredientsArr.join(',');
        return this.http(`filter.php?i=${ingredients}`)
    }

    filterByAlcoholic(AlcParam) {
        return this.http(`filter.php?a=${AlcParam}`);
    }

    filterByCategory(category) {
        const ordinary = "Ordinary_Drink";
        const cocktail = "Cocktail";
        return this.http(`filter.php?c=${category}`)
    }

    async loadCocktails() {
        return Promise.all([
            this.filterByAlcoholic('Non_Alcoholic'),
            this.filterByAlcoholic('Alcoholic'),
            this.filterByAlcoholic('Optional_Alcohol')
        ])
    }
}