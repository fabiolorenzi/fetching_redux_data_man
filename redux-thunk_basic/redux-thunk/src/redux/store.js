import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer.js";

/*function myLogger(store) {
    return next => {
        return action => {
            console.log("middleware is running");
            return next(action);
        }
    }
};*/

const myLogger = store => next => action => {
    console.log("middleware is running");
    return next(action);
};

const secondMiddleware = store => next => action => {
    console.log("secondMiddleware is running");
    return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware is simply used to cache the action before it will reach the reducer

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(myLogger, secondMiddleware)));

export default store;