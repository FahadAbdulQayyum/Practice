import React, { useReducer } from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';

const GlobalState = props => {
    const initialState = {
        students: []
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const addStudent = newStudent => {
        dispatch({
            type: "ADD_STUDENT",
            payload: newStudent
        })
    }

    return <globalContext.Provider
        value={{
            students: state.students,
            addStudent: addStudent
        }}
    >
        {props.children}
    </globalContext.Provider>
}

export default GlobalState;


// import React, { useReducer } from "react";
// import globalContext from "./globalContext";
// import globalReducer from "./globalReducer";

// const GlobalState = props => {
//     const initialState = {
//         students: [
//             {
//                 name: 'FAhad',
//                 age: '44'
//             }
//         ]
//     }

//     const [state, dispatch] = useReducer(globalReducer, initialState);

//     const addStudents = newStudent => dispatch({
//         type: "ADD_STUDENT",
//         payload: newStudent
//     })

//     return <globalContext.Provider
//         value={{
//             students: state.students,
//             addStudents: addStudents
//         }}
//     >
//         {props.children}
//     </globalContext.Provider>
// }

// export default GlobalState;