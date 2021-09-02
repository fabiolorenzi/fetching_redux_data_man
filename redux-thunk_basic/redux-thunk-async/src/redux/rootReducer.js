import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer.js";

const rootReducer = combineReducers({
    data: fetchReducer
});

export default rootReducer;