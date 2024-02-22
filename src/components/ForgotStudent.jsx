import React, { useState } from 'react'
import ExtraNav from './ExtraNav'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSendMail } from '../store/Actions/studentActions';

const ForgotStudent = () => {
    const [ email, setemail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submitHandler = async (e) => {
        e.preventDefault()
        const newuser = { email };
        try {
            setIsEmailSent(true); // Set the state to true if the email is sent successfully
            await dispatch(asyncSendMail(newuser));
          } catch (error) {
            console.error(error);
            // Handle errors if needed
          }      
      };
  return (
    <div className='bg-zinc-900 h-[100vh] w-full' >
    <ExtraNav/>
    <div className='div justify-center pt-[7vw] items-center flex flex-col gap-2'>
        <h1 className='text-5xl text-white'>FORGOT YOUR PASSWORD</h1>
        <p className='text-white w-[40vw] text-center'>The "Forgot Password" enables you to reset your passwords seamlessly by submitting their email, triggering an asynchronous password reset email.</p>
  <form  className='div pt-[4vw] flex flex-col gap-2' onSubmit={submitHandler} action="">
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

        <div className="btn flex   justify-center mt-[2vw]">

        {/* <button  className='bg-zinc-100 py-1 rounded px-2'> Sendmail</button> */}
        <button  className='bg-zinc-100 py-1 rounded px-2'> {isEmailSent ? "    Email successfully sent! Check your inbox." :"Sendmail "   }</button>
      
        </div>
  </form>

    </div>
    <div className="image1 flex justify-between gap-[45vw] items-center px-[6vw] -mt-[6vw]">
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

export default ForgotStudent