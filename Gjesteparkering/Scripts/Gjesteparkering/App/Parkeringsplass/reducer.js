import { combineReducers } from 'redux'

export const nyParkeringsplass = (state = {}, action) => {
    switch (action.type) {
        case 'PARKERINGSPLASS_NAME_CHANGED':
            return Object.assign({}, state, {navn: action.navn});
        case 'PARKERINGSPLASS_ADDED':
            return {};
        default:
            return state;
    }
}

export const parkeringsplasser = (state = [], action) => {
    switch (action.type) {
        case 'PARKERINGSPLASS_ADDED':
            var parkeringsplasser = state.slice(0);

            parkeringsplasser.push(action.parkeringsplass);
            return Object.assign({}, state, parkeringsplasser);

        default:
            return state;
    }
}

export default combineReducers({
    ny: nyParkeringsplass,
    parkeringsplasser: parkeringsplasser
})