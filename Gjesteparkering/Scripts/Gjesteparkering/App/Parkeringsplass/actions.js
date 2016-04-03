import fetch from 'isomorphic-fetch'

export const parkeringsplassNameChanged = (navn) => {
    return {
        type: 'PARKERINGSPLASS_NAME_CHANGED',
        navn
    }  
}

export const parkeringsplassAdded = (parkeringsplass) => {
    return {
        type: 'PARKERINGSPLASS_ADDED',
        parkeringsplass: parkeringsplass
    }  
}

export const createParkeringsplass = () => {
    return (dispatch, getState) => {
        var state = getState();
        var ny = state.parkeringsplass.ny;

        dispatch(parkeringsplassAdded({name: ny.navn}));
    }
}