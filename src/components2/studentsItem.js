import React from 'react'

const studentsItem = ({ student, index }) => {
    return (
        <div>
            <li>
                <span>
                    <b>
                        {student.name}
                    </b><br />
                    {student.age}
                </span>
                <br />
            </li>
        </div>
    )
}

export default studentsItem
