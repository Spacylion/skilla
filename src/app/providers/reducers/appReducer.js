import {GET_GLOBAL_ERROR, SET_INITIALIZED} from "../actions/actions.js";

const initialState = {
    initialized: false,
    globalError: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            };
        }
        case GET_GLOBAL_ERROR: {
            return {
                ...state,
                globalError: action.error,
            };
        }
        default:
            return state;
    }
};

// actionsCreators
export const initializationSuccess = () => ({
    type: SET_INITIALIZED,
});
export const getGlobalError = (error) => ({
    type: GET_GLOBAL_ERROR,
    error,
});

export const initializeApp = () => (dispatch) => {
    dispatch(initializationSuccess());
};

// thunks creators
export const handleGlobalError = (eventReason) => (dispatch) => {
    dispatch(getGlobalError(eventReason));
    return new Promise((resolve) => {
        setTimeout(() => {
            dispatch(getGlobalError(null));
            resolve();
        }, 3000);
    });
};
