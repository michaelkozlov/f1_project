import {ergastApi} from "../Api/api";
const SETCURRENTCONSTRUCTORSTANDINGS="SETCURRENTCONSTRUCTORSTANDINGS";

const initialState={
    dataSource: [
    ],
    columns: [{
        title: 'Позиция',
        dataIndex: 'position',
        key: 'position',
    },
        {
            title: 'Конструктор',
            dataIndex: 'constructor',
            key: 'constructor',
        },
        {
            title: 'Страна',
            dataIndex: 'country',
            key: 'country',
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

const currentConstructorStandings=(state=initialState, action)=>{
    switch (action.type) {
        case SETCURRENTCONSTRUCTORSTANDINGS :
            return {
                ...state,
                dataSource: action.currentConstructorStandings.map(el => {
                    return {
                        position : el.position,
                        constructor : el.Constructor.name,
                        country : el.Constructor.nationality,
                        points : el.points,
                        pointsBeforeLeader : +action.currentConstructorStandings[0].points - +el.points,
                        wins : el.wins,
                    }
                })
            }
        default :
            return state;
    }
}

export const setCurrentConstructorStandings=(currentConstructorStandings)=>{
    return {
        type: SETCURRENTCONSTRUCTORSTANDINGS,
        currentConstructorStandings,
    }
}
export const CurrentConstructorStandingsThunk=()=>(dispatch)=>{
    ergastApi.getCurrentConstructorStandings().then(data=>{
        let currentConstructorStandings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        debugger;
        dispatch(setCurrentConstructorStandings(currentConstructorStandings));
    });
}

export default currentConstructorStandings;