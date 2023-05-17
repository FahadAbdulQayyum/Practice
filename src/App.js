import React, { useState } from 'react'
import Students from './components/students'
import Form from './components/form'
import GlobalState from './global/globalState'

const App = () => {

  return (
    <GlobalState>
      <Form />
      <Students />
    </GlobalState>
  )
}

export default App;