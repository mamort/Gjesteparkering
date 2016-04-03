export const actionTypes = {
    API_SESSION_TIMEOUT: 'API_SESSION_TIMEOUT',
    API_UNKNOWN_ERROR: 'API_UNKNOWN_ERROR',
    API_BEGIN_REQUEST: 'API_BEGIN_REQUEST',
    API_END_REQUEST: 'API_END_REQUEST'
}

export const actions = {
    apiSessionTimeout: () => {
        return {
            type: actionTypes.API_SESSION_TIMEOUT
        }
    },

    apiUnknownError: () => {
        return {
            type: actionTypes.API_UNKNOWN_ERROR
        }
    },

    apiBeginRequest: () => {
        return {
            type: actionTypes.API_BEGIN_REQUEST
        }
    },

    apiEndRequest: () => {
        return {
            type: actionTypes.API_END_REQUEST
        }
    }
}