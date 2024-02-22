import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncsignup } from '../store/Actions/studentActions';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import ExtraNav from './ExtraNav';


const Signup = () => {
  // const { Users,setUsers } = props
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [ email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [contact, setcontact] = useState("");
  
  const navigate = useNavigate();
 const dispatch = useDispatch();
 const { isAuth} = useSelector((state)=>state.student)
  const signupstudent = (e) => {
    e.preventDefault()
    const newuser = { firstName,lastName,email,contact, password, city, gender };
    dispatch(asyncsignup(newuser));
};
useEffect(() => {
  isAuth && navigate("/");
}, [isAuth]);
  return (
    <div className='bg-zinc-900 overflow-hidden h-[100vh] w-full'>

<ExtraNav/>
      {/* <button onClick={signupstudent}>signup</button> */}
      <div className="div pt-5 flex justify-center flex-col items-center">

        <h1 className='text-3xl text-white'>SIGN-UP AS STUDENT</h1>
      <div className="formdiv  h-full  w-[30vw] ">
      <form className='flex gap-2 h-full  flex-col' onSubmit={signupstudent}>
      <div className="form__group field">

        <input
        className='  form__field border border-slate-600 '
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
          type="text"
          placeholder="firstName"
        />
        <label htmlFor="Password" className='form__label'>Enter firstName</label>
      </div>
      <div className="form__group field">

        <input
        className='  form__field border border-slate-600 '
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
          type="text"
          placeholder="lastName"
        />
        <label htmlFor="Password" className='form__label'>Enter lastName</label>
      </div>

        <div className="form__group field">

           <input
        className=' border  form__field border-slate-600 '
          onChange={(e) => setcontact(e.target.value)}
          value={contact}
          type="Number"
          placeholder="Contact No"
        />
        <label htmlFor="Password" className='form__label'>Enter Contact</label>
</div>
        <div className="form__group field">

        <input
        className=' border border-slate-600 form__field'
          onChange={(e) => setcity(e.target.value)}
          value={city}
          type="text"
          placeholder="City"
        />
        <label htmlFor="Password" className='form__label'>Enter City</label>
</div>

        
        {/* <input onClick={(e)=>setmale(e.target.value)} type="radio" name='gender' value="male" />male
    <input onClick={(e)=>setfemale(e.target.value)} type="radio" name='gender' value="female" />female */}
    <div className="gender  flex gap-3">
      <div  className='flex gap-2' >
    <input
          checked={gender === "Male"}
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          name="gender"
          value="Male"
          className='text-white' 
        /> <h2 className='text-white'>Male</h2>
      </div>
      <div  className='flex gap-2' >

        <input
          checked={gender === "Female"}
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          name="gender"
          value="Female"
        />
        <h2  className='text-white'>Female</h2>
      </div>
        <div  className='flex gap-2' >

        <input
          checked={gender === "Others"}
          onChange={(e) => setgender(e.target.value)}
          type="radio"
          name="gender"
          value="Others"
        /><h2  className='text-white'>Others</h2>
        </div>
    </div>
      
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
        <button className='bg-zinc-300 py-2 mt-5 rounded'>submit</button>
      </form>
      </div>
      <div className="image1 flex justify-between gap-[45vw] items-center px-[6vw] -mt-[13vw]">
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
    </div>
  )
}

export default Signup