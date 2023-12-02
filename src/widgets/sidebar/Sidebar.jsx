import React from "react"
import s from "./Sidebar.module.css"
import Navbar from "./navbar/Navbar.jsx";
import {Logo} from '@/shared/assets/icons/sidebar';
import ButtonAdd from "@/shared/ui-components/button/ButtonAdd.jsx";
import ButtonOrder from "@/shared/ui-components/button/ButtonOrder.jsx";

const Sidebar = (props) => {
    return (<div className={s.sidebar}>
        <div className={s.container}>
            <img src={Logo} className={s.logo}/>
        </div>
        <Navbar/>
        <ButtonAdd/>
        <ButtonOrder/>
    </div>)
}

export default Sidebar
