import { browserHistory } from 'react-router'

export const loginHandler = (location) => {
    var isLoggedIn = false;

    console.log(JSON.stringify(location));

    if (!isLoggedIn && 
        location.pathname !== '/Gjesteparkering/Logg-inn' && 
        location.pathname !== '/Gjesteparkering/Registrer-deg') {
        
        browserHistory.push('/Gjesteparkering/Logg-inn');
    }
}