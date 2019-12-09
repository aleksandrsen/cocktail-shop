import {createSelector} from "reselect";
// Events
export const eventsLoadingSelector = (state) => state.events.loading;
export const eventsLoadedSelector = (state) => state.events.loaded;
export const eventsSelector = (state) => state.events.entities;
// Bartenders
export const bartendersLoadingSelector = (state) => state.bartenders.loading;
export const bartendersLoadedSelector = (state) => state.bartenders.loaded;
export const bartendersSelector = (state) => state.bartenders.entities;
// BlogPosts
export const blogPostsLoadingSelector = (state) => state.blogPosts.loading;
export const blogPostsLoadedSelector = (state) => state.blogPosts.loaded;
export const blogPostsSelector = (state) => state.blogPosts.entities;
// Users
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersSelector = (state) => state.users.entities;
// Common
export const idSelector = (_, ownProps) => ownProps.id;

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

export const bartenderSelector = createSelector(
    bartendersSelector,
    idSelector,
    (bartenders, bartenderId) => {
        return bartenders.find(({id}) => id === bartenderId);
    }
);