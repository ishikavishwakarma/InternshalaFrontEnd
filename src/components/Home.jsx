import React from 'react'
import Nav from './Nav'
import ReadAllIntern from './ReadAllIntern'
import Footer from './Footer'
import Midinternship from './Midinternship'
import MidJob from './MidJob'

const Home = () => {
  return (
    <div>
       <Nav />
  <div className='   h-[100vh] w-[98.9vw] '>
    
    <img className='h-full w-full opacity-[1]' src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1 className='text-[2.7vw] ml-[27vw] italic -mt-[68vh] text-white font-bold' >Make your dream career a reality</h1>
  </div>
{/* <ReadAllIntern/> */}
<Midinternship/>
<MidJob/>
<Footer/>
    </div>
  )
}

export default Home