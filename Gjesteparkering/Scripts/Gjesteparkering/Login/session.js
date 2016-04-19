import Constants from '../constants'

export function isSessionValid() {
    if (supportsLocalStorage()) {
        const isLoggedIn = sessionStorage.getItem(Constants.LoginSessionKey);
        if (isLoggedIn === 'true') {
            return true;
        }
    }
    return false;
}

export function getSessionUser() {
    if (isSessionValid() && supportsLocalStorage()) {
        return sessionStorage.getItem(Constants.LoginSessionUserKey);
    }

    return '';
}

export function startSession(user) {
    if(supportsLocalStorage()) {
        sessionStorage.setItem(Constants.LoginSessionKey, 'true');
        sessionStorage.setItem(Constants.LoginSessionUserKey, user);
    }
}

export function endSession() {
    if(supportsLocalStorage()) {
        sessionStorage.setItem(Constants.LoginSessionKey, 'false');
        sessionStorage.setItem(Constants.LoginSessionUserKey, '');
    }
}

function supportsLocalStorage() {
    return typeof(Storage) !== "undefined";
}