import React from "react";
import style from "./LeftSidebar.module.css";

const LeftSidebar = (props) => {
    return (
        <div>
            <ul className={style.left_menu}>
                <li>Season List</li>
                <li>Race Schedule</li>
                <li>Race Results</li>
                <li>Qualifying Results</li>
                <li>Standings</li>
                <li>Driver Information</li>
                <li>Constructor Information</li>
            </ul>
        </div>
    )
}

export default LeftSidebar;