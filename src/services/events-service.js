import sortedEvents from "../normalize-data/events";

export default class EventsService {
    constructor() {
    }

    getAllEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sortedEvents), 1000);
        })
    };

    getEventById(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = sortedEvents.find(({id}) => id === eventId);
                resolve(event);
            }, 1300);
        })
    };
}