import React, { useEffect, useContext } from 'react';
import globalContext from './context/globalContext';
import PostItems from './postItems';

const Posts = () => {

    const { addPosts, page, posts } = useContext(globalContext);

    useEffect(() => {
        addPosts(page)
        console.log('posts', posts)
    }, [])


    return (
        <div>
            {posts.map((post, index) => (
                <div key={index}>
                    <PostItems post={post} />
                </div>
            ))}
            <button
                onClick={() => addPosts(page)}
            >More</button>
        </div>
    )
}

export default Posts
