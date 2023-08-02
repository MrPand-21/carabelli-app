import { ADD_PRODUCT } from "../actions/productListActions";
import { productList } from "../initialValues";

const initialState = {
    products: productList
}

export default function productListReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PRODUCT:
            const product = {
                ...payload,
                id: state.products.length + 1
            }
            state.products.push(product)
            return {
                ...state
            }

        default:
            return state;
    }
}