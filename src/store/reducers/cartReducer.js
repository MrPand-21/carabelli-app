import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let cartItem = state.cartItems.find(c => c.product.id == payload.id)
            if (cartItem) {
                cartItem.quantity++;
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {
                        quantity: 1,
                        product: payload
                    }]
                }
            }
        case REMOVE_FROM_CART:
            let item = state.cartItems.find(c => c.product.id == payload.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                    return {
                        ...state
                    }
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(c => c.product.id != payload.id)
                    }
                }

            }

        default:
            return state;
    }
}