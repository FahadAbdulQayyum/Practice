import React, { useState } from 'react'

const Form = ({ addStudent }) => {

    const [state, setState] = useState({
        name: '',
        age: '',
    })

    const onSub = e => {
        e.preventDefault();
        if (state.name === '' && state.age === '') return alert('Credentials missing, kindly fill the form!')
        addStudent(state)
        setState({ name: '', age: '' })
        console.log('Submitted!', state)
    }

    const onChange = e => {
        setState({ ...state, [e?.target?.name]: e?.target?.value })
    }

    return (
        <div>
            <form onSubmit={onSub}>
                <input name='name' placeholder='Enter your name' value={state.name} onChange={onChange} />
                <input name='age' placeholder='Enter your age' value={state.age} onChange={onChange} />
                <input type="submit" value={'Submit'} />
            </form>
        </div>
    )
}

export default Form