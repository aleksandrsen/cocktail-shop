import reviews from "../normalize-date/reviews";

export default class EventsService {
    constructor() {
    }

    getReviews(blogPostId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = reviews.find(({id}) => id === blogPostId);
                resolve(event);
            }, 1000);
        })
    };
}