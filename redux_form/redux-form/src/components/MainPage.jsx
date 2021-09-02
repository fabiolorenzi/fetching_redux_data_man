import React from "react";

import Form from "./Form.jsx";
import Result from "./Result.jsx";

function MainPage() {
    return(
        <div className="main_page">
            <h1>Redux Form Managment</h1>
            <Form />
            <Result />
        </div>
    );
};

export default MainPage;