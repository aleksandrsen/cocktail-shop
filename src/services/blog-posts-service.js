import sortedBlogPosts from "../normalize-data/blog-posts";

export default class BlogPostsService {
    constructor() {
    }

    getAllBlogPosts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(sortedBlogPosts), 1500);
        })
    };

    getBlogPostById(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = sortedBlogPosts.find(({id}) => id === eventId);
                resolve(event);
            }, 1500);
        })
    };
}