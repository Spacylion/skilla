import React from "react";
import s from './CallTime.module.css';
import {getFormattedCallTimeTime} from "../../../../../features/date-utils/dateUtils.js";

const CallTime = ({call}) => {
    const formattedTime = getFormattedCallTimeTime(call.date);

    return (
        <div className={s.time__container}>
            <p>{formattedTime}</p>
        </div>
    );
};

export default CallTime;
