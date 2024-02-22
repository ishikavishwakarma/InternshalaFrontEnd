import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncDeleteEducation, asyncDeleteInternship, asyncDeleteJob, asyncDeleteProjects, asyncDeleteResponsibility, asyncDeleteSkills, asynccurrentResume } from '../store/Actions/resumeActions';
import ExtraNav from './ExtraNav';
import { Link, useNavigate } from 'react-router-dom';
import { asynccurrentStudent } from '../store/Actions/studentActions';
import EducationResume from './EducationResume';
import InternshipResume from './InternshipResume';
import JobResume from './JobResume';
import ResponsibilityResume from './ResponsibilityResume';
import CoursesResume from './CoursesResume';
import SkillResume from './SkillResume';
import ProjectResume from './ProjectResume';
import Footer from './Footer';

const ResumeComponent = () => {
  const dispatch = useDispatch();
  const { student,isAuth} = useSelector((state)=>state.student)
  const { resume} = useSelector((state)=>state.resume)
  const [componentVisibility, setComponentVisibility] = useState({
    education: false,
    internship: false,
    job:false,
    responsibility:false,
    courses:false,
    skills:false,
    projects:false,
    // Add more components as needed
  });
  const navigate = useNavigate();
  const handleToggleComponent = (component) => {
    setComponentVisibility((prevVisibility) => ({
      ...prevVisibility,
      [component]: !prevVisibility[component],
    }));
  };
  useEffect(() => {
    if (isAuth) {
      dispatch(asynccurrentStudent());
    }
    dispatch(asynccurrentResume());
  }, [isAuth]);

  if (!isAuth || student === null) {
    // Redirect to login page or show loading state
    return (
      <div className="bg-black w-[98.9vw] h-[100vh]">
       <h1>loading</h1>
      </div>
    );
  }
  return (
    <div className=' relative bg-black  w-[98.9vw] h- '>
      <ExtraNav/>
      <div className=" flex items-center justify-center flex-col gap-7  -mt-[2vh] bg-black div ">
 <div className="head flex items-center justify-center">
  <h1 className='text-white text-6xl'>RESUME</h1>
 </div>

{componentVisibility.education && <EducationResume onClose={() => handleToggleComponent('education')} />}
      {componentVisibility.internship && <InternshipResume onClose={() => handleToggleComponent('internship')} />}
      {componentVisibility.job && <JobResume onClose={() => handleToggleComponent('job')} />}
      {componentVisibility.responsibility && <ResponsibilityResume onClose={() => handleToggleComponent('responsibility')} />}
      {componentVisibility.courses && <CoursesResume onClose={() => handleToggleComponent('courses')} />}
      {componentVisibility.skills && <SkillResume onClose={() => handleToggleComponent('skills')} />}
      {componentVisibility.projects && <ProjectResume onClose={() => handleToggleComponent('projects')} />}

 <div className=" bg-zinc-700 card gap-2 flex flex-col py-[1vw]  px-[2.5vw] rounded w-[70vw] h-[150vh]">
  <div className="head flex flex-col ">
  <h1 className='text-white text-3xl'>{student.firstName}</h1>
<h3 className='text-white text-lg'>{student.email}</h3>
<h3 className='text-white text-lg'>+91 {student.contact}</h3>
<h3 className='text-white text-lg'>{student.city}</h3>
  </div>
  <hr className=' w-[70vw] -ml-9 mt-3 border-zinc-700'></hr>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1"> 
<div className="head text-lg  w-[20vw] text-white ">EDUCATION</div>
<div className="div  h-fit">

{resume &&
                resume.education?.map((edu) => (
<div key={edu.id} className= " flex gap-4  pb-2 text-white card  w-[43vw] h-fit ">
  <div className="div w-[35vw]">
  <h1 className='text-lg'>{edu.degree}</h1>
  <h1 className='text-sm'>{edu.college}</h1>
  <h1 className='text-base'>{edu.start}-{edu.end}</h1>
  </div>
<div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteEducation(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className=' text-zinc-200' onClick={() => handleToggleComponent('education')}>
        {componentVisibility.education ? 'Close' : '+ Add'} Education
      </button>
</div>
 </div>

 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white ">INTERNSHIPS</div>
<div className="div h-fit">

{resume &&
                resume.internships?.map((edu) => (
<div key={edu.id} className=" flex gap-4 card w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">

  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteInternship(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className='text-zinc-200' onClick={() => handleToggleComponent('internship')}>
        {componentVisibility.internship ? 'Close' : '+ Add'} Internship 
      </button>
</div>
</div>
 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white "> JOBS</div>
<div className="div h-fit">

{resume &&
                resume.jobs?.map((edu) => (
<div key={edu.id} className="flex gap-4 card w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">

  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteJob(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className='text-zinc-200' onClick={() => handleToggleComponent('job')}>
        {componentVisibility.job ? 'Close' : '+ Add'} Job 
      </button>
</div>
</div>
 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white ">POSITIONS OF RESPONSIBILITY</div>
<div className="div h-fit">

{resume &&
                resume.responsibilities?.map((edu) => (
<div key={edu.id} className="card flex gap-4 w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">

  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteResponsibility(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className='text-zinc-200' onClick={() => handleToggleComponent('responsibility')}>
        {componentVisibility.responsibility ? 'Close' : '+ Add'} Responsibility 
      </button>
</div>
</div>
 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white ">TRAININGS/ COURSES</div>
<div className="div h-fit">

{resume &&
                resume.courses?.map((edu) => (
<div key={edu.id} className="card flex gap-4 w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">

  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteResponsibility(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className='text-zinc-200' onClick={() => handleToggleComponent('courses')}>
        {componentVisibility.courses ? 'Close' : '+ Add'} Training/Courses
      </button>
</div>
</div>
 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white ">SKILLS</div>
<div className="div h-fit">

{resume &&
                resume.skills?.map((edu) => (
<div key={edu.id} className="card flex gap-4 w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">

  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteSkills(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div ">
<button className='text-zinc-200' onClick={() => handleToggleComponent('skills')}>
        {componentVisibility.skills ? 'Close' : '+ Add'} Skills
      </button>
</div>
</div>
 </div>
 <div className=" py-5 h-fit flex px-3 rounded  bg-zinc-600  w-full  center1">
<div className="head text-lg  w-[20vw] text-white ">ACADEMICS/ PERSONAL PROJECTS</div>
<div className="div h-fit">

{resume &&
                resume.projects?.map((edu) => (
<div key={edu.id} className="card flex gap-4 w-[43vw] h-fit text-white">
  <div className="div w-[35vw]">
  <h1>{edu.organization}</h1>
  <h1>{edu.profile}</h1>
  <h1>{edu.location}</h1>
  </div>
  <div onClick={()=>{ navigate("/resume");dispatch(asyncDeleteProjects(edu.id))}} className="div h-fit cursor-pointer text-center ">
<i className="ri-delete-bin-5-line"></i>
</div>
</div> ))} 
<div className="div">
<button className='text-zinc-200' onClick={() => handleToggleComponent('projects')}>
        {componentVisibility.projects ? 'Close' : '+ Add'} Projects
      </button>
</div>
</div>
 </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ResumeComponent