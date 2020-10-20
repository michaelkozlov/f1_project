import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import circuitsReducer from "./circuitsReducer";
import newsReducer from "./newsReducer";
import raceScheduleCurrentReducer from "./raceScheduleCurrent";
import raceScheduleReducer from "./raceScheduleReducer";
import currentDriverStandings from "./currentDriverStandings";
import currentConstructorStandings from "./currentConstructorStandings";

const reducers = combineReducers({
    circuitsReducer,
    newsReducer,
    raceScheduleCurrentReducer,
    raceScheduleReducer,
    currentDriverStandings,
    currentConstructorStandings,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;