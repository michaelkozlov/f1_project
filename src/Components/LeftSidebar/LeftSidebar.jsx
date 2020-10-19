import React from "react";
import style from "./LeftSidebar.module.css";
import {NavLink} from "react-router-dom";

const LeftSidebar = (props) => {
    return (
        <div>
            <ul className={style.left_menu}>
                <li><NavLink to="/current-season">Сезон 2020 года</NavLink></li>
                <li><NavLink to="/circuits">Circuit</NavLink></li>
                <li>Season List</li>
                <li><NavLink to="/race-schedule">Расписание гонок</NavLink></li>
                <li>Race Results</li>
                <li>Qualifying Results</li>
                <li>Standings</li>
                <li>Driver Information</li>
                <li>Constructor Information</li>
                <li><NavLink to="/news">News</NavLink></li>
            </ul>
        </div>
    )
}

export default LeftSidebar;