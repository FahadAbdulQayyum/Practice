import React, { useEffect, useState } from 'react';
import Students from './Students';

const Main = () => {

    const addStudents = newStudent => {
        setStudents([...students, newStudent])
    }

    const [students, setStudents] = useState([
        // {
        //     name: 'Fahad',
        //     age: 25,
        // },
        // {
        //     name: 'Ahmed',
        //     age: 21,
        // },
        // {
        //     name: 'Asadullah',
        //     age: 16,
        // },
        // {
        //     name: 'Ahad',
        //     age: 0,
        // },
    ])

    return (
        <div>
            <h1>Main</h1>
            <Students students={students} addStudents={addStudents} />
        </div>
    )
}

export default Main;