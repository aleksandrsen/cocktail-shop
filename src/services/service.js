import sortedEvents from "../normalize-date/events";

export default class BlogPostService {
    constructor() {}

    static getData(query) {
        return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
            .then(data => data.json())
            .then(response => response)
    }

    getCocktail() {
        return BlogPostService.getData('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');
    }

    getAllEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sortedEvents), 1000);
        })
    };

    getEventById = (eventId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = sortedEvents.find(({id}) => id === eventId);
                resolve(event);
            }, 1000);
        })
    };
}