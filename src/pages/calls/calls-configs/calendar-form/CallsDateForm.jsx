import React, {useState} from "react";
import s from './CallsDateForm.module.css';
import {CalendarTodayOutlinedIcon} from '@/shared/assets/icons/common';
import {ArrowBackIosNewOutlinedIcon, ArrowForwardIosOutlinedIcon} from "@/shared/assets/icons/common/index.js";

const CallsDateForm = ({
                           handleIntervalSelect,
                           selectedInterval,
                           handleNextInterval,
                           handlePreviousInterval,
                           dateRange
                       }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [enteredDate, setEnteredDate] = useState('');

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const selectInterval = (interval) => {
        setShowMenu(false);
        handleIntervalSelect(interval);
    };

    const handleInputChange = (e) => {
        setEnteredDate(e.target.value);
        // Добавьте здесь логику для обработки изменения введенной даты
    };

    return (
        <div className={s.date__picker}>
            <ArrowBackIosNewOutlinedIcon className={s.date__arrow} onClick={handlePreviousInterval}/>
            <div className={s.date__calendar} onClick={toggleMenu}>
                <CalendarTodayOutlinedIcon className={s.date__icon}/>
                <p>{selectedInterval}</p>
            </div>
            <ArrowForwardIosOutlinedIcon className={s.date__arrow} onClick={handleNextInterval}/>

            {showMenu && (
                <div className={s.date__choose}>
                    <div className={s.choose}>
                        <div className={s.choose__item} onClick={() => selectInterval('3 Дня')}>
                            <p>3 дня</p>
                        </div>
                        <div className={s.choose__item} onClick={() => selectInterval('Неделя')}>
                            <p>Неделя</p>
                        </div>
                        <div className={s.choose__item} onClick={() => selectInterval('Месяц')}>
                            <p>Месяц</p>
                        </div>
                        <div className={s.choose__item} onClick={() => selectInterval('Год')}>
                            <p>Год</p>
                        </div>
                        <div className={s.input__text}>
                            <p>Указать даты </p>
                        </div>
                        <div className={s.inputContainer}>
                            <input
                                name="enteredDate"
                                type="text"
                                placeholder="__.__.__-__.__.__"
                                maxLength="14"
                                className={s.input}
                                value={dateRange}
                                onChange={(e) => {
                                }}
                            />
                            <CalendarTodayOutlinedIcon className={s.calendarIcon}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CallsDateForm;
