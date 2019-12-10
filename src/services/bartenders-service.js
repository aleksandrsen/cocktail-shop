import pubBartenders from "../normalize-data/pub-bartenders";

export default class BartendersService {
    constructor() {
    }

    getAllBartenders() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(pubBartenders), 1500);
        })
    };

    getBartenderById(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let bartender = pubBartenders.find(({id}) => id === eventId);
                resolve(bartender);
            }, 1500);
        })
    };
}