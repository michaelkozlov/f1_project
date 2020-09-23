import {ergastApi} from "../Api/api";
const SETRACESCHEDULEYEAR="SETRACESCHEDULEYEAR";
const SELECTEDYEAR = "SELECTEDYEAR";

const initialState={
    year : 2010,
    dataSource: [
    ],
    columns: [{
        title: 'Номер',
        dataIndex: 'round',
        key: 'round',
    },
        {
            title: 'Название гонки',
            dataIndex: 'raceName',
            key: 'raceName',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Время',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Трасса',
            dataIndex: 'circuit',
            key: 'circuit',
        },
        {
            title: 'Место',
            dataIndex: 'locality',
            key: 'locality',
        },
        {
            title: 'Страна',
            dataIndex: 'country',
            key: 'country',
        },
    ],
}

const raceScheduleReducer=(state=initialState, action)=>{
    debugger;
    switch (action.type) {
        case SELECTEDYEAR :
            return {
                ...state,
                year: action.selectedYear,
            }
        case SETRACESCHEDULEYEAR :
            debugger;
            return {
                ...state,
                dataSource: action.raceScheduleData.map(el => {
                    return {
                        round : el.round,
                        raceName : el.raceName,
                        date : el.date,
                        time : el.time,
                        circuit : el.Circuit.circuitName,
                        locality : el.Circuit.Location.locality,
                        country : el.Circuit.Location.country,
                    }
                })
            }
        default :
            return state;
    }
}

export const setRaceScheduleData=(raceScheduleData, selectedYear)=>{
    return {
        type: SETRACESCHEDULEYEAR,
        raceScheduleData,
    }
}

export const setSelectedYear=(selectedYear)=>{
    return {
        type: SELECTEDYEAR,
        selectedYear,
    }
}

export const RaceScheduleData=(year)=>(dispatch)=>{
    ergastApi.getRaceSchedule(year).then(data=>{
        console.log(year)
        let raceScheduleData = data.MRData.RaceTable.Races;
        console.log(raceScheduleData)
        dispatch(setRaceScheduleData(raceScheduleData));
    });
}

export default raceScheduleReducer;