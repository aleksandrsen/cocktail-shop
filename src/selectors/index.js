import {createSelector} from "reselect";

export const eventsLoadingSelector = (state) => state.events.loading;
export const eventsLoadedSelector = (state) => state.events.loaded;
export const eventsSelector = (state) => state.events.entities;

export const blogPostsLoadingSelector = (state) => state.blogPosts.loading;
export const blogPostsLoadedSelector = (state) => state.blogPosts.loaded;
export const blogPostsSelector = (state) => state.blogPosts.entities;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersSelector = (state) => state.users.entities;

export const getAllDataForBlogPosts = createSelector(
    blogPostsSelector,
    usersSelector,
    (blogPosts, users) => {
        return blogPosts.map(blogPostItem => {
            let {userId} = blogPostItem;
            let user = users.find(({id}) => id === userId);
            return {
                ...blogPostItem,
                author: user
            }
        });
    }
);