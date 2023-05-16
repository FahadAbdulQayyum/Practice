import { configureStore } from "@reduxjs/toolkit";
import customReducer from './reducers';

const store = configureStore({
    reducer: {
        custom: customReducer
    }
})

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { customReducer } from "./reducers";

// const store = configureStore({
//     reducer: {
//         custom: customReducer,
//     }
// })

// export default store;

// // import { configureStore } from "@reduxjs/toolkit";
// // import { customeReducer } from "./reducers";

// // const store = configureStore({
// //     reducer: {
// //         custom: customeReducer,
// //     },
// // });


// // export default store;