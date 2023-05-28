import React from 'react'

const Form = () => {
    return (
        <div>
            <div>
                <input type="text" placeholder='Enter your Name' />
            </div>
            <input type="Number" placeholder='Enter your Age' />
            <div>
                <input type="Submit" value={'Submit'} />
            </div>
        </div>
    )
}

export default Form
