import React from "react";
import style from "./News.module.css";

const News = (props)=>{
    return <div>
        <h1>News</h1>
        {props.newsTitle.map(el => <div className={style.text}>{el}</div>)}
        </div>
}

export default News;