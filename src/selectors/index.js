import {createSelector} from "reselect";
// Events
export const eventsLoadingSelector = (state) => state.events.loading;
export const eventsLoadedSelector = (state) => state.events.loaded;
export const eventsSelector = (state) => state.events.entities;

// Events item
export const eventItemLoadingSelector = (state) => state.eventItem.loading;
export const eventItemLoadedSelector = (state) => state.eventItem.loaded;
export const eventItemSelector = (state) => state.eventItem.item;
export const eventItemIdSelector = (state) => {
    let eventItem = state.eventItem.item;
    if (eventItem) return eventItem.id;
    return '';
};

// Bartenders
export const bartendersLoadingSelector = (state) => state.bartenders.loading;
export const bartendersLoadedSelector = (state) => state.bartenders.loaded;
export const bartendersSelector = (state) => state.bartenders.entities;

// Bartender item
export const bartenderItemLoadedSelector = (state) => state.bartenderItem.loaded;
export const bartenderItemLoadingSelector = (state) => state.bartenderItem.loading;
export const bartenderItemSelector = (state) => state.bartenderItem.item;

// BlogPosts
export const blogPostsLoadingSelector = (state) => state.blogPosts.loading;
export const blogPostsLoadedSelector = (state) => state.blogPosts.loaded;
export const blogPostsSelector = (state) => state.blogPosts.entities;

// BlogPostItem
export const blogPostItemLoadingSelector = (state) => state.blogPostItem.loading;
export const blogPostItemLoadedSelector = (state) => state.blogPostItem.loaded;
export const blogPostItemSelector = (state) => state.blogPostItem.item;
export const blogPostItemIdSelector = (state) => {
    let blogPostItem = state.blogPostItem.item;
    if (blogPostItem) return blogPostItem.id;
    return '';
};

// Users
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersSelector = (state) => state.users.entities;

// Reviews
export const blogPostsReviewsLoadingSelector = (state) => state.blogPostsReviews.loading;
export const blogPostsReviewsLoadedSelector = (state) => state.blogPostsReviews.loaded;
export const blogPostsReviewsSelector = (state) => state.blogPostsReviews.entities;

// Random Cocktails
export const randomCocktailsLoadingSelector = (state) => state.randomCocktails.loading;
export const randomCocktailsLoadedSelector = (state) => state.randomCocktails.loaded;
export const randomCocktailsSelector = (state) => state.randomCocktails.entities;

// Random Cocktails
export const cocktailsLoadingSelector = (state) => state.cocktails.loading;
export const cocktailsLoadedSelector = (state) => state.cocktails.loaded;
export const cocktailsSelector = (state) => state.cocktails.entities;

// Common
export const cartSelector = (state) => state.cart;
export const wishListSelector = (state) => state.wishList;
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

export const blogPostDetailsSelector = createSelector(
    blogPostItemSelector,
    usersSelector,
    (blogPostItem, users) => {
        if (!blogPostItem || !users) return [];

        let blogPostAuthor = users.find(({id}) => id === blogPostItem.userId);
        return {
            ...blogPostItem,
            author: blogPostAuthor
        }
    }
);

export const getAllReviewsForBlogPost = createSelector(
    blogPostsReviewsSelector,
    usersSelector,
    idSelector,
    (reviews, users, id) => {
        return reviews.map(reviewItem => {
            let reviewAuthor = users.find(({id}) => id === reviewItem.userId);
            return {
                ...reviewItem,
                author: reviewAuthor
            }
        })
    }
);

export const cartAmountSelector = createSelector(
    cartSelector,
    cart => Object.values(cart).reduce((total, cocktails) => total + cocktails, 0)
);

export const wishListAmountSelector = createSelector(
    wishListSelector,
    wishList => wishList.length
);
