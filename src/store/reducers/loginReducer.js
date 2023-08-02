import { loggedIn } from "../initialValues";
import { LOG_IN, LOG_OUT } from "../actions/loginActions"

const initialState = {
    login: loggedIn
}

export default function loginReducer(state = initialState, { type }) {
    switch (type) {
        case LOG_IN:
            return {
                ...state,
                login: true
            }
        case LOG_OUT:
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}