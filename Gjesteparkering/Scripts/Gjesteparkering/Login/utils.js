import { browserHistory } from 'react-router'

export const loginHandler = (location, store) => {
    var state = store.getState();
    var isLoggedIn = state.login.isLoggedIn;

    console.log(JSON.stringify(location));

    if (!isLoggedIn && 
        location.pathname !== '/Gjesteparkering/Logg-inn' && 
        location.pathname !== '/Gjesteparkering/Registrer-deg') {
        
        browserHistory.push('/Gjesteparkering/Logg-inn');
    }
}