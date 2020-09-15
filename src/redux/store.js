import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import circuitsReducer from "./circuitsReducer";
import newsReducer from "./newsReducer";

const reducers = combineReducers({
    circuitsReducer,
    newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;