import { combineReducers } from 'redux'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_EMAIL_CHANGED':
            return Object.assign({}, state, {email: action.email});
        case 'LOGIN_PASSWORD_CHANGED':
            return Object.assign({}, state, {password: action.password});
        case 'USER_LOGGED_IN':
            return Object.assign({}, state, {isLoggedIn: true});
        case 'API_SESSION_TIMEOUT':
            return Object.assign({}, state, {isLoggedIn: false});
        default:
            return state;
    }
}
export default loginReducer