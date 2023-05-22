import React, { useState } from 'react';

const App = () => {

  const [cntry, setCntry] = useState("India")

  const obj =
    [{
      countries: [
        "India",
        "Pakistan",
        "Bangladesh"
      ],
      India: [
        "Mumbai",
        "New Delhi"
      ],
      Pakistan: [
        "Islamabad",
        "Karachi"
      ],
      Bangladesh: [
        "Dhaka",
        "Bangali"
      ]
    }
    ]
  return (
    <div>
      {/* First drop down starts */}
      <h3>AsSalam</h3>
      {obj.map((v, i) => (
        <select key={i} onChange={e => setCntry(e?.target?.value)}>{v.countries.map((v, i) => (
          <option key={i}>{v}</option>
        ))}</select>
      ))}
      {/* First drop down ends */}
      {/* Second drop down starts */}
      {obj.map((v, i) => (
        <select key={i}>{v[cntry].map((v, i) => (
          <option key={i}>{v}</option>
        ))}</select>
      ))}
      {/* Second drop down ends */}
    </div>
  )
}

export default App;


// *******************************

// import React from 'react'
// import Posts from './components1/posts'
// import GlobalState from './global/globalState'
// const App = () => {
//   return (
//     <GlobalState>
//       <div>
//         <Posts />
//       </div>
//     </GlobalState>
//   )
// }

// export default App



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