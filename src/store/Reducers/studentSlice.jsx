import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   student: null,
    isAuth: false,
    intern:null,
    job:null
};

export const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        saveStudent: (state, action) => {
            state.student= action.payload;
            state.isAuth = true;
        },
        saveIntern: (state, action) => {
            state.intern= action.payload; 
        },
        saveJob: (state, action) => {
            state.job= action.payload; 
        },
        removeStudent: (state, action) => {
            state.student= null;
            state.isAuth = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveStudent, removeStudent,saveIntern,saveJob } =studentSlice.actions;

export default studentSlice.reducer;