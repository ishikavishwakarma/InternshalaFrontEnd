import React from 'react'

const Midinternship = () => {
  return (
    <div className=' relative h-[100vh] w-full bg-zinc-800'>
<div className="head relative pt-[5vw] pl-[8vw]">
    <h1 className=' absolute z-30 top-[5vw] left-[50vh] text-7xl text-white '>INTERNSHALA</h1>
</div>
<div className=" rounded p-3 details absolute top-[14vw] left-[59vw] bg-zinc-400 h-[22vh] w-[25vw]">
    <h1 className='font-[500] text-xl'>Internships</h1>
    <p className='leading-5 text-sm pb-4'>Internships are crucial for providing practical experience, fostering skill development, and enhancing employability in today's competitive job market.</p>
    <a className='bg-zinc-300 py-1 rounded px-3 ' href="/employe/internship/read">Check-Out</a>
</div>
<div className="details p-3 absolute top-[27vw] left-[14vw] rounded bg-zinc-100 h-[22vh] w-[25vw]">
<h1 className='font-[500] text-xl'>Jobs</h1>
    <p className='leading-5 text-sm pb-4'>
Internships significantly boost job prospects by offering hands-on experience, networking opportunities, and a chance to apply academic knowledge in real-world .</p>
    <a className='bg-zinc-400 py-1 rounded px-3 ' href="/employe/job/read">Check-Out</a>
</div>
<div className=" ml-[35vw]  mt-[2.5vw] img h-[75vh] bg-black w-[28vw]">
<img className='h-full object-cover w-full' src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
    </div>
  )
}

export default Midinternship