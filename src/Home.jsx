import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({ type: "increment" });
  };

  const subBtn = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h2>{c}</h2>
      <button onClick={addBtn}>increment</button>
      <button onClick={subBtn}>decrement</button>
    </div>
  );
};

export default Home;

// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'

// const Home = () => {
//     const {myState}=useSelector((state)=>state.custom)
//     const dispatch=useDispatch();

// const onAddBtn=()=>{
//     dispatch({
//         type:"increment"
//     })
// }

// const onSubBtn=()=>{
//     dispatch({
//         type:"decrement"
//     })
// }

//   return (
//     <div>
//         <h1>{myState}</h1>
//       <button onClick={onAddBtn}>increment</button>
//       <button onClick={onSubBtn}>decrement</button>
//     </div>
//   )
// }

// export default Home

// // import React from 'react'
// // import { useSelector, useDispatch } from 'react-redux'

// // const Home = () => {
// //     const value = 20
// //     const dispatch = useDispatch();
// //     const { c } = useSelector((state)=>state.custom)

// //     const addBtn = () => {
// //         dispatch({
// //             type: "increment"
// //         });
// //     }

// // const addBtnByVal=()=>{
// //     dispatch({
// //         type:"incrementByVal",
// //         payload:25,
// //     })
// // }

// //     const subBtn = () => {
// //         dispatch({
// //             type: "decrement"
// //         });
// //     }

// //     return (
// //         <div>
// //             <h2>{c}</h2>
// //             <button onClick={addBtn}>+</button>
// //             <button onClick={addBtnByVal}>+25</button>
// //             {/* <input type="number" value={0} /> */}
// //             {/* <input type="number" value={value} /> */}
// //             <button onClick={subBtn}>-</button>
// //         </div>
// //     )
// // }

// // export default Home
