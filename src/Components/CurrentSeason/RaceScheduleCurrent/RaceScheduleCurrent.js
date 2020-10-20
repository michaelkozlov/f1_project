import React from "react";
import {Table} from 'antd';
import 'antd/dist/antd.css';

const RaceScheduleCurrent=(props)=>{


    let today = new Date();
    let currentDate = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
    let filterRace = props.dataSource.map(race => +race.date.split("-").join("")).filter((el) => el >= +currentDate);
    let nextRace = props.dataSource.filter(el => +el.date.split("-").join("") === filterRace[0]);

    return <div>
        <h1 className="h1_main_content">Календарь сезона 2020</h1>
        <div className="next-race">
            <p>Следующая гонка сезона:</p>
            <p>{nextRace.length ?
                nextRace[0].round + " " + nextRace[0].raceName + " " + nextRace[0].date + " " +  nextRace[0].circuit: ""}
                </p>
        </div>
        <div className="table_container">
            <Table width="100px" dataSource={props.dataSource} columns={props.columns} pagination={{
                total: props.dataSource.length,
                pageSize: 10,
                hideOnSinglePage: true,
            }}/>
        </div>
    </div>
}

export default RaceScheduleCurrent;