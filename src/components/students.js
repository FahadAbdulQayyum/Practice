import React from 'react';
import StudentItems from './StudentItems';

const students = ({ student }) => {
    return (
        <div>
            {student.length ? student.map((v, i) => <StudentItems v={v} i={i} key={i} />) : <h3>No students Found</h3>}
        </div>
    )
}

export default students
