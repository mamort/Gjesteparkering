import fetch from 'isomorphic-fetch'
import { actions } from './actions.js'
import humps from 'humps'

export function apiGet(dispatch, url, onReceiveData, onError) {
    dispatch(actions.apiBeginRequest())
    var settings = {
        credentials: 'include',
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(url, settings)
        .then(response => checkSessionTimeout(response))
        .then(response => extractJson(response))
        .then(json => dispatch(onReceiveData(humps.camelizeKeys(json))))
        .then(() => dispatch(actions.apiEndRequest()))
        .catch(function(ex) {
            handleError(dispatch, ex, onError)
        })
}

export function apiPost(dispatch, url, onReceiveData, onError, body) {

    var settings = {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(body)
    }

    return fetch(url, settings)
        .then(response => checkSessionTimeout(response))
        .then(response => dispatch(onReceiveData(response)))
        .catch(function(ex) {
            handleError(dispatch, ex, onError)
        });
}

function handleError(dispatch, ex, onError) {
    if (ex instanceof SessionTimeoutError) {
        dispatch(actions.apiSessionTimeout());
    } else {
        dispatch(actions.apiUnknownError());

        console.log("api error: " + ex.message)

        if (onError) {
            onError(ex)
        }
    }

    dispatch(actions.apiEndRequest())
}

function checkSessionTimeout(response) {
    if (response.status === 401) {
        var error = new SessionTimeoutError(response.statusText);
        error.response = response;
        throw error;
    } else {
        return response;
    }
}

function extractJson(response) {
    if(response.status === 204){
        return null
    }
    return response.json();
}

function SessionTimeoutError(message) {
    this.name = 'SessionTimeoutError';
    this.message = message || 'Session timed out.';
    this.stack = (new Error()).stack;
}

SessionTimeoutError.prototype = Object.create(Error.prototype);
SessionTimeoutError.prototype.constructor = SessionTimeoutError;
