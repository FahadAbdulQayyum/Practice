import React, { useReducer } from 'react';
import globalReducer from './globalReducer';
import globalContext from './globalContext';
import axios from 'axios';

const GlobalState = props => {
    const initialState = {
        posts: [],
        page: 1
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    const generatePost = async (page) => {
        try {
            // const post = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
            const data = await res.data;

            dispatch({
                type: 'GENERATE_POST',
                payload: { data, page }
            })
            console.log('post', data)
        } catch (err) {
            console.error(err)
        }
    }

    return <globalContext.Provider
        value={{
            posts: state.posts,
            page: state.page,
            generatePost: generatePost
        }}
    >
        {props.children}
    </globalContext.Provider >
}

export default GlobalState;