import React, { useEffect, useContext } from 'react'
import globalContext from './context/globalContext'

const Form = () => {

    const { page, generatePost } = useContext(globalContext);

    useEffect(() => {
        generatePost(page);
    }, [])

    return (
        <div>
            <button
                onClick={() => generatePost(page)}
            >Click</button>
        </div>
    )
}

export default Form
