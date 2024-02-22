import { motion } from 'framer-motion'
import gsap, { Linear, Power4 } from 'gsap/all'
import React, { useEffect, useRef, useState } from 'react'
const Image = () => {
  const [move, setmove] = useState({top:"50%",left:"60%"})
  useEffect(() => {
    window.addEventListener("mousemove",function (e) {
      setmove({top:e.clientY+"px",left:e.clientX+"px"})
    })
  })
//   const img = useRef(null)
  
//   useEffect(() => {
//     window.addEventListener("mousemove",function (e) {
//     if (e.clientX<window.innerWidth/2) {
//       var val =gsap.utils.mapRange(0,  window.innerWidth/2,0,1,e.clientX);
//       // console.log(val.toFixed(2));
//       const lerp = (x, y, a) => x * (1 - a) + y * a;
//     let move =  lerp(-200,0,val)

//     gsap.to(img.current,{
//       x:move+"px",
//       ease:Power4,
//       duration:1.5
//     })
//     }
//     else{
//       var val =gsap.utils.mapRange(window.innerWidth/2,  window.innerWidth,1,0,e.clientX);
//       // console.log(val.toFixed(2));
//       const lerp = (x, y, a) => x * (1 - a) + y * a;
//     let move =  lerp(200,0,val);

//     gsap.to(img.current,{
//       x:move+"px",
//       ease:Power4,
//       duration:1.5
//     })

//     }
//         })
//   })
  
  
  return (
    <div>
      <motion.img
      initial={{top:move.top,left:move.left}}
      animate={{top:move.top,left:move.left}}
      transition={{ease:"linear"}}
       className='h-96 top-[50%]  left-[60%] w-[20vw] -translate-x-[50%] -translate-y-[50%] fixed' src="/ladki.avif" alt="" />
      
      </div>
  )
}

export default Image