import React from 'react'

const StudentItems = ({ v, i }) => {
    return (
        <div key={i}>
            {i + 1 + ' - '}{v.name + ' | ' + v.age}
        </div>
    )
}

export default StudentItems
