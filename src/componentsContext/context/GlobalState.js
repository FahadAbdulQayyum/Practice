import globalReducer from './globalReducer';
import globalContext from './globalContext';
import { useReducer } from 'react';

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
            {
                name: 'Lala',
                age: 0
            },
        ]
    }

    const [state, reducer] = useReducer(globalReducer, inititalState)

    return <globalContext.Provider
        value={{
            students: state.students,
        }}
    >
        {props.children}
    </globalContext.Provider >
}

export default GlobalState;