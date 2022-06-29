import {combineReducers} from "redux";
import {positionReducers} from "./positions/position-reducers";

export const rootReducer = combineReducers({
    position: positionReducers,
});