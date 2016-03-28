import fetch from 'isomorphic-fetch'

export const testAction = (text) => {
    return {
        type: 'TEST_ACTION',
        text
    }
}
