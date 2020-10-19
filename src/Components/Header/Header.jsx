import React from "react";
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <span><NavLink to={"/"}>Formula 1 stats</NavLink></span>
            </div>
            <div className={style.top_menu}>
                    <div><a href="#">Main</a></div>
                    <div><a href="#">Href</a></div>
                    <div><a href="http://ergast.com/mrd/">Ergast Api</a></div>
                    <div><a href="#">Contacts</a></div>
            </div>
        </header>
    )
}

export default Header;