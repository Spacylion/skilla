import React from "react";
import s from './Calls.module.css';
import CallItem from "./call-items/CallItem.jsx";
import CallsConfigs from "./calls-configs/CallsConfigs.jsx";
import CallsFilters from "./calls-filters/CallFilters.jsx";

const Calls = ({calls, handleTypeSelect, selectedType, handleRecordFetch}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <CallsConfigs/>
                <CallsFilters
                    calls={calls}
                    selectedType={selectedType}
                    handleTypeSelect={handleTypeSelect}
                />
                <div className={s.calls}>
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
                    {calls && calls.length > 0 ? (
                            calls.map((call) =>
                                (<CallItem
                                    key={call.id} call={call}
                                    handleRecordFetch={handleRecordFetch}
                                />)))
                        : (<p>No calls available</p>)}
                </div>
            </div>
        </div>
    );
}

export default Calls;
