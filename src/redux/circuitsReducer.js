import {ergastApi} from "../Api/api";
const SETCIRCUITS="SETCIRCUITS";

const initialState={
    dataSource: [
    ],
    columns: [{
        title: 'Название трассы',
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
        },],
}

const circuitsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SETCIRCUITS :
            debugger;
            return {
                ...state,
                dataSource: action.circuitsData.map(el => {
                    return {
                        key : el.circuitId,
                        circuit : el.circuitName,
                        locality : el.Location.locality,
                        country : el.Location.country,
                    }
                })
            }
        default :
            return state;
    }
}

export const setCircuitsData=(circuitsData)=>{
    return {
        type: SETCIRCUITS,
        circuitsData,
    }
}

export const circuitsData=()=>(dispatch)=>{
    ergastApi.getCircuits().then(data=>{
        console.log(data)
        let circuitsData=data.MRData.CircuitTable.Circuits;
        console.log(circuitsData)
        dispatch(setCircuitsData(circuitsData));
    });
}

export default circuitsReducer;