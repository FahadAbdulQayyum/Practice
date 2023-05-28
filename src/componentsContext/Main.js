import React from 'react'
import Form from './form'
import GlobalState from './context/GlobalState'
import Students from './students'

const Main = () => {

    const students = [
        {
            name: 'Fahad',
            age: 33
        },
        {
            name: 'Ahad',
            age: 0
        },
    ]

    return (
        <div>
            <GlobalState>
                <Form />
                <Students students={students} />
            </GlobalState>
        </div>
    )
}

export default Main
