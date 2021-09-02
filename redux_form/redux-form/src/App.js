import React from "react";
import {Switch, Route} from "react-router-dom";

import MainPage from "./components/MainPage.jsx";

function App() {
    return(
        <div className="main">
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </div>
    );
};

export default App;