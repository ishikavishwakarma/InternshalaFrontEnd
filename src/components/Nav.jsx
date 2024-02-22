import React, { useEffect } from 'react' 
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import img from "../images/internshala_og_image-removebg-preview.png"
import { asynccurrentStudent, asyncremoveStudent } from '../store/Actions/studentActions';
import { asynccurrentEmploye, asyncremoveEmploye } from '../store/Actions/employeActions';

const Nav = () => {
  const { isAuth,student} = useSelector((state)=>state.student);
  const { isAuths,employe} = useSelector((state)=>state.employee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stylehandler =()=>{
    const logdiv = document.querySelector(".log") ;
    logdiv.style.display="flex"
  }
  const showdiv =()=>{
    const logdiv = document.querySelector(".detail") ;
    logdiv.style.display="flex"
  }
  const deletehandler=()=>{
    const logdiv = document.querySelector(".log") ;
    logdiv.style.display="none"
  }
  const LogoutHandler = () => {
    console.log("click");
    navigate("/");
    dispatch(asyncremoveStudent());
};

  const LogoutHandler2 = () => {
    console.log("click2");
    navigate("/");
    dispatch(asyncremoveEmploye());

};


  return (
    <div className= {isAuth || isAuths ? "fixed bg-white z-50 ":"bg-transparent fixed z-50" } >
  
        <div className=" px-[7vw] pt-5 gap-[10vw] flex justify-between">
          <section className='text-[1.1vw] font-[600] flex gap-[2vw]'>
         
          <Link className='bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-50' to="/">Home</Link>
          <Link className='bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-50' to="/employe/internship/read">Internships</Link>
          <Link className='bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-50' to="/employe/job/read">Jobs</Link>
          
          </section>
          <section className='flex items-center'>
          <h1  className="  -mt-1 font-['lobster'] text-zinc-700 text-3xl">Internshala</h1>
          </section>
         <section className='mr-7  flex gap-[2vw] ' >
          {
              !isAuth && !isAuths &&(
                <>
                <button  onClick={stylehandler}  className='border-white bg-zinc-600 border h-[2vw] px-5 rounded text-zinc-100'>LogIn</button>
                <div className="log w-[10vw]  hidden bg-zinc-500   absolute  flex flex-col right-[25vw] top-[5vw]">
                <Link onClick={deletehandler} className='  border-white border rounded  h-[2vw] px-5  text-zinc-100' to="/student/signin">LogIn</Link>
                 <Link onClick={deletehandler} className='  border-white border rounded h-[2vw] px-5  text-zinc-100' to="/employe/signin">LogInemploye</Link>
                </div>
        
         <Link className='bg-zinc-600 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-50 ' to="/student/signup">Student-SignUp</Link>
         <Link className='bg-zinc-600 w-fit h-[2vw]  px-[1vw] items-center flex rounded text-gray-50 ' to="/employe/signup">Employee-SignUp</Link>
                </>
              )}
            {  isAuth &&(
              <>
              <div className="div flex gap-5">

              <button
                className="flex justify-center items-center bg-zinc-800 h-[2vw] px-6 rounded text-gray-50"
                title="Signout"
                onClick={LogoutHandler}
            >LogOut
            </button>
            <div onClick={showdiv} className=" overflow-hidden div h-[4.5vh] w-[4.5vh] rounded-full bg-zinc-800 ">
              <img className='h-full w-full object-cover' src={student.avatar.url} alt="" />
            </div>
              </div>
            <div  className=" hidden  absolute h-[22vh] w-[12vw] items-start justify-start right-[7.5vw] flex flex-col top-[8.9vh] bg-white  pt-[9vh] detail">
              <div className="  p-3 head flex-col  -mt-[10vh] items-start justify-start flex">
              <h1 className='  text-base text-black'>{student.firstName}</h1>
              <h1 className='  text-sm text-black'>{student.email}</h1>
              </div>
              <hr className=' w-full pb-3  border-zinc-700'></hr>
              <div className="links pt-[9.5vh] px-3 head flex-col  -mt-[10vh] items-start justify-start flex">
              <Link  className=' w-full   h-[2vw]   text-black' to={`/student/update/${student._id}`}>Edit Profile</Link>
              <Link  className=' w-full   h-[2vw]   text-black' to={`/student/update/${student._id}`}>Change Password</Link>
              <Link  className=' w-full   h-[2vw]   text-black' to="/resume">Create Resume</Link>

              </div>

            </div>
              </>
            
            ) }
           { isAuths &&
            (   <>
           
             <div className="div flex gap-5">

             <button
                className="flex justify-center items-center bg-zinc-800 h-[2vw] px-6 rounded text-gray-50"
                title="Signout"
                onClick={LogoutHandler2}
            >LogOut
            </button>
           <div onClick={showdiv} className=" overflow-hidden div h-[4.5vh] w-[4.5vh] rounded-full bg-zinc-800 ">
           
           </div>
             </div>
           <div  className=" hidden  absolute h-[20vh] w-[12vw] items-start justify-start right-[7.5vw] flex flex-col top-[8.9vh] bg-white  pt-[9vh] detail">
             <div className="  p-3 head flex-col  -mt-[10vh] items-start justify-start flex">
             <h1 className='  text-base text-black'>{employe.firstName}</h1>
             <h1 className='  text-sm text-black'>{employe.Email}</h1>
             </div>
             <hr className=' w-full pb-3  border-zinc-700'></hr>
             <div className="links pt-[9.5vh] px-3 head flex-col  -mt-[10vh] items-start justify-start flex">
             <Link  className=' w-full   h-[2vw]   text-black' to={`/employe/update/${employe._id}`}>Edit Profile</Link>
             <Link  className=' w-full   h-[2vw]   text-black' to={`/employe/reset-password/${employe._id}`}>Change Password</Link>
        

             </div>

           </div>
             </>
            )
              }
            
            
   </section>
            </div>
   <hr className=' w-[100vw] mt-3 border-zinc-700'></hr>
    </div>
  )
}

export default Nav