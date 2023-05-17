import React, { useState } from 'react'
import Students from './components/students'
import Form from './components/form'

const App = () => {

  const [student, setStudent] = useState([])

  const addStudent = newStudent => setStudent([...student, newStudent])

  return (
    <>
      <Form addStudent={addStudent} />
      <Students student={student} />
    </>
  )
}

export default App;