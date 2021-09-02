import React, { useEffect, useState } from "react";

function MainContainer() {
    const [idSearch, setIdSearch] = useState(6);
    const [result, setResult] = useState();

    const handleChange = e => {
        e.preventDefault();
        setIdSearch(e.target.value);
    };

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then(response => {
                if (response.ok) {
                    console.log("Successful");
                    return response.json();
                } else {
                    throw Error("Not Successful");
                };
            })
            .then(data => {
                console.log(data);
                const html = data.data.map(user => {
                    if (user.id <= idSearch) {
                        return <p>Name: {user.first_name}</p>
                    };
                    return "";
                })
                setResult(html);
            })
    }, [idSearch])

    return( 
        <div>
            <div>
                <input type="number" name="idSearch" value={idSearch} onChange={handleChange} />
            </div>
            <div>{result}</div>
        </div>
    );
};

export default MainContainer;