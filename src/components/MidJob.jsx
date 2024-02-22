import React from 'react'
import { motion } from 'framer-motion'
const MidJob = () => {
  return (
    <div className= ' relative h-[100vh] w-full bg-zinc-800'>
         <div className='w-full h-[25vh] pt-10 whitespace-nowrap flex gap-3 overflow-hidden'>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className=" text-white line text-9xl font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Internshala ·&nbsp;     
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Internshala ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Internshala ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Internshala ·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Resume·&nbsp;      
</motion.div>
<motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{duration:3, ease:"linear", repeat:Infinity}}  className="line text-white text-9xl  font-[450] font-['TWK Lausanne']  leading-none tracking-tighter">
Internshala ·&nbsp;      
</motion.div>
    </div>
    <div className="mid">
        <h2 className='w-[30vw] top-[20vw] left-[35vw] text-center text-xl text-white absolute'>Internshala doesn't just focus on connecting individuals with internships; it also emphasizes skill development. The platform provides online training programs and courses to enhance the skills of students and professionals. </h2>
    </div>
    <div className="mid">
        <h2 className='w-[30vw] top-[30vw] left-[35vw] text-center text-xl text-white absolute'>Internshala offers a wide range of internship opportunities across various industries and sectors. Whether you are looking for internships in technology, marketing, finance, design, or any other field, Internshala provides a diverse array of options.</h2>
    </div>
    <div className="image1 flex justify-between gap-[45vw] items-center px-[6vw] mt-[14vw]">
              <div
                data-framer-background-image-wrapper="true"
                className="img2 h-[40vh] w-[40vh]"
              >
                <img
                  src="https://framerusercontent.com/images/clKoZCgTHyhJ4eICoT1bJiWb91Q.png?scale-down-to=512"
                  alt=""
                />
              </div>
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
  )
}

export default MidJob