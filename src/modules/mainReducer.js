import {combineReducers} from "redux";
import HiringListReducer from "./HiringList/reducer";

export const mainReducer = combineReducers({
    HiringListReducer,
});