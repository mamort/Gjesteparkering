import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import {apiGet, apiPost} from '../Shared/api/api'
import Constants from '../constants'
import {startSession, endSession, getSessionUser} from './session'

export const LoginActionTypes = {
    LOGIN_EMAIL_CHANGED: 'LOGIN_EMAIL_CHANGED',
    LOGIN_PASSWORD_CHANGED: 'LOGIN_PASSWORD_CHANGED',
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    USER_LOGGED_OUT: 'USER_LOGGED_OUT',
    USER_LOGIN_FAILED: 'USER_LOGIN_FAILED',
    USER_LOGOUT_FAILED: 'USER_LOGOUT_FAILED'
}

export const loginEmailChanged = (email) => {
    return {
        type: LoginActionTypes.LOGIN_EMAIL_CHANGED,
        email
    }  
}

export const loginPasswordChanged = (password) => {
    return {
        type: LoginActionTypes.LOGIN_PASSWORD_CHANGED,
        password
    }  
}

export const userLoggedIn = (user) => {
    return {
        type: LoginActionTypes.USER_LOGGED_IN,
        user
    }  
}

export const userLoggedOut = (user) => {
    return {
        type: LoginActionTypes.USER_LOGGED_OUT,
        user
    }  
}

export const userLoginFailed = (user) => {
    return {
        type: LoginActionTypes.USER_LOGIN_FAILED,
        user
    }  
}

export const userLogoutFailed = (user) => {
    return {
        type: LoginActionTypes.USER_LOGOUT_FAILED,
        user
    }  
}

export const login = () => {
    return (dispatch, getState) => {
        var state = getState();
        var username = state.login.email;
        var password = state.login.password;

        var url = Constants.ServiceUrl + '/account/login';
        var body = { username, password, rememberMe: true }
        apiPost(dispatch, url, (response) => onLoggedIn(response, username), (ex) => onLoginFailed(dispatch, username, ex), body);
    }
}

export const logout = () => {
    return (dispatch) => {
        var username = getSessionUser();

        var url = Constants.ServiceUrl + '/account/logout';
        var body = { username }
        apiPost(dispatch, url, (response) => onLoggedOut(response, username), (ex) => onLogoutFailed(dispatch, username, ex), body);
    }
}

function onLoggedOut(response, username) {
    return (dispatch) => {
        return response.json().then(function(data) {

            if (response.status === 200 && data.Success) {

                endSession(username);

                dispatch(userLoggedOut(username));
                browserHistory.push('/Gjesteparkering');
            } else {
                dispatch(userLogoutFailed(username));
            }
        }); 
    }    
}

function onLoggedIn(response, username) {
    return (dispatch) => {
        return response.json().then(function(data) {

            if (response.status === 200 && data.Success) {

                startSession(username);

                dispatch(userLoggedIn(username));
                browserHistory.push('/Gjesteparkering');
            } else {
                dispatch(userLoginFailed(username));   
            }
        }); 
    }
}

function onLogoutFailed(dispatch, username, ex) {
    console.log("error getting resource: " + JSON.stringify(ex.stack));
    dispatch(userLogoutFailed(username));
}

function onLoginFailed(dispatch, username, ex) {
    console.log("error getting resource: " + JSON.stringify(ex.stack));
    dispatch(userLoginFailed(username));    
}