import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ExtraNav = () => {
  const navigate = useNavigate();
  return (
    <div className=' h-[10vh] w-full  '>
    <section className='flex items-center justify-between px-24 pt-4'>
          <h1  className="  font-['lobster'] text-zinc-100 text-3xl">Internshala</h1>
          <button onClick={()=>navigate(-1)} className="text-xl text-white -pt-[5vw]"><i className="ri-arrow-left-line"></i>Back</button>
   </section>
  
<hr className=' w-full mt-3 border-zinc-700'></hr>
</div>
  )
}

export default ExtraNav