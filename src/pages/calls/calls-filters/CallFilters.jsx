import React, {useState} from "react";
import s from './CallsFilters.module.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const CallsFilters = ({ calls, record, handleTypeSelect }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedType, setSelectedType] = useState(''); // State to store selected call type

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleTypeFilter = (type) => {
        setSelectedType(type);
        handleTypeSelect(type); // Pass selected type to the handler in the parent component
    };
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.filters}>
                    <div className={s.search_menu}>
                        <SearchOutlinedIcon className={s.search__icon} alt="search"/>
                        <p>Поиск по звонкам</p>
                    </div>
                    <div className={s.filter_toggles}>
                        <div className={s.reset}>
                            <p>Сбросить фильтры</p>
                            <CloseRoundedIcon className={`${s.close} ${s.icon}`}/>
                        </div>
                        <div className={s.filter_section}>
                            <div className={s.filter__type}>
                                <div className={s.filter} onClick={handleToggleMenu}>
                                    <p>Все типы</p>

                                    {showMenu ? (
                                        <ExpandLessRoundedIcon className={`${s.expand} ${s.icon}`}/>
                                    ) : (
                                        <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                                    )}
                                </div>
                                {showMenu && (
                                    <div className={s.type__menu}>
                                        <div className={s.choose}>
                                            <div className={s.choose__item} onClick={() => handleTypeFilter('Все типы')}>
                                                <p>Все типы</p>
                                            </div>
                                            <div className={s.choose__item} onClick={() => handleTypeFilter('Исходящие')}>
                                                <p>Исходящие</p>
                                            </div>
                                            <div className={s.choose__item} onClick={() => handleTypeFilter('Входящие')}>
                                                <p>Входящие</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            < /div>
                            <div className={s.filter}>
                                <p>Все сотрудники</p>
                                <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                            </div>
                            <div className={s.filter}>
                                <p>Все звонки</p>
                                <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                            </div>
                            <div className={s.filter}>
                                <p>Все источники</p>
                                <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                            </div>
                            <div className={s.filter}>
                                <p>Все оценки</p>
                                <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                            </div>
                            <div className={s.filter}>
                                <p>Все ошибки</p>
                                <ExpandMoreRoundedIcon className={`${s.extand} ${s.icon}`}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CallsFilters
