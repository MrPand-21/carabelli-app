import { combineReducers } from "redux"
import cartReducer from "./reducers/cartReducer"
import loginReducer from "./reducers/loginReducer";
import productListReducer from "./reducers/productListReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    login: loginReducer,
    products: productListReducer
})

export default rootReducer;