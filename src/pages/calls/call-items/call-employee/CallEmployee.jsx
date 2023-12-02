import React from "react";
import s from './CallEmployee.module.css';

const CallEmployee = ({call}) => {
    return (
        <div className={s.title__item}>
            <img src={call.person_avatar} alt=""/>
        </div>
    );
};

export default CallEmployee;