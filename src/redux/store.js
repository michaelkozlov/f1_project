import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import circuitsReducer from "./circuitsReducer";

const reducers = combineReducers({
    circuitsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;