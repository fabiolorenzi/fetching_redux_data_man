import React from "react";
import {useSelector} from "react-redux";

function Res() {
    const student = useSelector(state => state.data);

    return(
        <div className="super_result">
            {student.value ? <h1>Name: {student.value.name}</h1> : <h1>No name</h1>}
            {student.value ? <h1>Surname: {student.value.surname}</h1> : <h1>No surname</h1>}
            {student.value ? <h1>Class: {student.value.class}</h1> : <h1>No class</h1>}
            {student.value ? <h1>Year: {student.value.year}</h1> : <h1>No year</h1>}
        </div>
    );
};

export default Res;