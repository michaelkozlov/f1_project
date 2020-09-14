import {ergastApi} from "../Api/api";

const SETCIRCUITS="SETCIRCUITS";

const initialState={
    dataSource: [],
    columns: [{
        title: 'Circuit',
        dataIndex: 'circuit',
        key: 'circuit',
    },
        {
            title: 'Locality',
            dataIndex: 'locality',
            key: 'locality',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },],
}

const circuitsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case SETCIRCUITS :
            return {
                ...state,
                dataSource: action.circuitsData,
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
    console.log(ergastApi.getCircuits());
}

export default circuitsReducer();