import {FETCH_RECORD_FAILURE, FETCH_RECORD_REQUEST, FETCH_RECORD_SUCCESS} from "@/app/providers/actions/actions.js";

const initialState = {
    recordUrls: [], // Изменяем запись на массив
    loading: false,
    error: null,
};

export const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECORD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RECORD_SUCCESS:
            return {
                ...state,
                loading: false,
                recordUrls: action.payload.recordUrls,
            };
        case FETCH_RECORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default recordReducer;

// AC
export const fetchRecordRequest = () => ({
    type: FETCH_RECORD_REQUEST,
});

export const fetchRecordSuccess = (recordUrls) => ({
    type: FETCH_RECORD_SUCCESS,
    payload: {
        recordUrls,
    },
});

export const fetchRecordFailure = (error) => ({
    type: FETCH_RECORD_FAILURE,
    payload: error,
});

// thunks creator
export const fetchRecord = () => async (dispatch, getState) => {
    dispatch(fetchRecordRequest());
    try {
        const calls = getState().callsPage.calls.results;
        const recordUrls = calls.map(call => call.record);
        dispatch(fetchRecordSuccess(recordUrls));
    } catch (error) {
        dispatch(fetchRecordFailure(error.message));
    }
};