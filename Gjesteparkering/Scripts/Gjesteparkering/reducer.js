import { combineReducers } from 'redux'

export const gjesteparkeringUi = (state = [], action) => {
    switch (action.type) {
        case '':
            return Object.assign({}, state, {});

        default:
            return state;
    }
}

export const gjesteparkeringData = (state = [], action) => {
    switch (action.type) {
        case '':
            return Object.assign({}, state, {});

        default:
            return state;
    }
}


