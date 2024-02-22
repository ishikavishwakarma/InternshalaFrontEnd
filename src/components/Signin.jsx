import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncsignin } from '../store/Actions/studentActions';
import {asyncEmployesignin} from '../store/Actions/employeActions'
import ExtraNav from './ExtraNav';

const Signin = () => {
  const [password, setpassword] = useState("");
  const [ email, setemail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth} = useSelector((state)=>state.student)


   const signinstudent = (e) => {
    e.preventDefault()
    const newuser = { email, password };
     dispatch(asyncsignin(newuser));
 };

 useEffect(() => {
  isAuth  && navigate("/"); 
 }, [isAuth]);
  return (
    <div className='bg-zinc-900 h-[100vh] w-full' >
    <ExtraNav/>
    <div className="div flex items-center">
  <div className="divimg container h-[80vh] w-[35vw] mt-[2vw] ml-[10vw] items-center flex flex-col bg-slate-300 ">
    <img className='h-full w-full object-cover ' src="https://images.unsplash.com/photo-1649175970893-4698edbb885b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
      <div className="container h-[60vh] w-[25vw] items-center flex flex-col bg-zinc-900  ml-[20vh] ">
        <div className="head text-white">
          <h1 className='text-4xl'>Welcome Back</h1>
        </div>
    <div className='div flex flex-col gap-10'>
  <form  className='div flex flex-col gap-2' onSubmit={signinstudent} action="">
  <div className="form__group field">
  <input
        className=' form__field border border-slate-600 '

          onChange={(e) => setemail(e.target.value)}
          value={ email}
          type="text"
          placeholder="Email"
        />
        <label htmlFor="Email" className='form__label'>Enter Email</label>
  </div>
  <div className="form__group field">

        <input
        className=' form__field border border-slate-600 '
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="text"
          placeholder="password"
        />
        <label htmlFor="Password" className='form__label'>Enter Pasword</label>

  </div>
        <div className="btn flex  ml-[21.5vw] mt-[1vw]">

        <button  className='bg-zinc-100 py-1 rounded px-2'>login as student</button>
      
        </div>
  </form>

    </div>
    <div className="forget -mt-[4vh]">
      <Link to="/student/forgot" className='text-white  -ml-[15vw]'>Forget password</Link>
    </div>
      </div>
    </div>
      
    </div>
  )
}

export default Signin