import React from 'react'
import Posts from './components1/posts'
import GlobalState from './global/globalState'
const App = () => {
  return (
    <GlobalState>
      <div>
        <Posts />
      </div>
    </GlobalState>
  )
}

export default App



// import React from 'react'
// import Students from './components/students'
// import Form from './components/form'
// import GlobalState from './global/globalState'

// const App = () => {

//   return (
//     <GlobalState>
//       <Form />
//       <Students />
//     </GlobalState>
//   )
// }

// export default App;