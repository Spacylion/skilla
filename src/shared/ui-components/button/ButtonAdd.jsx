import React from "react";
import s from "./ButtonAdd.module.css";
import ButtonAddOrder from '@/shared/assets/icons/common/plus_btn.svg'

const ButtonAdd = () => {
    return (<div className={s.content}>
        <button className={s.container__button}>
            <div className={s.button__block}>
                <p className={s.button__text}>Добавить заказ</p>
                <img src={ButtonAddOrder} alt="" className={s.button__icon}/>
            </div>
        </button>
    </div>)
}

export default ButtonAdd;