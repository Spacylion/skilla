import React from "react";
import s from './CallTime.module.css';

const CallTime = ({call}) => {
    return (
        <div className={s.title__item}>
            <p>{call.time}</p>
        </div>
    );
};

export default CallTime;