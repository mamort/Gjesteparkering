import { combineReducers } from 'redux'
import parkeringsplass from './Gjesteparkering/Parkeringsplass/reducer'
import login from './Gjesteparkering/Login/reducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    login: login,
    parkeringsplass: parkeringsplass,
    routing: routerReducer
})
