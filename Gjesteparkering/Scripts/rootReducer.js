import { combineReducers } from 'redux'
import {exampleUi, exampleData} from './ReduxExample/reducers/reducers'
import parkeringsplass from './Gjesteparkering/App/Parkeringsplass/reducer'
import login from './Gjesteparkering/Login/reducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    login: login,
    parkeringsplass: parkeringsplass,
    routing: routerReducer
})
