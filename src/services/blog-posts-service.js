import blogPosts from "../normalize-data/normalize-blog-posts";

export default class BlogPostsService {
    constructor() {
    }

    getAllBlogPosts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(blogPosts), 1500);
        })
    };

    getBlogPostById(eventId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let event = blogPosts.find(({id}) => id === eventId);
                resolve(event);
            }, 1500);
        })
    };
}