import reviews from "../normalize-data/reviews";

export default class ReviewsService {
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

    addReview(blogPostId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = reviews.find(({id}) => id === blogPostId);
                resolve(event);
            }, 1000);
        })
    };
}