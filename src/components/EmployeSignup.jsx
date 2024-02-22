import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncEmployesignup } from '../store/Actions/employeActions';
import { useNavigate } from 'react-router-dom';
import ExtraNav from './ExtraNav';
const EmployeSignup = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [Password, setPassword] = useState("");
    const [ Email, setEmail] = useState("");
    const [organizationName, setorganizationName] = useState("");
    const [contact, setcontact] = useState("");
    
    const navigate = useNavigate();
   const dispatch = useDispatch();
   const { isAuths} = useSelector((state)=>state.employee)
    const signupEmploye = (e) => {
      e.preventDefault()
      const newuser = { firstName,lastName,Email,contact, Password, organizationName };
      dispatch(asyncEmployesignup(newuser));
  };
  useEffect(() => {
    isAuths && navigate("/");
  }, [isAuths]);
  return (
    <div>
      {/* <button onClick={signupstudent}>signup</button> */}
     
      <div className='bg-zinc-900 overflow-hidden h-[100vh] w-full'>

<ExtraNav/>
      {/* <button onClick={signupstudent}>signup</button> */}
      <div className="div pt-5 flex justify-center flex-col items-center">

        <h1 className='text-3xl text-white'>SIGN-UP AS EMPLOYE</h1>
      <div className="formdiv  h-full  w-[30vw] ">
      <form className='flex gap-2 h-full  flex-col' onSubmit={signupEmploye}>
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
          onChange={(e) => setorganizationName(e.target.value)}
          value={organizationName}
          type="text"
          placeholder="City"
        />
        <label htmlFor="Password" className='form__label'>Enter City</label>
</div>

        
        {/* <input onClick={(e)=>setmale(e.target.value)} type="radio" name='gender' value="male" />male
    <input onClick={(e)=>setfemale(e.target.value)} type="radio" name='gender' value="female" />female */}
    
      
    <div className="form__group field">
  <input
        className=' form__field border border-slate-600 '

          onChange={(e) => setEmail(e.target.value)}
          value={ Email}
          type="text"
          placeholder="Email"
        />
        <label htmlFor="Email" className='form__label'>Enter Email</label>
  </div>
          
  <div className="form__group field">

<input
className=' form__field border border-slate-600 '
  onChange={(e) => setPassword(e.target.value)}
  value={Password}
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
    </div>
  )
}

export default EmployeSignup