import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import Layout from './Gjesteparkering/layout.jsx'
import RegistrerParkeringsplassPage from './Gjesteparkering/Parkeringsplass/container'
import LoginPage from './Gjesteparkering/Login/container'
import SignupPage from './Gjesteparkering/Signup/container'
import { loginHandler } from './Gjesteparkering/Login/utils'
import rootReducer from './rootReducer'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const view = function () {

    let store = createStore(rootReducer, 
        compose( 
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

    const history = syncHistoryWithStore(browserHistory, store);
    history.listen(location => loginHandler(location, store));

    render(
          <Provider store={store}>
            <Router history={history}> 
                <Route path='/Gjesteparkering/Logg-inn' component={LoginPage}/> 
                <Route path='/Gjesteparkering/Registrer-deg' component={SignupPage}/>
                <Route path='/Gjesteparkering' component={Layout}>
                    <Route path='Registrer-parkeringsplass' component={RegistrerParkeringsplassPage}/>                  
                </Route>      
             </Router>
           </Provider>,
        document.getElementById('root')
    );
};

export default view