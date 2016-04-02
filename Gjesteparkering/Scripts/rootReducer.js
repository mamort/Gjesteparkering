import { combineReducers } from 'redux'
import {exampleUi, exampleData} from './ReduxExample/reducers/reducers'
import parkeringsplass from './Gjesteparkering/Parkeringsplass/reducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    parkeringsplass: parkeringsplass,
    routing: routerReducer
})
