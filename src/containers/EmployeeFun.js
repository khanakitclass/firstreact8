import React, { useState } from 'react';

function EmployeeFun(props) {
    //Hooks   useState()

    const [name, setName] = useState('amit');
    const [age, setAge] = useState(50);

    const handleAge = () => {
        setAge(40);
    }

    return (
        <div>
            <h1>Employee function based Component</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleAge}>Change Age</button>
        </div>
    );
}

export default EmployeeFun;