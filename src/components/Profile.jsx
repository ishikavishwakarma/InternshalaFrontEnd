import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import { motion } from 'framer-motion';
import { asynccurrentStudent } from '../store/Actions/studentActions';
import { asynccurrentEmploye } from '../store/Actions/employeActions';
import ResumeCreate from './ResumeCreate';
import Footer from './Footer';


const Profile = () => {
  const parent = {
    initial:{},
    animate:{},
    exit:{},
  };
  const circle = {
    initial: { opacity:0, scale: 0 },
    animate: {opacity:1, scale: 1},
    exit: { opacity:0, scale: 0 }
  };
  const { student,isAuth} = useSelector((state)=>state.student)
  const dispatch = useDispatch();
  useEffect(() => {
    // isAuth &&dispatch(asynccurrentStudent());
    // if(isAuth===true) dispatch(asynccurrentStudent())
  //  isAuths && dispatch(asynccurrentEmploye());
  dispatch(asynccurrentStudent());
  // dispatch(asynccurrentEmploye());
},[dispatch]);

  return (
    <div className='bg-zinc-400   h-[100vh] w-[98.9vw] '>
    <Nav/>
      <div className=" h-[100vh] w-[98.9vw] bg-black div pt-[9.5vh]">
<div className="div pt-[12vh]  pl-[12vh]">
  <h1 className='text-5xl font-[500] text-white'>Hi, {student ? student.firstName : "dummy name"}</h1>
  <p className=' pl-[.3vh] text-xl text-white'>Let’s help you land your dream career</p>
</div>
      <motion.div variants={parent}   initial="initial"
        animate="animate"
        exit="exit"
        transition={{staggerChildren:0.5,easings:"0.76, 0, 0.24, 1"}} className="box  px-[5vw] py-[4vw] mt-5 flex items-center justify-between h-[60vh] w-full">
        <motion.div variants={circle} className="box1 h-full overflow-hidden w-[25vw] rounded ">
          <img className='h-full w-full  object-cover' src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </motion.div>
        <motion.div variants={circle} className="box2 h-full overflow-hidden rounded w-[25vw]">
   
          <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
     
        </motion.div>
        <motion.div variants={circle} className="box3 h-full overflow-hidden rounded w-[25vw] ">
          <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

        </motion.div>
      </motion.div>
      </div>
      
     <ResumeCreate/>
     <Footer/>
    </div>
  )
}

export default Profile