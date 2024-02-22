import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { asyncCreateEducation, asynccurrentResume } from "../store/Actions/resumeActions";

const EducationResume = ({ onClose }) => {
    const { resume } = useSelector((state)=>state.resume  
    )
    const [formValues, setFormValues] = useState({
        college: "",
        degree: "",
        status: "",
        stream: "",
        performance: "",
        start: "",
        end: "",
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submitHandler = async () => {
        
      await dispatch(asyncCreateEducation(formValues));
          navigate("/resume");
       
      };
      useEffect(() => {    
        dispatch(asynccurrentResume());
        
      }, []);

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
  return (
    <div className="div rounded pt-2 pl-2 h-fit top-[15vw] w-[35vw] bg-zinc-800 absolute">
      <div className="div flex flex-col items-center justify-center">
      <h1 className='text-2xl text-white'>Education Details</h1>
        <div className="div flex flex-col ">
          <form className="div flex flex-col gap-2" onSubmit={submitHandler} action="">
            <div className="form__group field">
              <input
                className=" form__field border  border-slate-600 "
                  onChange={handleChange}
                  value={ formValues.college}
                  name="college"
                type="text"
                placeholder="Email"
              />
              <label htmlFor="Email" className="form__label">
                Enter School / College
              </label>
            </div>
            <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.degree}
                  name="degree"
                type="text"
                placeholder="password"
              />
              <label htmlFor="Password" className="form__label">
                Enter degree / secondary educations
              </label>
            </div>
            <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.status}
                  name="status"
                type="text"
                placeholder="password"
              />
              <label htmlFor="Password" className="form__label">
                Enter Status
              </label>
            </div>
            <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.stream}
                  name="stream"
                type="text"
                placeholder="password"
              />
              <label htmlFor="Password" className="form__label">
                Enter stream{" "}
              </label>
            </div>
            <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.performance}
                  name="performance"
                type="text"
                placeholder="password"
              />
              <label htmlFor="Password" className="form__label">
                Enter performance
              </label>
            </div>
            <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.start}
                  name="start"
                type="number"
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
                type="number"
                placeholder="password"
              />
              <label htmlFor="Password" className="form__label">
                Enter Ending year
              </label>
            </div>
            <div className="btn flex  ml-[21.5vw] mt-[1vw]">
              <button className="bg-zinc-100 py-1 rounded px-2">
                Add Education
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
  );
};

export default EducationResume;
