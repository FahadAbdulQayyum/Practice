import React, { useContext } from 'react';
import StudentItems from './studentsItem';
import globalContext from './context/globalContext';

// const Students = ({ students }) => {
const Students = () => {

    const { students } = useContext(globalContext)

    return (
        <div>
            {students.map((student, index) => (
                <div key={index}>
                    {<StudentItems student={student} />}
                </div>
            )
            )}
        </div>
    )
}

export default Students
