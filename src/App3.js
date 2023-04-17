import React from 'react'
import { Link } from 'react-router-dom'


const App3 = () => {
    let host = window.location.hostname;

    return (
        <div>
            <h1>I'm in App3</h1>
            {/* <Link to={'App2'}>Let's Go To App2</Link> */}
            <div>
                {/* <Link to={`${host}/App2`}>Go to App2</Link> */}
                <Link to={`/App2`}>Go to App2</Link>
            </div>
        </div>
    )
}

export default App3
