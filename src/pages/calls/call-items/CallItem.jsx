import React, {useState} from "react";
import s from './CallItem.module.css';
import CallRecord from "./record-item/CallRecord.jsx";
import CallType from "./call-type/CallType.jsx";
import CallDuration from "./call-duration/CallDuration.jsx";
import CallEmployee from "./call-employee/CallEmployee.jsx";
import CallNumber from "./call-number/CallNumber.jsx";
import CallSource from "./call-source/CallSource.jsx";
import CallTime from "./call-time/CallTime.jsx";
import CallRate from "./call-rate/CallRate.jsx";

const CallItem = ({call}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <div className={s.filter__title}>
                <div className={s.filter__item}>
                    <p>Тип</p>
                </div>
                <div className={s.filter__item}>
                    <p>Время</p>
                </div>
                <div className={s.filter__item}>
                    <p>Сотрудник</p>
                </div>
                <div className={s.filter__item}>
                    <p>Звонок</p>
                </div>
                <div className={s.filter__item}>
                    <p>Источник</p>
                </div>
                <div className={s.filter__item}>
                    <p>Оценка</p>
                </div>
                <div className={s.filter__item}>
                    <p>Длительность</p>
                </div>
            </div>
            <div key={call.id}>
                <div className={s.border}></div>
                <div className={s.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <CallType call={call}/>
                    <CallDuration call={call}/>
                    <CallEmployee call={call}/>
                    <CallNumber call={call}/>
                    <CallSource call={call}/>
                    <CallRate call={call}/>
                    <CallRecord call={call}/>
                    <CallTime call={call}/>
                </div>
            </div>
        </div>
    );
};

export default CallItem;