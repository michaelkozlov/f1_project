import React from "react";
import RaceScheduleCurrent from "./RaceScheduleCurrent/RaceScheduleCurrent";
import DriverStandingsCurrent from "./DriverStandingsCurrent/DriverStandingsCurrent";
import ConstructorStandingsCurrent from "./ConstructorStandingsCurrent/ConstructorStandingsCurrent";
import RacesResultsCurrentSeason from "./RacesResultsCurrentSeason/RacesResultsCurrentSeason";
import style from "./CurrentSeason.module.css";
import * as antd from "antd";
import 'antd/dist/antd.css';
const {  Tabs  } = antd;
const { TabPane } = Tabs;

const CurrentSeason=(props)=>{
    console.log(style)
    return <>
        <Tabs className={style[`ant-tabs`]} defaultActiveKey="1">
            <TabPane tab="Расписание гонок" key="1">
                <RaceScheduleCurrent/>
            </TabPane>
            <TabPane tab="Таблица пилотов" key="2">
                <DriverStandingsCurrent/>
            </TabPane>
            <TabPane tab="Кубок конструкторов" key="3">
                <ConstructorStandingsCurrent/>
            </TabPane>
            <TabPane tab="Результаты гонок" key="4">
                <RacesResultsCurrentSeason/>
            </TabPane>
        </Tabs>
        {/*<RaceScheduleCurrent/> /!*Расписание гонок сезона*!/*/}
        {/*<DriverStandingsCurrent/> /!*Таблица гонщиков*!/*/}
        {/*<ConstructorStandingsCurrent/> /!*Таблица конструкторов*!/*/}
        {/*<RacesResultsCurrentSeason/> /!*Результаты гонок сезона + быстрый круг*!/*/}
    </>
}

export default CurrentSeason;