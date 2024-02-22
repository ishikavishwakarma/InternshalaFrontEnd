import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   resume: null,
   education:null,
   internship:null,
   job:null,
   responsibility:null,
   course:null,
   skill:null,
   project:null

};

export const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        saveResume: (state, action) => {
            state.resume= action.payload;   
             
        },
        removeResume: (state, action) => {
            state.resume= null; 
        },
        addEdu: (state, action) => {
            state.education= action.payload; 
        },
        delEdu: (state, action) => {
            state.education= null; 
        },
        addInternship: (state, action) => {
            state.internship= action.payload; 
        },
        delInternship: (state, action) => {
            state.internship= null; 
        },
        addJob: (state, action) => {
            state.job= action.payload; 
        },
        delJob: (state, action) => {
            state.job= null; 
        },
        addSkill: (state, action) => {
            state.skill= action.payload; 
        },
        delSkill: (state, action) => {
            state.skill= null; 
        },
        addResponse: (state, action) => {
            state.responsibility= action.payload; 
        },
        delResponse: (state, action) => {
            state.responsibility= null; 
        },
        addProject: (state, action) => {
            state.project= action.payload; 
        },
        delProject: (state, action) => {
            state.project= null; 
        },
        addCourse: (state, action) => {
            state.course= action.payload; 
        },
        delCourse: (state, action) => {
            state.course= null; 
        },
        
     
    },
});

// Action creators are generated for each case reducer function
export const {addEdu,delEdu,delCourse,delInternship,delJob,delProject,delResponse,delSkill, saveResume, removeResume,addCourse,addInternship,addJob,addProject,addResponse,addSkill } =resumeSlice.actions;

export default resumeSlice.reducer;