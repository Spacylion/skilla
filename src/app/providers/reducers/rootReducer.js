import {combineReducers} from 'redux';
import {appReducer} from "@/app/providers/reducers/appReducer.js";
import {callsReducer} from "@/app/providers/reducers/callsReducer.js";
import {callTypeFilterReducer} from "@/app/providers/reducers/callsTypesFilterReducer.js";
import {timeIntervalReducer} from "@/app/providers/reducers/timeIntervalReducer.js";
import recordReducer from "@/app/providers/reducers/recordReducer.js";

const rootReducer = combineReducers({
    app: appReducer,
    callsPage: callsReducer,
    recordItem: recordReducer,
    callTypeFilter: callTypeFilterReducer,
    callIntervalFilter: timeIntervalReducer
});

export {rootReducer};

