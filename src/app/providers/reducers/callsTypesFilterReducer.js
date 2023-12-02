import { SET_CALL_TYPE_FILTER } from "@/app/providers/actions/actions.js";

export const callTypeFilterReducer = (state = null, action) => {
    switch (action.type) {
        case SET_CALL_TYPE_FILTER:
            return action.payload;
        default:
            return state;
    }
};