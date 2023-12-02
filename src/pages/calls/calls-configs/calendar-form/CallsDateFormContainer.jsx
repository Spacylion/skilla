// CallsDateFormContainer.js
import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import CallsDateForm from "./CallsDateForm";
import {setTimeInterval} from "../../../../app/providers/reducers/timeIntervalReducer.js";
import {
    calculateDates,
    formatDateRange,
    getNextInterval,
    getPreviousInterval
} from "../../../../app/providers/actions/dateUtils.js";


const CallsDateFormContainer = ({
                                    selectedInterval,
                                    date_start,
                                    date_end,
                                    updateInterval
                                }) => {
    const [formattedDateRange, setFormattedDateRange] = useState('');

    const handleIntervalSelect = (interval) => {
        updateInterval(interval);
        const {date_start, date_end} = calculateDates(interval);
        setFormattedDateRange(formatDateRange(date_start, date_end));
    };

    const handleNextInterval = () => {
        const nextInterval = getNextInterval(selectedInterval);
        handleIntervalSelect(nextInterval);
    };

    const handlePreviousInterval = () => {
        const previousInterval = getPreviousInterval(selectedInterval);
        handleIntervalSelect(previousInterval);
    };

    useEffect(() => {
        setFormattedDateRange(formatDateRange(date_start, date_end));
    }, [date_start, date_end]);

    return (
        <CallsDateForm
            handleIntervalSelect={handleIntervalSelect}
            handleNextInterval={handleNextInterval}
            handlePreviousInterval={handlePreviousInterval}
            selectedInterval={selectedInterval}
            dateRange={formattedDateRange} // Обновлено использование formattedDateRange
        />
    );
};

const mapStateToProps = (state) => ({
    selectedInterval: state.callIntervalFilter.interval,
    date_start: state.callIntervalFilter.date_start,
    date_end: state.callIntervalFilter.date_end,
});

const mapDispatchToProps = (dispatch) => ({
    updateInterval: (selectedInterval) => dispatch(setTimeInterval(selectedInterval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CallsDateFormContainer);
