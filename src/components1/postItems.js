import React from 'react'

const postItems = ({ post: { title, body }, i }) => {
    return (
        <div>
            <li>
                <h4>{title}</h4>
                <p>{body}</p>
            </li>
        </div>
    )
}

export default postItems
