import React from "react";
import s from './CallsConfigs.module.css';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import CallsDateFormContainer from "./calendar-form/CallsDateFormContainer.jsx";

const CallsConfigs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.shared__settings}>
                    <div className={s.balance}>
                        <button className={s.balance__button}>
                            <div className={s.balance__content}>
                                <p>Баланс:</p>
                                <span>272 ₽</span>
                            </div>
                            <AddCircleOutlinedIcon className={s.balance_add}/>
                        </button>
                    </div>
                    <CallsDateFormContainer/>
                </div>
            </div>
        </div>
    );
};

export default CallsConfigs;
