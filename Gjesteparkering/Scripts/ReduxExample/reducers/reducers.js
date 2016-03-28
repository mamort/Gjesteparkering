import { combineReducers } from 'redux'

export const exampleData = (state = [], action) => {
    switch (action.type) {
        case 'TEST_ACTION':
            return Object.assign({}, state, {
                test: "Heisann"
            });

        default:
            return state;
    }
}

const shared = (state = [], action) => {
    switch (action.type) {
        case 'REQUEST_DATA':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'RECIEVE_DATA':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            });

        default:
            return state;
    }
}


const exampleForm = (state = [], action) => {
    switch (action.type) {
    case 'EXAMPLE_FORM_SUBMIT':
        return Object.assign({}, state, {
            isSubmitted: true,
            data: action.data
        });

        default:
            return state;
    }
}

export const exampleUi = combineReducers({
    shared,
    exampleForm
})