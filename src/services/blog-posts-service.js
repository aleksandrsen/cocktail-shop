import sortedBlogPosts from "../normalize-date/blog-posts";

export default class EventsService {
    constructor() {
    }

    getAllBlogPosts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sortedBlogPosts), 1000);
        })
    };

    getBlogPost(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = sortedBlogPosts.find(({id}) => id === eventId);
                resolve(event);
            }, 1000);
        })
    };
}