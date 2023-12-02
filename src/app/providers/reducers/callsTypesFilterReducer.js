import {SET_CALL_TYPE_FILTER} from "@/app/providers/actions/actions.js";

export const initialState = {
    in_out: null,
    call_type: "",
};

export const callTypeFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALL_TYPE_FILTER:
            const {call_type} = action.payload;
            let in_out = null;

            switch (call_type) {
                case 'Исходящие':
                    in_out = "0";
                    break;
                case 'Входящие':
                    in_out = "1";
                    break;
                default:
                    in_out = "";
            }

            return {
                ...state,
                in_out,
                call_type,
            };
        default:
            return state;
    }
};

export const setCallTypeFilter = (filter) => ({
    type: SET_CALL_TYPE_FILTER,
    payload: filter,
});
