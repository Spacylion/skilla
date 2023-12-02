import {FETCH_RECORD} from '../actions/actions.js';
import {getRecordAPI} from "@/shared/api/recordAPI.ts";

let initialState = {
    record: "",
    partnership_id: "",
};

export const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECORD:
            return {
                ...state,
                record: action.payload.record,
                partnership_id: action.payload.partnership_id,
                error: null,
            };
        default:
            return state;
    }
};
// actionsCreators
const fetchRecordAC = (record, partnership_id) => ({
    type: FETCH_RECORD,
    payload: {record, partnership_id}
});

// thunks creators
export const getRecord = (record, partnership_id) => {
    return async (dispatch) => {
        try {
            const results = await getRecordAPI(record, partnership_id);
            dispatch(fetchRecordAC(results));
        } catch (error) {
            dispatch({
                type: 'FETCH_RECORD_FAILURE',
                payload: error.message
            });
        }
    };
};