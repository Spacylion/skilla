import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {AvatarTest} from '@/shared/assets/icons/avatar'
import s from "./Header.module.css"
import BorderLinearProgress from "@/features/progress-bar/ProgressBar.jsx";
import React from "react";

const Header = () => {
    let currentDate = new Date();
    let daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    let dayOfWeek = daysOfWeek[currentDate.getDay()];
    let dayOfMonth = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.date}>
                    {formattedDate}
                </div>
                <div className={s.calls_block}>
                    <div className={s.calls_info}>
                        <div className={s.calls_info__text}>
                            <p>Новые звонки</p>   <span style={{color: '#28A879'}}>20 из 30шт</span>
                        </div>
                        <BorderLinearProgress value={50} color="#28A879"/>

                    </div>
                    <div className={s.calls_info}>
                        <div className={s.calls_info__text}>
                            <p>Качество разговоров</p>  <span style={{color: '#FFD500'}}>40%</span>
                        </div>
                        <div className={s.progress}>
                            <BorderLinearProgress value={40} color="#FFD500"/>
                        </div>
                    </div>
                    <div className={s.calls_info}>
                        <div className={s.calls_info__text}>
                            <p>Конверсия в заказ</p> <span style={{color: '#EA1A4F'}}>67%</span>
                        </div>
                        <BorderLinearProgress value={67} color="#EA1A4F"/>
                    </div>
                </div>
                <div className={s.search_block}>
                    <div>
                        <SearchOutlinedIcon className={`${s.search__icon} ${s.iconHover}`} />
                    </div>
                    <div className={s.search__choose}>
                        <div>
                            <p>ИП Сидорова Александра Михайловна</p>
                        </div>
                        <div>
                            <p>ИП Сидорова Александра Михайловна</p>
                        </div>
                    </div>
                    <div className={s.search__name}>
                        <p>ИП Сидорова Александра Михайловна</p>
                        <ExpandMoreRoundedIcon className={`${s.extend} ${s.iconHover}`} />
                    </div>
                </div>
                <div className={s.user}>
                    <div className={s.avatar_container}>
                        <img src={AvatarTest} className={s.avatar} alt="user avatar" />
                    </div>
                    <div className={s.user__icons}>
                        <ExpandMoreRoundedIcon className={`${s.extend} ${s.iconHover}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
