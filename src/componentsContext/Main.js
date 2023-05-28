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
        <GlobalState>
            <div>
                <Form />
                {/* <Students students={students} /> */}
                <Students />
            </div>
        </GlobalState>
    )
}

export default Main
