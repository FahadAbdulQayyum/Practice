import React, { useContext } from 'react';
import StudentItems from './StudentItems';
import globalContext from '../global/globalContext';

const Students = () => {

    const { students } = useContext(globalContext);

    return (
        <div>
            {/* {student.length ? student.map((v, i) => <StudentItems v={v} i={i} key={i} />) : <h3>No students Found</h3>} */}
            {students.length ? students.map((v, i) => <StudentItems v={v} i={i} key={i} />) : <h3>No students Found</h3>}
        </div>
    )
}

export default Students
