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
                            <p>Баланс:</p><span>272 ₽</span>
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
