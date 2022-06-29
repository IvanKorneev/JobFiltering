import {combineReducers} from "redux";
import {positionReducers} from "./positions/position-reducers";
import {filterReducer} from "./filters/filter-reducers";

export const rootReducer = combineReducers({
    positions: positionReducers,
    filter:filterReducer
});