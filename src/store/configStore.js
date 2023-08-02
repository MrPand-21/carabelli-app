import { createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"

export function configStore() {
    return createStore(rootReducer, devToolsEnhancer())

}