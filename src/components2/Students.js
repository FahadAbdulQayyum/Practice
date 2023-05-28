import React, { useState } from 'react';
import StudentsItem from './studentsItem';

const Students = ({ students, addStudents }) => {

    const [info, setInfo] = useState({
        name: '',
        age: ''
    })



    const onChange = e => {
        setInfo({ ...info, [e?.target?.name]: e?.target?.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(
            'info', info
        )
        addStudents(info)
        setInfo({
            name: '',
            age: ''
        })
    }

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <input type="text" name='name' value={info.name} placeholder='Name' onChange={onChange} autoFocus />
                </div>
                <input type="number" placeholder='Age' name='age' value={info.age} onChange={onChange} />
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>

            <ol>
                {students.map((student, index) => (
                    <div key={index}>
                        <StudentsItem student={student} index={index} />
                    </div>
                )
                )}
            </ol >
        </div >
    )
}

export default Students
