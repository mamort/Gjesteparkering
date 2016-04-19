import { combineReducers } from 'redux'
import {LoginActionTypes} from './actions'

export const loginReducer = (state = {}, action) => {

    if (action.type !== LoginActionTypes.USER_LOGIN_FAILED) {
        state = Object.assign({}, state, {loginFailed: false});
    }

    if (action.type !== LoginActionTypes.USER_LOGOUT_FAILED) {
        state = Object.assign({}, state, {logoutFailed: false});
    }

    switch (action.type) {
        case LoginActionTypes.LOGIN_EMAIL_CHANGED:
            return Object.assign({}, state, {email: action.email});
        case LoginActionTypes.LOGIN_PASSWORD_CHANGED:
            return Object.assign({}, state, {password: action.password});
        case LoginActionTypes.USER_LOGGED_IN:
            return Object.assign({}, state, {isLoggedIn: true});
        case LoginActionTypes.USER_LOGGED_OUT:
            return Object.assign({}, state, {isLoggedIn: false});
        case LoginActionTypes.USER_LOGIN_FAILED:
            return Object.assign({}, state, {isLoggedIn: false, loginFailed: true});
        case LoginActionTypes.USER_LOGOUT_FAILED:
            return Object.assign({}, state, {logoutFailed: true});
        case LoginActionTypes.API_SESSION_TIMEOUT:
            return Object.assign({}, state, {isLoggedIn: false});
        default:
            return state;
    }
}
export default loginReducer