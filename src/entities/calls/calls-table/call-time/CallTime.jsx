import React from "react";
import s from './CallTime.module.css';
import {formatTime} from "../../../../app/providers/actions/dateUtils.js";


const CallTime = ({call}) => {
    const formattedTime = formatTime(call.time);

    return (
        <div className={s.title__item}>
            <p>{formattedTime}</p>
        </div>
    );
};

export default CallTime;