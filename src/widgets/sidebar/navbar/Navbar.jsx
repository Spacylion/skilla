import React, {useState, useEffect} from "react";
import s from "./Navbar.module.css";
import {NavLink, useLocation} from "react-router-dom";
import {
    TimelineIcon, DoneAllIcon, MailOutlineOutlinedIcon, CallOutlinedIcon,
    PeopleAltOutlinedIcon, DescriptionOutlinedIcon, PermIdentityOutlinedIcon,
    WorkOutlineOutlinedIcon, LocalLibraryOutlinedIcon, SettingsOutlinedIcon
} from '@/shared/assets/icons/sidebar';
import ActiveIcon from '@/shared/assets/icons/sidebar/active.png';

const links = [
    {to: '/results', icon: TimelineIcon, label: 'Итоги'},
    {to: '/orders', icon: DoneAllIcon, label: 'Заказы'},
    {to: '/messages', icon: MailOutlineOutlinedIcon, label: 'Сообщения'},
    {to: '/calls', icon: CallOutlinedIcon, label: 'Звонки'},
    {to: '/contragents', icon: PeopleAltOutlinedIcon, label: 'Контрагенты'},
    {to: '/documents', icon: DescriptionOutlinedIcon, label: 'Документы'},
    {to: '/performers', icon: PermIdentityOutlinedIcon, label: 'Исполнители'},
    {to: '/reports', icon: WorkOutlineOutlinedIcon, label: 'Отчеты'},
    {to: '/knowledge', icon: LocalLibraryOutlinedIcon, label: 'Базы знаний'},
    {to: '/settings', icon: SettingsOutlinedIcon, label: 'Настройки'},
];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');
    const location = useLocation();

    const handleNavLinkClick = (link) => {
        setActiveLink(link); // Update the activeLink state directly upon clicking NavLink
    };

    useEffect(() => {
        const pathname = location.pathname;
        setActiveLink(pathname);
    }, [location]);

    return (
        <nav className={s.nav}>
            {links.map(({to, icon: Icon, label}) => (
                <div key={label} className={`${s.nav__item} ${activeLink === to
                    ? s.active
                    : ''}
                    `}>
                    <NavLink
                        to={to}
                        className={s.link}
                        onClick={() => handleNavLinkClick(to)}
                    >
                        <Icon/>
                        <p>{label}</p>
                    </NavLink>
                    {activeLink === to && (
                        <div>
                            <div className={s.leftIndicator}></div>
                            <img src={ActiveIcon} alt="Active Icon" className={s.activeIcon}/>
                        </div>
                    )}
                </div>
            ))}
        </nav>
    )
}

export default Navbar;