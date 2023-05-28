import React, { useReducer } from 'react';
import globalReducer from './globalReducer';
import globalContext from './globalContext';
import { ADD_STUDENT } from './type'

const GlobalState = props => {
    const inititalState = {
        students: [
            {
                name: 'Fahad',
                age: 33
            },
            {
                name: 'Ahad',
                age: 0
            },

        ]
    }

    const [state, dispatch] = useReducer(globalReducer, inititalState)

    const addStudent = newStudent => dispatch({
        type: ADD_STUDENT,
        payload: newStudent
    })

    return <globalContext.Provider
        value={{
            students: state.students,
            addStudent: addStudent,
        }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;