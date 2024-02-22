import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Nav from './Nav'
import { asynccurrentEmploye } from '../store/Actions/employeActions'
import { Link } from 'react-router-dom';

const EmployeProfile = () => {
    const { employe,isAuths} = useSelector((state)=>state.employee)
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0.2, 1], ["10%", "-65%"]);
    const dispatch = useDispatch();
    useEffect(() => {
     
    dispatch(asynccurrentEmploye());
  },[dispatch]);

  return (
    <>
  <Nav/>
     <div className=' pt-[10vh] h-[100vh] bg-black ' >
      <div className="head">

      <div className="div pt-[12vh]  pl-[12vh]">
  <h1  className='text-5xl font-[300] text-white'>Hi, {employe ? employe.firstName : "dummy name"}</h1>
  <p className=' pl-[.3vh] text-xl text-white'>Fueling careers through internships on Internshala.</p>
</div>
      </div>    
    <div  className=" div">
    <section ref={targetRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 flex h-screen duration-200 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          <div className="group relative h-[23vw] w-[33vw] rounded overflow-hidden bg-neutral-200">
            <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1667516764926-c4ac7e9a14cd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="group relative h-[23vw] w-[33vw] rounded overflow-hidden bg-neutral-200">
            <img className='h-full w-full object-cover'  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="group relative h-[23vw] w-[33vw] rounded overflow-hidden bg-neutral-200">
            <img  className='h-full w-full object-cover'  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="group relative h-[23vw] w-[33vw] rounded overflow-hidden bg-neutral-200">
            <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1576267423429-569309b31e84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
   
        </motion.div>
      </div>
    </section>
    </div>
    <div className="div h-[60vh] bg-black  w-full">
      {/* <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    <div className=" head flex justify-center items-start flex-col gap-16 ">
      <div className=" flex pl-[10vw]   flex-col  items-start  gap-2 h2">
    <h1 className='text-4xl font-[500] text-white'>Crafting Opportunities for Student Growth.</h1>
    <p className='text-white w-[50vw]'>Crafting internship experiences that inspire growth. Fostering talent through meaningful opportunities. Shaping tomorrow's leaders with valuable experiences. Creating pathways for student success.</p>
    </div>
    <div className="btn pl-[10vw] ">
      <a href="/employe/internship/read" className='bg-zinc-700 w-fit h-[2vw]  px-[2vw] items-center flex rounded text-gray-50'> Create Internships</a>
    </div>
    <div className="image1 flex ml-[30vw] -mt-[15vw] justify-end   w-[65vw] items-center px-[6vw] ">
    
              <div
                data-framer-background-image-wrapper="true"
                className="img2 h-[40vh] w-[40vh] "
              >
                <img
                  src="https://framerusercontent.com/images/uojAWLm1FnK0nG6eUDQvr0L7SIo.png"
                  alt=""
                />
              </div>
            </div>
      </div>
    </div>
    <div className=" relative div h-[100vh] bg-black  w-full">
      {/* <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
    <div className=" head flex justify-center items-end flex-col gap-16 ">
    <div className='w-full h-[20vh]    whitespace-nowrap flex gap-3 overflow-hidden'>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className=" text-white line text-9xl font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;     
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Pioneer ·&nbsp;      
</motion.div>
    </div>
      <div className=" flex pr-[10vw] pt-[7vw] flex-col  items-end  gap-2 h2">
    <h1 className='text-4xl font-[500] text-white'>Empowering Lives Through Job Creation</h1>
    <p className='text-white  w-[44vw] text-end'>As an employment architect, I architect diverse job landscapes, fostering a platform where talent meets opportunity, and careers are built with purpose and progression.</p>
    </div>
    <div className="btn pr-[10vw]  ">
      <a href="/employe/job/read" className='bg-zinc-700 w-fit h-[2vw]  px-[3vw] py-[1.4vw] items-center flex rounded text-gray-50'> Create Jobs</a>
    </div>
    <div className="image1 flex -mt-[15vw] mr-[30vw]  justify-between w-[65vw] items-center px-[6vw] ">
    <div
                data-framer-background-image-wrapper="true"
                className="img2 h-[40vh] w-[40vh]"
              >
                <img
                  src="https://framerusercontent.com/images/clKoZCgTHyhJ4eICoT1bJiWb91Q.png?scale-down-to=512"
                  alt=""
                />
              </div>
             
            </div>
      </div>
    </div>
    </div>
    </>
   
  )
}

export default EmployeProfile