import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   employe: null,
   internships:null,
   jobs:null,
   job:null,
   internsh:null,
    isAuths: false,
};

export const employeSlice = createSlice({
    name: "employe",
    initialState,
    reducers: {
        saveEmploye: (state, action) => {
            state.employe= action.payload;
            state.isAuths = true;
        },
        saveInternships:(state,action)=>{
            state.internships= action.payload;
        },
        singleJob:(state,action)=>{
            state.job= action.payload;
        },
        singleIntern:(state,action)=>{
            state.internsh= action.payload;
        },
        saveJobs:(state,action)=>{
            state.jobs= action.payload;
        },
        removeEmploye: (state, action) => {
            state.employe= null;
            state.isAuths = false;
        
        },
    },
});

// Action creators are generated for each case reducer function
export const { singleJob,singleIntern,saveEmploye, removeEmploye,saveInternships,saveJobs } =employeSlice.actions;

export default employeSlice.reducer;