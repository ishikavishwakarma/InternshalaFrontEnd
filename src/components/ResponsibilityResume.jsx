import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateResponse, asynccurrentResume } from '../store/Actions/resumeActions';

const ResponsibilityResume = ({onClose}) => {
    const { resume } = useSelector((state)=>state.resume  
    )
    const [formValues, setFormValues] = useState({
        
        description: "",
        
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submitHandler = async () => {
        
      await dispatch(asyncCreateResponse(formValues));
          navigate("/resume");
       
      };
      useEffect(() => {    
        dispatch(asynccurrentResume());
        
      }, []);

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
  return (
    <div className="div rounded px-[2vw] py-[2vw] h-[36vw] top-[43vw] w-[35vw] bg-zinc-800 absolute">
    <div className="div flex-col gap-10 h-fit flex items-center justify-center">
        <h1 className='text-2xl text-white'>Position of responsibility</h1>
        <div className="head text-white">

        <h5 className='text-xl'>Description</h5>
        <p>If you have been/are an active part of societies, conducted any events or led a team, add details here</p>
        </div>
      <div className="div  -ml-[.7vw] ">
        <form className="div   h-[15vw] w-[30vw]  " onSubmit={submitHandler} action="">

            <textarea
              className=" w-full p-2 rounded h-full border-slate-600 "
              onChange={handleChange}
                value={formValues.description}
                name="description"
              type="text"
              placeholder="e.g. Led a team of 5 volunteers to plan and conduct activities for literary event in college fest"
            />
           
     
          <div className="btn flex  ml-[24vw] mt-[1vw]">
            <button className="bg-zinc-600 text-white py-2 rounded px-7">
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="btn flex items-end justify-end px-3 relative  -top-[28vw]">
      <i
        onClick={onClose}
        className="cursor-pointer text-2xl text-white ri-close-fill"
      ></i>
    </div>

   
  </div>
  )
}

export default ResponsibilityResume