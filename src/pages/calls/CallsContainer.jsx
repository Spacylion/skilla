import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Calls from "./Calls";
import {fetchCalls} from "../../app/providers/reducers/callsReducer.js";
import {setCallTypeFilter} from "../../app/providers/reducers/callsTypesFilterReducer.js";
import {fetchRecord} from "../../app/providers/reducers/recordReducer.js";

const CallsContainer = () => {
    const dispatch = useDispatch();
    const date_start = useSelector(state => state.callIntervalFilter.date_start);
    const date_end = useSelector(state => state.callIntervalFilter.date_end);
    const in_out = useSelector(state => state.callTypeFilter.in_out);
    const call_type = useSelector(state => state.callTypeFilter.call_type);
    const limit = useSelector(state => state.callsPage.limit);
    const calls = useSelector(state => state.callsPage.calls.results);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        dispatch(fetchCalls(date_start, date_end, in_out, call_type, limit));
    }, [dispatch, date_start, date_end, in_out, call_type, limit]);

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        dispatch(setCallTypeFilter({call_type: type}));
    };

    const handleRecordFetch = (recordId, partnershipId) => {
        // Здесь запускаем получение записей звонков по ID
        dispatch(fetchRecord(recordId, partnershipId));
    };

    return (
        <Calls
            calls={calls}
            selectedType={selectedType}
            handleTypeSelect={handleTypeSelect}
            handleRecordFetch={handleRecordFetch}
        />
    );
};

export default CallsContainer;
