import { createReducer } from "@reduxjs/toolkit";

const customReducer = createReducer({ c: 0 }, {
    increment: (state) => {
        state.c += 1
    },
    incrementByValue: (state, action) => {
        state.c += action.payload
    },
    decrement: (state) => {
        state.c -= 1
    }
})

export default customReducer;

// import { createReducer } from "@reduxjs/toolkit";

// export const customReducer = createReducer({ myState: 0 }, {
//     increment: (state) => {
//         state.myState += 1;
//     },
//     incrementByVal: (state, action) => {
//         state.myState += action.payload
//     },
//     decrement: (state) => {
//         state.myState -= 1;
//     }
// })


// // import { createReducer } from "@reduxjs/toolkit";

// // const initialState = {
// //     c: 0,
// // }

// // export const customeReducer = createReducer(initialState, {
// //     increment: (state) => {
// //         state.c += 1;
// //     },
// //     incrementByVal: (state, action) => {
// //         // state.c += 1;
// //         state.c += action.payload;
// //     },
// //     decrement: (state) => {
// //         state.c -= 1;
// //     },
// // });
