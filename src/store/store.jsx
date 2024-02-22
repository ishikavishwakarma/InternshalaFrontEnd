import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Reducers/studentSlice"
import employeReducer from "./Reducers/employeSlice"
import resumeReducer from "./Reducers/resumeSlice"
export const store = configureStore({
    reducer: {
      student:  studentReducer,
      employee:employeReducer,
      resume:resumeReducer
    },
});