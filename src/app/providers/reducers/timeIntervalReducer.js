import {SET_TIME_INTERVAL, UPDATE_CALLS_DATES} from "@/app/providers/actions/actions.js";
import {calculateDates, calculateEndDate, calculateStartDate} from "@/app/providers/actions/dateUtils.js";

const initialState = {
    interval: '3 Дня',
    date_start: null,
    date_end: null,
};
export const timeIntervalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TIME_INTERVAL:
            return {
                ...state,
                interval: action.payload.interval,
                date_start: action.payload.date_start,
                date_end: action.payload.date_end,
                selectedInterval: action.payload.interval,
            };
        default:
            return state;
    }
};

export const setTimeInterval = (selectedInterval) => (dispatch) => {
    const {date_start, date_end} = calculateDates(selectedInterval);
    dispatch({
        type: SET_TIME_INTERVAL,
        payload: {
            interval: selectedInterval,
            date_start,
            date_end,
        },
    });
    dispatch(updateCallsDates(date_start, date_end));
};

export const updateCallsDates = (date_start, date_end) => ({
    type: UPDATE_CALLS_DATES,
    payload: {date_start, date_end},
});
