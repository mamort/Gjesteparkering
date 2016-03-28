import { combineReducers } from 'redux'
import {exampleUi, exampleData} from './ReduxExample/reducers/reducers'
import {gjesteparkeringUi, gjesteparkeringData} from './Gjesteparkering/rootReducer'
import { routerReducer } from 'react-router-redux'

const uiReducer = combineReducers({
    example: exampleUi,
    gjesteparkering: gjesteparkeringUi
})

const dataReducer = combineReducers({
    example: exampleData,
    gjesteparkering: gjesteparkeringData
})

export default combineReducers({
    ui: uiReducer,
    data: dataReducer,
    routing: routerReducer
})
 

