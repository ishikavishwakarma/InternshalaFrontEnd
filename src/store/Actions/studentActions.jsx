import axios from '../../config/axios';
import React from 'react'
import { removeStudent, saveStudent,saveIntern,saveJob } from '../Reducers/studentSlice';

export const asynccurrentStudent = () => async (dispatch, getState) => {
 try {
        try {
            const { data } = await axios.post("/student");
            dispatch(saveStudent(data.student));
            console.log(data.student);                          
        } catch (error) {
            console.log(error.response.data);
        }    
} catch (error) {
        console.log(error);
    }
}

export const asyncsignup = (student) => async(dispatch,getState)=> {
 try {
     await  axios.post("/student/signup",student)  
     dispatch(asynccurrentStudent()) 
 } catch (error) {
    console.log(error.response.data);
 }
};
export const asyncsignin = (student) => async(dispatch,getState)=> {
 try {
   await  axios.post("/student/signin",student)
    dispatch(asynccurrentStudent())
 } catch (error) {
    console.log(error.response.data);
 }
};
export const asyncremoveStudent = (student) => async(dispatch,getState)=> {
 try {
   await  axios.get("/student/signout ",student)
    dispatch(removeStudent())
 } catch (error) {
    console.log(error.response.data);
 }
};
export const asyncStudentintern = () => async(dispatch,getState)=> {
    
    try {
        const {data}= await axios.post("/student/internship/read");
         dispatch(saveIntern(data.internship))
         console.log(data.internship);
    } catch (error) {
        console.log(error.response.data);
    }        

};
export const asyncStudentjob = () => async(dispatch,getState)=> {
    
    try {
        const {data}= await axios.post("/student/job/read");
         dispatch(saveJob(data.job))
         console.log(data.job);
    } catch (error) {
        console.log(error.response.data);
    }        

};
export const asynceditStudent = (student,id) => async(dispatch,getState)=> {
    try {
      await  axios.post(`/student/update/${id} `,student)
       dispatch(asynccurrentStudent())
    } catch (error) {
       console.log(error.response.data);
    }
   };
export const asyncapplyInternship= (internship,internshipid) => async(dispatch,getState)=> {
    try {
      await  axios.post( `/student/apply/internship/${internshipid}`,internship)
       dispatch(asynccurrentStudent())
       console.log(internship);
    } catch (error) {
       console.log(error.response.data);
    }
   };
   export const asyncapplyjob = (jobId) => async (dispatch) => {
    try {
      await axios.post(`/student/apply/job/${jobId}`);
      dispatch(asynccurrentStudent());
    } catch (error) {
      console.log(error.response.data);
    }
  };
   export const asyncSendMail = (user) => async (dispatch) => {
    try {
      await axios.post("/student/sendmail",user);
      
    } catch (error) {
      console.log(error.response.data);
    }
  };


