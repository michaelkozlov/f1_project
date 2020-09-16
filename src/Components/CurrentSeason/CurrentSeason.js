import React from "react";
import RaceScheduleCurrent from "./RaceScheduleCurrent/RaceScheduleCurrent";
import DriverStandingsCurrent from "./DriverStandingsCurrent/DriverStandingsCurrent";
import ConstructorStandingsCurrent from "./ConstructorStandingsCurrent/ConstructorStandingsCurrent";
import RacesResultsCurrentSeason from "./RacesResultsCurrentSeason/RacesResultsCurrentSeason";

const CurrentSeason=(props)=>{
    return <>
        <RaceScheduleCurrent/> {/*Расписание гонок сезона*/}
        <DriverStandingsCurrent/> {/*Таблица гонщиков*/}
        <ConstructorStandingsCurrent/> {/*Таблица конструкторов*/}
        <RacesResultsCurrentSeason/> {/*Результаты гонок сезона + быстрый круг*/}
    </>
}

export default CurrentSeason;