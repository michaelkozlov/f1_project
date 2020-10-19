import {ergastApi} from "../Api/api";
const SETCURRENTDRIVERSTANDINGS="SETCURRENTDRIVERSTANDINGS";

const initialState={
    dataSource: [
    ],
    columns: [{
        title: 'Позиция',
        dataIndex: 'position',
        key: 'position',
    },
        {
            title: 'Гонщик',
            dataIndex: 'racer',
            key: 'racer',
        },
        {
            title: 'Команда',
            dataIndex: 'constructor',
            key: 'constructor',
        },
        {
            title: 'Количество очков',
            dataIndex: 'points',
            key: 'points',
        },
        {
            title: 'Очков до лидера',
            dataIndex: 'pointsBeforeLeader',
            key: 'pointsBeforeLeader',
        },
        {
            title: 'Побед в сезоне',
            dataIndex: 'wins',
            key: 'wins',
        },
    ],
}

const currentDriverStandings=(state=initialState, action)=>{
    switch (action.type) {
        case SETCURRENTDRIVERSTANDINGS :
            return {
                ...state,
                dataSource: action.currentDriverStandings.map(el => {
                    return {
                        position : el.position,
                        racer : el.Driver.givenName + " " + el.Driver.familyName,
                        constructor : el.Constructors[0].name,
                        points : el.points,
                        pointsBeforeLeader : +action.currentDriverStandings[0].points - +el.points,
                        wins : el.wins,
                    }
                })
            }
        default :
            return state;
    }
}

export const setCurrentDriverStandings=(currentDriverStandings)=>{
    return {
        type: SETCURRENTDRIVERSTANDINGS,
        currentDriverStandings,
    }
}
export const CurrentDriverStandingsThunk=()=>(dispatch)=>{
    ergastApi.getCurrentDriverStandings().then(data=>{
        let currentDriverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        debugger;
        dispatch(setCurrentDriverStandings(currentDriverStandings));
    });
}

export default currentDriverStandings;