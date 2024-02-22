import React, { useEffect, useState } from 'react'
import ExtraNav from './ExtraNav'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asynccurrentStudent, asynceditStudent } from '../store/Actions/studentActions';

const EditStudentProfile = () => {
  const { isAuth,student} = useSelector((state)=>state.student);
  const [firstName, setfirstName] = useState(student.firstName);
  const [lastName, setlastName] = useState(student.lastName);
  const [contact, setcontact] = useState(student.contact);
  const [ email, setemail] = useState(student.email);
  const [ avatar, setavatar] = useState(student.avatar);
  const navigate = useNavigate();
 const dispatch = useDispatch();
  const editstudent = (e) => {
    e.preventDefault()
    const newuser = { firstName,email,contact,lastName,avatar };
    dispatch(asynceditStudent(newuser,student?._id));
    navigate("/");
};
useEffect(() => {

  if (!student) {
    dispatch(asynccurrentStudent());
  }
}, [dispatch, student]);
  return (
    <div className=" w-[100vw] h-[100vh] bg-black ">
      <ExtraNav/>
<div className="div items-center py-[1vw] justify-center gap-[10vw] flex">
  <div className="head items-center flex flex-col gap-[9vw]">
<div className="heading">
  <h1 className='text-white text-5xl '>EDIT DETAILS</h1>
</div>
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
<div className='div pt-[.1vw] items-center flex flex-col gap-10'>
  <div className=" image h-[15vh] overflow-hidden w-[15vh] rounded-full bg-red-200 ">
  <img className='h-full w-full object-cover ' src={student.avatar.url} alt="" />
  </div>

  <form onSubmit={editstudent} className='div flex flex-col gap-3'  action="">
  <div className="form__group field">
  <input
        className=' form__field border border-slate-600 '
          onChange={(e) => setemail(e.target.value)}
          value={email }
          type="text"
          placeholder="Email"
        />
        <label htmlFor="Email" className='form__label'>Email</label>
  </div>

  <div className="form__group field">

        <input
        className=' form__field border border-slate-600 '
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
          type="text"
          placeholder="password"
        />
        <label htmlFor="Password" className='form__label'>FirstName</label>

  </div>
  <div className="form__group field">

        <input
        className=' form__field border border-slate-600 '
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
          type="text"
          placeholder="LastName"
        />
        <label htmlFor="Password" className='form__label'>LastName</label>

  </div>
  <div className="form__group field">

        <input
        className=' form__field border border-slate-600 '
          onChange={(e) => setcontact(e.target.value)}
          value={contact}
          type="text"
          placeholder="Contact"
        />
        <label htmlFor="Password" className='form__label'>Contact</label>

  </div>
        <div className="btn flex  ml-[23.5vw] mt-[1vw]">

        <button  className='bg-zinc-100 py-1 rounded px-3'>Edit Profile</button>
      
        </div>
  </form>

    </div>
   </div>
    </div>
  )
}

export default EditStudentProfile