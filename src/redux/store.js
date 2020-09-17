import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import circuitsReducer from "./circuitsReducer";
import newsReducer from "./newsReducer";
import raceScheduleCurrentReducer from "./raceScheduleCurrent";

const reducers = combineReducers({
    circuitsReducer,
    newsReducer,
    raceScheduleCurrentReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;