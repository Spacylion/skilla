import React from "react";
import s from './CallType.module.css';
import Outgoing from "@/shared/assets/icons/phone/outgoing.svg";
import Incoming from "@/shared/assets/icons/phone/incoming.svg";

const CallType = ({in_out}) => {
    return (
        <div className={s.title__item}>
            <p>
                {in_out === 0
                    ? (<img src={Outgoing} alt=""/>)
                    : (<img src={Incoming} alt=""/>)
                }</p>


        </div>
    );
};

export default CallType;