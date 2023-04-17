import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'//v6.10.0//v5.2.0
import App2 from './App2'
import App3 from './App3'


const App = () => {
  console.log('windows', window.location.hostname)
  return (
    <div>
      <h3>Testing Dude</h3>
      <BrowserRouter>
        <Routes>
          <Route path={`/App2`} element={<App2 />} />
          <Route path={`/App3`} element={<App3 />} />
          {/* <Route path={`${host}/App2`} element={<App2 />} />
          <Route path={`${host}/App3`} element={<App3 />} /> */}
        </Routes>
        <Link to={'/App3'} >Go to Home</Link>
      </BrowserRouter>
    </div>
  )
}

export default App
