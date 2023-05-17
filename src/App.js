import React, { useState } from 'react'
import Students from './components/students'
import Form from './components/form'
import GlobalState from './global/globalState'

const App = () => {

  const [student, setStudent] = useState([])

  const addStudent = newStudent => setStudent([...student, newStudent])

  return (
    <GlobalState>
      <Form addStudent={addStudent} />
      <Students />
    </GlobalState>
  )
}

export default App;