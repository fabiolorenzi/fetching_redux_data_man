import React from "react";
import { Switch, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer.jsx";

function App() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={MainContainer} />
            </Switch>
        </div>
    );
};

export default App;