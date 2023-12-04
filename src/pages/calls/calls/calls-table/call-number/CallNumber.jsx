import React from "react";
import s from './CallNumber.module.css';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone.js";
import LanguageIcon from '@mui/icons-material/Language';

const CallNumber = ({call, isHovered}) => {
    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (match) {
            return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
        }
        return phoneNumber;
    };

    return (
        <div className={`${s.title__item} ${isHovered ? s.active : ""}`}>
            <div className={s.icon__wrapper}>
                <LanguageIcon className={`${s.web__icon} ${isHovered ? s.active : ""}`}/>
                <LocalPhoneIcon className={`${s.phone__icon} ${isHovered ? s.active : ""}`}/>
                <p>{formatPhoneNumber(call.partner_data.phone)}</p>
            </div>
        </div>
    );
};

export default CallNumber;
