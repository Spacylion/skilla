import React from "react";
import s from './CallDuration.module.css';

const CallDuration = ({call}) => {
    const getFormattedTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        return date.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});
    };

    return (
        <div className={s.title__item}>
            <p>{getFormattedTime(call.date)}</p>
        </div>
    );
};

export default CallDuration;