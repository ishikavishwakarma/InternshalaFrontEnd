import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateJob, asynccurrentResume } from '../store/Actions/resumeActions';

const JobResume = ({onClose}) => {
    const { resume } = useSelector((state)=>state.resume  
    )
    const [formValues, setFormValues] = useState({
        designation:"",
        profile: "",
        organization: "",
        location: "",
        description: "",
        start: "",
        end: "",
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submitHandler = async () => {
        
      await dispatch(asyncCreateJob(formValues));
          navigate("/resume");
       
      };
      useEffect(() => {    
        dispatch(asynccurrentResume());
        
      }, []);

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
  return (
    <div className="div rounded pt-2 pl-2 h-fit top-[43vw] w-[35vw] bg-zinc-800 absolute">
      <div className="div flex flex-col items-center justify-center">
      <h1 className='text-2xl text-white'>Job Details</h1>
      <div className="div flex flex-col ">
        <form className="div flex flex-col gap-2" onSubmit={submitHandler} action="">
          <div className="form__group field">
            <input
              className=" form__field border  border-slate-600 "
                onChange={handleChange}
                value={ formValues.designation}
                name="designation"
              type="text"
              placeholder="designation"
            />
            <label htmlFor="Email" className="form__label">
              Enter Designation
            </label>
          </div>
          <div className="form__group field">
            <input
              className=" form__field border  border-slate-600 "
                onChange={handleChange}
                value={ formValues.organization}
                name="organization"
              type="text"
              placeholder="organization"
            />
            <label htmlFor="Email" className="form__label">
              Enter Organization
            </label>
          </div>
       
          <div className="form__group field">
            <input
              className=" form__field border border-slate-600 "
              onChange={handleChange}
                value={formValues.profile}
                name="profile"
              type="text"
              placeholder="profile"
            />
            <label htmlFor="Password" className="form__label">
              Enter profile
            </label>
          </div>
          <div className="form__group field">
            <input
              className=" form__field border border-slate-600 "
              onChange={handleChange}
                value={formValues.location}
                name="location"
              type="text"
              placeholder="location"
            />
            <label htmlFor="Password" className="form__label">
              Enter location
            </label>
          </div>
         
          <div className="form__group field">
            <input
              className=" form__field border border-slate-600 "
              onChange={handleChange}
                value={formValues.start}
                name="start"
              type="date"
              placeholder="password"
            />
            <label htmlFor="Password" className="form__label">
              Enter Starting year
            </label>
          </div>
          <div className="form__group field">
            <input
              className=" form__field border border-slate-600 "
              onChange={handleChange}
                value={formValues.end}
                name="end"
              type="date"
              placeholder="password"
            />
            <label htmlFor="Password" className="form__label">
              Enter Ending year
            </label>
          </div>
          <div className="form__group field">
            <input
              className=" form__field border border-slate-600 "
              onChange={handleChange}
                value={formValues.description}
                name="description"
              type="text"
              placeholder="password"
            />
            <label htmlFor="Password" className="form__label">
              Enter Description
            </label>
          </div>
          <div className="btn flex  ml-[21.5vw] mt-[1vw]">
            <button className="bg-zinc-100 py-1 rounded px-2">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="btn flex items-end justify-end px-6 relative  -top-[34vw]">
      <i
        onClick={onClose}
        className="cursor-pointer text-2xl text-white ri-close-fill"
      ></i>
    </div>

   
  </div>
  )
}

export default JobResume