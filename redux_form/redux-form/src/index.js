import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store.js";

import App from "./App.js";
import "./normalize.css";
import "./style.css";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("app")
);