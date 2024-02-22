import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ResumeCreate = () => {
  return (
    <div className='h-[100vh] w-full bg-zinc-800 pt-[15vh] '>
          <div className='w-full h-[20vh]    whitespace-nowrap flex gap-3 overflow-hidden'>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className=" text-white line text-9xl font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume ·&nbsp;     
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume ·&nbsp;      
</motion.div>
    </div>
<div className="secod">
      <p className=' ml-[5vw] mt-[6vw] text-white'>Empower your career journey with expertly crafted <br /> resumes that  showcase your unique strengths and <br /> open  doors to new opportunities.</p>
    </div>
    <div className="button ml-[19.5vw] mt-[3vw] ">
      
    <a className='bg-zinc-400 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-80' href="/resume">Create resume</a>
    </div>
    <div className="imgcom overflow-hidden rounded h-[30vh] -mt-[8vh] w-[20vw] ml-[50vw] ">
      <img className='h-full w-full  object-cover' src="https://plus.unsplash.com/premium_photo-1683531060766-c460adea7010?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <div className="imgcom overflow-hidden rounded  h-[30vh] -mt-[45vh] w-[20vw] ml-[60vw] ">
      <img className='h-full w-full  object-cover' src="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    </div>
  )
}

export default ResumeCreate