import fetch from 'isomorphic-fetch'

export const loginEmailChanged = (email) => {
    return {
        type: 'LOGIN_EMAIL_CHANGED',
        email
    }  
}

export const loginPasswordChanged = (password) => {
    return {
        type: 'LOGIN_PASSWORD_CHANGED',
        password
    }  
}
