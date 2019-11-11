export default class CocktailService {
    constructor(props) {
        this.baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    }

    async getRandomCocktail() {
        let res = await fetch(`${this.baseUrl}random.php`);
        return await res.json();
    }

}