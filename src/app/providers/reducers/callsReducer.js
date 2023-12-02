// callsReducer.js
import {FETCH_CALLS_FAILURE, FETCH_CALLS_REQUEST, FETCH_CALLS_SUCCESS} from "@/app/providers/actions/actions.js";
import {getCallsListAPI} from "@/shared/api/callsAPI";
import {calculateDates, calculateEndDate, calculateStartDate} from "@/app/providers/actions/dateUtils.js";


const initialStartDate = calculateStartDate();
const initialEndDate = calculateEndDate();

export const initialState = {
    calls: [],
    error: null,
    loading: false,
    in_out: 0,
    limit: 100,
};

export const callsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CALLS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CALLS_SUCCESS:
            return {
                ...state,
                loading: false,
                calls: {
                    ...state.calls,
                    results: action.payload.results
                }
            };
        case FETCH_CALLS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };


        default:
            return state;
    }
};
export const fetchCallsRequest = () => ({
    type: FETCH_CALLS_REQUEST,
});

export const fetchCallsSuccess = (data) => ({
    type: FETCH_CALLS_SUCCESS,
    payload: data,
});

export const fetchCallsFailure = (error) => ({
    type: FETCH_CALLS_FAILURE,
    payload: error,
});


export const fetchCalls = () => async (dispatch, getState) => {
    try {
        const {limit} = getState().callsPage;
        const in_out = getState().callTypeFilter;

        // Преобразование дат в нужный формат
        const {date_start, date_end} = calculateDates(getState().callIntervalFilter.selectedInterval);

        // Создание новых объектов Date
        const formattedStartDate = new Date(date_start);
        const formattedEndDate = new Date(date_end);

        console.log('Request start date:', formattedStartDate);
        console.log('Request end date:', formattedEndDate);
        console.log('Request in_out:', in_out);
        console.log('Request limit:', limit);

        const response = await getCallsListAPI.getCalls(formattedStartDate, formattedEndDate, in_out, limit);
        console.log('Response from server:', response);

        dispatch(fetchCallsSuccess(response));
        console.log('Request params:', {date_start, date_end, in_out, limit});
    } catch (error) {
        dispatch(fetchCallsFailure(error.message));
    }
};
