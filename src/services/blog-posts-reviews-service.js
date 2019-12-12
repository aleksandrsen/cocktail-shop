import reviews from "../normalize-data/reviews";

export default class BlogPostsReviewsService {
    constructor() {
    }

    getAllReviews() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(reviews);
            }, 1500);
        })
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