import fetch from 'isomorphic-fetch'

export const testAction = (text) => {
    return {
        type: 'TEST_ACTION',
        text
    }
}

export const buttonClick = (id) => {
    return {
        type: 'BUTTON_ACTION',
        id
    }
}

export const exampleFormSubmit = () => {
    return {
        type: 'EXAMPLE_FORM_SUBMIT'
    }
}

export const fetchData = (filter) => {
    return dispatch => {

        dispatch(requestData(filter));
        return fetch('http://localhost/Gjesteparkering/Api/Data') 
            .then(req => req.json())
            .then(json => dispatch(receiveData(filter, json)));
    }
}

export const requestData = (filter) => {
    return {
        type: 'REQUEST_DATA',
        filter
    }
}

export const receiveData = (filter, data) => {
    return {
        type: 'RECIEVE_DATA',
        filter,
        data
    }
}