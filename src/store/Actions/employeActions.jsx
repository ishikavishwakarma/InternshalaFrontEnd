import axios from '../../config/axios';
import React from 'react'
import  { saveEmploye, removeEmploye, saveInternships,saveJobs, singleJob, singleIntern } from "../Reducers/employeSlice"


                                                                                                                                                                       
export const asynccurrentEmploye = () => async (dispatch, getState) => {
    try {
        try {
            const { data } = await axios.post("/employe/current");
            dispatch(saveEmploye(data.employe));
            console.log(data.employe);
        } catch (error) {
            console.log(error.response.data);
        }        
    } catch (error) {
        console.log(error);
    }
}
                                                                                                                                                                                          
export const asyncEmployesignup = (employe) => async(dispatch,getState)=> {
try {                         
   await  axios.post("/employe/signup",employe) 
    dispatch(asynccurrentEmploye())                         
}                                                               
catch (error) {
    console.log(error.response.data);
 }
};

export const asyncEmployesignin = (employe) => async(dispatch , getState)=> {
 try {
   await  axios.post("/employe/signin",employe)
    dispatch(asynccurrentEmploye())
 } catch (error) {
    console.log(error.response.data);
 }
};
                                                                                                             
export const asyncremoveEmploye = (employe) => async(dispatch,getState)=> {
 try {
    await  axios.get("/employe/signout",employe)
    dispatch(removeEmploye())
 } catch (error) {
    console.log(error.response.data);
 }
};
export const asyncreadInternship = () => async(dispatch,getState)=> {
    try {
        try {
            const { data } = await axios.post("/employe/internship/read");
            dispatch(saveInternships(data.internships));
            // console.log(data.internships);
        } catch (error) {
            console.log(error.response.data);
        }        
    } catch (error) {
        console.log(error);
    }
};
export const asynccreateInternship = (internship) => async(dispatch,getState)=> {
    
        try {
             await axios.post("/employe/internship/create",internship);
             dispatch(asyncreadInternship())
        } catch (error) {
            console.log(error.response.data);
        }        
   
};

export const asyncreadJob = () => async(dispatch,getState)=> {
    try {
        try {
            const { data } = await axios.post("/employe/job/read");
            dispatch(saveJobs(data.jobs));
            // console.log(data.jobs);
        } catch (error) {
            console.log(error.response.data);
        }        
    } catch (error) {
        console.log(error);
    }
};
export const asynccreateJob = (jobs) => async(dispatch,getState)=> {
    
        try {
             await axios.post("/employe/job/create",jobs);
             dispatch(asyncreadJob())
        } catch (error) {
            console.log(error.response.data);
        }        
   
};
export const asynceditEmploye = (employe,id) => async(dispatch,getState)=> {
    try {
      await  axios.post(`/employe/update/${id} `,employe)
       dispatch(asynccurrentEmploye())
    } catch (error) {
       console.log(error.response.data);
    }
   };
   export const asyncreadSingleJob = (id) => async(dispatch,getState)=> {
  
        try {
            const { data } = await axios.post(`/employe/job/read/${id}`);
            dispatch(singleJob(data.job));
            // console.log(data.job);
        } catch (error) {
            console.log(error.response.data);
        }        
};
   export const asyncreadSingleIntern = (id) => async(dispatch,getState)=> {
  
        try {
            const { data } = await axios.post(`/employe/internship/read/${id}`);
            dispatch(singleIntern(data.internship));
            // console.log(data.internship);
        } catch (error) {
            console.log(error.response.data);
        }        
};

