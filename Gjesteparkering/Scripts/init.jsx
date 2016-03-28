import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

import {exampleUi, exampleData} from './reducers/reducers'
import App from './containers/container'

const uiReducer = combineReducers({
    example: exampleUi
})

const dataReducer = combineReducers({
    example: exampleData
})

const rootReducer = combineReducers({
    ui: uiReducer,
    data: dataReducer
})
 

const view = function () {

    let store = createStore(rootReducer, 
        compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

    render(
          <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};

export default view