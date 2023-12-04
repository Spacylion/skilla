import React from "react";
import s from './CallDuration.module.css';
import {formatTime} from "../../../../../features/date-utils/dateUtils.js";

const CallDuration = ({call}) => {


    return (
        <div className={s.title__item}>
            <p>{formatTime(call.time)}</p>
        </div>
    );
};

export default CallDuration;