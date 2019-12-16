import {ADD_TO_CART, REMOVE_FROM_CART} from "../constants";

export default (cartState = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            let cocktailId = action.payload.id;
            let itemInCart = cartState[cocktailId];
            if (itemInCart) {
                return {
                    ...cartState,
                    [cocktailId]: itemInCart + 1
                }
            } else {
                return {
                    ...cartState,
                    [cocktailId]: 1
                }
            }
        }
        case REMOVE_FROM_CART: {
            let cocktailId = action.payload.id;
            let newCartState = {...cartState};
            delete newCartState[cocktailId];
            return {
                ...newCartState
            }
        }

        default:
            return cartState
    }
}