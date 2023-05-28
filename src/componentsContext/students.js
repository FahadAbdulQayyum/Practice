import React, { useContext } from 'react';
import StudentItems from './studentsItem';
import globalContext from './context/globalContext';

// const Students = ({ students }) => {
const Students = () => {

    const { students } = useContext(globalContext)

    return (
        <div>
            {students.map(student => (
                <StudentItems student={student} />
            ))}
        </div>
    )
}

export default Students
