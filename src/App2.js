import React from 'react'
import { Link } from 'react-router-dom'

const App2 = () => {
    let host = window.location.hostname;

    return (
        <div>
            <h1>I'm in App2</h1>
            {/* <Link to={'App3'}>Let's Go To App3</Link> */}
            <div>
                {/* <Link to={`${host}/App3`}>Go to App3</Link> */}
                <Link to={`/App3`}>Go to App3</Link>
            </div>
        </div>
    )
}

export default App2
