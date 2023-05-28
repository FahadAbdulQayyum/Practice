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

    const addPosts = async (page) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
        const data = await res.data;
        dispatch({
            type: 'ADD_POSTS',
            payload: {
                data, page
            }
        })
        console.log('data', data)
    }

    return <globalContext.Provider
        value={{
            posts: state.posts,
            page: state.page,
            addPosts: addPosts
        }}
    >
        {props.children}
    </globalContext.Provider >
}

export default GlobalState;