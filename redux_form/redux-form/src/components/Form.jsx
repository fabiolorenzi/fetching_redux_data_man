import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {submit} from "../actions.js";

function Form() {
    const dispatch = useDispatch();
    const [stud, setStud] = useState({
        name: "",
        surname: "",
        class: "",
        year: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setStud({...stud, [e.target.name]: e.target.value});
    };

    const handleClass = e => {
        setStud({...stud, class: e.target.value});
    };

    const submitStud = e => {
        e.preventDefault();
        dispatch(submit(stud));
        setStud({
            name: "",
            surname: "",
            class: "",
            year: ""
        });
    };

    return(
        <div className="form">
            <form onSubmit={submitStud}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={stud.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" value={stud.surname} onChange={handleChange} />
                </div>
                <div>
                    <label htlmfor="class">Class</label>
                    <select onChange={handleClass} name="class">
                        <option defaultValue value="">Please select an option</option>
                        <option value="First">First</option>
                        <option value="Second">Second</option>
                        <option value="Third">Third</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" value={stud.year} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;