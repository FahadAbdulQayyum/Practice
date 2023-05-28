import React from 'react';
import Form from './form';
import GlobalState from './context/GlobalState';

const Main = () => {
    return (
        <GlobalState>
            <div>
                <h5>Main</h5>
                <Form />
            </div>
        </GlobalState>
    )
}

export default Main
