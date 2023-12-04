import React from "react";
import s from './CallEmployee.module.css';

const CallEmployee = ({call}) => {
    return (
        <div className={s.title__item}>
            {call.person_avatar
                && <img className={s.employee_img} src={call.person_avatar} alt=""/>}
        </div>
    );
};

export default CallEmployee;
