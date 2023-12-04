import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import CallsDateForm from "./CallsDateForm";
import {
    calculateDates,
    formatDateRange,
    getNextInterval,
    getPreviousInterval
} from "../../../../../features/date-utils/dateUtils.js";
import {setTimeInterval} from "../../../../../app/providers/reducers/timeIntervalReducer.js";

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

    const [showMenu, setShowMenu] = useState(false);
    const [enteredDate, setEnteredDate] = useState('');

    const toggleMenu = () => setShowMenu(!showMenu);

    const selectInterval = (interval) => {
        setShowMenu(false);
        handleIntervalSelect(interval);
    };

    const handleInputChange = (e) => {
        setEnteredDate(e.target.value);
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
            toggleMenu={toggleMenu}
            showMenu={showMenu}
            handleNextInterval={handleNextInterval}
            handlePreviousInterval={handlePreviousInterval}
            selectInterval={selectInterval}
            selectedInterval={selectedInterval}
            dateRange={formattedDateRange}
        />
    );
};

const mapStateToProps = ({callIntervalFilter}) => ({
    selectedInterval: callIntervalFilter.interval,
    date_start: callIntervalFilter.date_start,
    date_end: callIntervalFilter.date_end,
});

const mapDispatchToProps = (dispatch) => ({
    updateInterval: (selectedInterval) => dispatch(setTimeInterval(selectedInterval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CallsDateFormContainer);
