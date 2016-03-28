import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import GjesteparkeringApp from './Gjesteparkering/app.jsx'
import RegistrerParkeringsplass from './Gjesteparkering/Parkeringsplass/container'
import rootReducer from './rootReducer'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



const view = function () {

    let store = createStore(rootReducer, 
        compose( 
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

    const history = syncHistoryWithStore(browserHistory, store)

    render(
          <Provider store={store}>
            <Router history={history}> 
                <Route path="/Gjesteparkering" component={GjesteparkeringApp}>
                    <Route path="/Registrer-parkeringsplass" component={RegistrerParkeringsplass}/>
                </Route>      
             </Router>
           </Provider>,
        document.getElementById('root')
    );
};

export default view