import React from 'react';
import Posts from './posts';
import GlobalState from './context/GlobalState';

const main = () => {
    return (
        <GlobalState>
            <div>
                <h5>Wow</h5>
                <Posts />
            </div>
        </GlobalState>
    )
}

export default main
