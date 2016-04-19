import { browserHistory } from 'react-router'
import {userLoggedIn} from './actions'
import {isSessionValid, getSessionUser} from './session'

export const loginHandler = (location, store) => {
    var state = store.getState();
    var isLoggedIn = state.login.isLoggedIn;

    if (isSessionValid()) {
        if (!isLoggedIn) {
            store.dispatch(userLoggedIn(getSessionUser()));     
        }
    }

    if (!isLoggedIn &&
        location.pathname !== '/Gjesteparkering/Logg-inn' &&
        location.pathname !== '/Gjesteparkering/Registrer-deg') {

        browserHistory.push('/Gjesteparkering/Logg-inn');
    }

    if (isLoggedIn &&
        (location.pathname === '/Gjesteparkering/Logg-inn' || 
        location.pathname === '/Gjesteparkering/Registrer-deg')) {

        browserHistory.push('/Gjesteparkering');
    }
}