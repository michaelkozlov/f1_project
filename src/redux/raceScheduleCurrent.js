import {ergastApi} from "../Api/api";
const SETRACESCHEDULECURRENT="SETRACESCHEDULECURRENT";

const initialState={
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

const RaceScheduleCurrent=(state=initialState, action)=>{
    switch (action.type) {
        case SETRACESCHEDULECURRENT :
            debugger;
            return {
                ...state,
                dataSource: action.raceScheduleCurrentData.map(el => {
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

export const setRaceScheduleCurrentData=(raceScheduleCurrentData)=>{
    return {
        type: SETRACESCHEDULECURRENT,
        raceScheduleCurrentData,
    }
}

export const RaceScheduleCurrentData=()=>(dispatch)=>{
    ergastApi.getRaceScheduleCurrentSeason().then(data=>{
        console.log(data)
        let raceScheduleCurrentData = data.MRData.RaceTable.Races;
        console.log(raceScheduleCurrentData)
        dispatch(setRaceScheduleCurrentData(raceScheduleCurrentData));
    });
}

export default RaceScheduleCurrent;