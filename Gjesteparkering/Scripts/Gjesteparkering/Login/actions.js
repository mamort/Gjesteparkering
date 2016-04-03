import fetch from 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import {apiGet, apiPost} from '../Shared/api/api'
import Constants from '../constants'

export const loginEmailChanged = (email) => {
    return {
        type: 'LOGIN_EMAIL_CHANGED',
        email
    }  
}

export const loginPasswordChanged = (password) => {
    return {
        type: 'LOGIN_PASSWORD_CHANGED',
        password
    }  
}

export const userLoggedIn = (user) => {
    return {
        type: 'USER_LOGGED_IN',
        user
    }  
}

export const login = () => {
    return (dispatch, getState) => {
        var state = getState();
        var username = state.login.email;
        var password = state.login.password;

        var url = Constants.ServiceUrl + '/login';
        var body = { username, password, rememberMe: true }
        apiPost(dispatch, url, (response) => onReceiveData(dispatch, response, username), onError, body);
    }
}

function onReceiveData(dispatch, response, username) {
    response.json().then(function(data) {
        console.log(JSON.stringify(data));
        if (response.status === 200 && data.Success) {
            dispatch(userLoggedIn(username));       
            browserHistory.push('/Gjesteparkering');
        }
    });
}

function onError(ex) {
    console.log("error getting resource: " + JSON.stringify(ex));
}