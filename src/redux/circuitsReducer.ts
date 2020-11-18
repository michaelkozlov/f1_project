import {ergastApi} from "../Api/api";
const SETCIRCUITS="SETCIRCUITS";

type dataSourceType = {
    key : number,
    circuit : string,
    locality : string,
    country : string,
}

type InitialStateType = {
    dataSource : null | Array<dataSourceType>,
    columns : Array<{
        title: string,
        dataIndex: string,
        key: string,
    }>
}

const initialState : InitialStateType={
    dataSource: null,
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

const circuitsReducer=(state=initialState, action : any) :InitialStateType =>{
    switch (action.type) {
        case SETCIRCUITS :
            debugger;
            return {
                ...state,
                dataSource: action.circuitsData.map((el: { circuitId: any; circuitName: any; Location: { locality: any; country: any; }; }): any => {
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

type setCircuitsDataType = {
    type : typeof SETCIRCUITS,
    circuitsData : Array<{}>
}

export const setCircuitsData=(circuitsData : Array<{}>) : setCircuitsDataType=>{
    return {
        type: SETCIRCUITS,
        circuitsData,
    }
}

export const circuitsData=()=>(dispatch : any)=>{
    ergastApi.getCircuits().then((data: { MRData: { CircuitTable: { Circuits: any; }; }; }) => {
        console.log(data)
        let circuitsData=data.MRData.CircuitTable.Circuits;
        console.log(circuitsData)
        dispatch(setCircuitsData(circuitsData));
    });
}

export default circuitsReducer;