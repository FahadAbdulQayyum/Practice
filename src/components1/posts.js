import React, { useEffect, useState, useContext } from 'react'
import PostItems from './postItems';
import axios from 'axios';
import globalContext from './context/globalContext';

const Posts = () => {

    // const [posts, setPosts] = useState([])

    const { page, addPosts, posts } = useContext(globalContext);

    // const [post, setPost] = useState({})

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //         console.log('res', res.data)
    //         setPosts(res.data)
    //     })
    // }, [])

    useEffect(() => {
        addPosts(page);
    }, [])

    return (
        <div>
            <ol>
                {posts.map((v, i) => <PostItems post={v} i={i} key={i} />)}
            </ol>
            <button
                onClick={() => addPosts(page)}
            >Add More</button>
        </div>
    )
}

export default Posts
