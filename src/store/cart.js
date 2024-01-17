
export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART: {

            const newObj = {
                ...state,
                [action.itemId]: {
                    id: action.itemId,
                    count: 1
                }
            };
            return newObj;
        }
        default:
            return state;
    }
}

const ADD_TO_CART = 'cart/ADD_TO_CART';

export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        itemId
    }
}
