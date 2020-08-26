import React from "react";
import style from "./Header.module.css";

const Header = () =>{
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <span>F1 history</span>
            </div>
            <div className={style.top_menu}>
                    <div><a href="#">Main</a></div>
                    <div><a href="#">Href</a></div>
                    <div><a href="#">Api</a></div>
                    <div><a href="#">Contacts</a></div>
            </div>
        </header>
    )
}

export default Header;