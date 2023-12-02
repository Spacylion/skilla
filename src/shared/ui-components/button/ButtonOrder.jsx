import React from "react";
import s from "./ButtonOrder.module.css";
import ButtonAlert from '@/shared/assets/icons/button/alertbutton.svg'

const ButtonOrder = () => {
    return (
        <div className={s.content}>

            <button className={s.container__button}>
                <div className={s.button__block}>
                    <p className={s.button__text}>Оплата</p>
                    <img src={ButtonAlert} alt="" className={s.button__icon}/>
                </div>
            </button>
        </div>
    )
}

export default ButtonOrder;