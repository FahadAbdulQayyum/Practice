import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'//v6.10.0//v5.2.0
import App2 from './App2'
import App3 from './App3'


const App = () => {
  console.log('windows', window.location.hostname)
  let host = window.location.hostname;
  return (
    <div>
      <h3>Testing Dude</h3>
      <BrowserRouter>
        <Routes>
          {/* <Route path={`/App2`} element={<App2 />} />
          <Route path={`/App3`} element={<App3 />} /> */}
          <Route path={`${host}/App2`} element={<App2 />} />
          <Route path={`${host}/App3`} element={<App3 />} />
        </Routes>
        <div>
          <Link to={'/App2'}>Go to App2</Link>
        </div>
        <Link to={'/App3'}>Go to App3</Link>
      </BrowserRouter>
    </div>
  )
}

export default App
