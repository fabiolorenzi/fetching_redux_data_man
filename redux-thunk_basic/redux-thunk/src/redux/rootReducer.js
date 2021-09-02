import { combineReducers } from "redux";

import reducer from "./reducer.js";

const rootReducer = combineReducers({
    counter: reducer
});

export default rootReducer;