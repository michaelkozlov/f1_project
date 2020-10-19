import React from "react";
import {NavLink} from "react-router-dom";


const FirstPage=()=>{
    return <div className="main-content">
        <div className="first-page">
            <NavLink to="/current-season"><div className="one">Сезон 2020 года</div></NavLink>
            <NavLink to="/circuits"><div>Circuit</div></NavLink>
            <NavLink to="/race-schedule"><div>Расписание гонок</div></NavLink>
            <div>Qualifying Results</div>
            <div>Driver Information</div>
            <div>Constructor Information</div>
        </div>
    </div>
}

export default FirstPage;