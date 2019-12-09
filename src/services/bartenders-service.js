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
                let event = pubBartenders.find(({id}) => id === eventId);
                resolve(event);
            }, 1500);
        })
    };
}