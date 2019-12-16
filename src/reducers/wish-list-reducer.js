import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST} from "../constants";

export default (wishListState = [], action) => {
    switch (action.type) {
        case ADD_TO_WISH_LIST: {
            let cocktailId = action.payload.id;
            let itemInList = wishListState.find(id => id === cocktailId);
            if (!itemInList) {
                return [
                    ...wishListState,
                    cocktailId
                ]
            }
        }

        case REMOVE_FROM_WISH_LIST: {
            let cocktailId = action.payload.id;
            let idx = wishListState.findIndex(id => id === cocktailId);
            return [
                ...wishListState.slice(0, idx),
                ...wishListState.slice(idx + 1)
            ];
        }

        default:
            return wishListState
    }
}