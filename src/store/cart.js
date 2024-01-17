
export default function  cartReducer(state={}, action) {
    switch (action.type) {
        case ADD_TO_CART: {

            const newObj = {
                ...state,
                cart: action.cart
              };
            return newObj;
        }
        default:
            return state;
    }
}

const ADD_TO_CART = 'cart/ADD_TO_CART';
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        cart: {id: {id: id, count: 1}}
    }
}
