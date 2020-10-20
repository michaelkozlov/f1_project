import React from "react";
import style from "./News.module.css";

const News=(props)=>{
    debugger;
    return <div>
        <h1>News</h1>
        <div className={style.newsBlockWrapper}>
        {props.news.map(el=>{
            return (
                <div className={style.newsBlock}>
                    <div className={style.left}>
                        <img src={`${el.urlToImage}`} alt=""/>
                    </div>
                    <div className={style.right}>
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                        <p>{el.publishedAt}</p>
                        <a href={`${el.url}`}>{el.url}</a>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
}
export default News;