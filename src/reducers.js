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