import React from "react";
import s from './CallType.module.css';
import Outgoing from "@/shared/assets/icons/phone/outgoing.svg";
import Incoming from "@/shared/assets/icons/phone/incoming.svg";

const CallType = ({call}) => {
    const typeImg = call.in_out === 0
        ? <img src={Outgoing} alt="Outgoing Call"/>
        : <img src={Incoming} alt="Incoming Call"/>;

    const typeName = call.in_out === 0
        ? "Исходящие" : "Входящие";

    return (
        <div className={s.title__item}>
            <p>{typeImg} </p>
        </div>
    );
};

export default CallType;
