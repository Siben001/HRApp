import {combineReducers} from "redux";
import HiringListReducer from "./HiringList/reducer";
import Deal from "./DealConstructor/reducer";


export const mainReducer = combineReducers({
    HiringListReducer,
    Deal,
});