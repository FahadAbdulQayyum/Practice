import React, { useState, useContext } from 'react';
import globalContext from './context/globalContext';

const Form = () => {

    const [obj, setObj] = useState({
        name: '',
        age: ''
    })

    const { addStudent } = useContext(globalContext);

    const onChange = e => setObj({ ...obj, [e?.target?.name]: e?.target?.value })

    const onSubmit = e => {
        e?.preventDefault();
        addStudent(obj)
        setObj({
            name: '',
            age: ''
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder='Enter your Name' name={'name'} value={obj?.name} onChange={onChange} autoFocus />
                </div>
                <input type="Number" placeholder='Enter your Age' name={'age'} value={obj?.age} onChange={onChange} />
                <div>
                    <input type="submit" value={'Submit'} />
                </div>
            </form>
        </div>
    )
}

export default Form
