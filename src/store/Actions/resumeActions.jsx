import axios from '../../config/axios';
import React from 'react'
import {addEdu,delEdu,delCourse,delInternship,delJob,delProject,delResponse,delSkill, saveResume, removeResume,addCourse,addInternship,addJob,addProject,addResponse,addSkill  } from '../Reducers/resumeSlice';

export const asynccurrentResume = () => async (dispatch, getState) => {
 try {
        try {
            const { data } = await axios.get("/resume");
            dispatch(saveResume(data.resume));
            // console.log(data.resume.education);
        } catch (error) {
            console.log(error.response.data);
        }    
} catch (error) {
        console.log(error);
    }
}
export const asyncCreateEducation = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-edu",formdata);
            dispatch(addEdu(data.resume.education));
            console.log(data.resume.education);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteEducation = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-edu/${id} `);
            dispatch(delEdu())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteInternship = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-internship/${id} `);
            dispatch(delInternship())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteJob = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-job/${id} `);
            dispatch(delJob())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteResponsibility = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-responsibilities/${id} `);
            dispatch(delResponse())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteSkills = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-skills/${id} `);
            dispatch(delSkill())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteCourses = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-courses/${id} `);
            dispatch(delCourse())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncDeleteProjects = (id) => async (dispatch, getState) => {
        try {
             await axios.post(`/resume/del-projects/${id} `);
            dispatch(delProject())
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateInternship = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-internship",formdata);
            dispatch(addInternship(data.resume.internships));
            console.log(data.resume.internships);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateJob = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-job",formdata);
            dispatch(addJob(data.resume.jobs));
            console.log(data.resume.jobs);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateProject = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-projects",formdata);
            dispatch(addProject(data.resume.projects));
            console.log(data.resume.projects);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateCourse = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-courses",formdata);
            dispatch(addCourse(data.resume.courses));
            console.log(data.resume.courses);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateSkill = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-skills",formdata);
            dispatch(addSkill(data.resume.skills));
            console.log(data.resume.skills);
        } catch (error) {
            console.log(error.response.data);
        }    
}
export const asyncCreateResponse = (formdata) => async (dispatch, getState) => {
        try {
            const { data } = await axios.post("/resume/add-responsibilities",formdata);
            dispatch(addResponse(data.resume.responsibilities));
            console.log(data.resume.responsibilities);
        } catch (error) {
            console.log(error.response.data);
        }    
}