import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateSkill, asynccurrentResume } from '../store/Actions/resumeActions';

const SkillResume = ({onClose}) => {
    const { resume } = useSelector((state)=>state.resume  
    )
    const [formValues, setFormValues] = useState({
        
        skill: "",
        
      });
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submitHandler = async () => {
        
      await dispatch(asyncCreateSkill(formValues));
          navigate("/resume");
       
      };
      useEffect(() => {    
        dispatch(asynccurrentResume());
        
      }, []);

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
  return (
    <div className="div rounded px-[2vw] py-[2vw] h-[16vw] top-[43vw] w-[35vw] bg-zinc-800 absolute">
    <div className="div flex-col gap-7 h-fit flex items-center justify-center">
        <h1 className='text-2xl text-white'>SKILLS</h1>
        <div className="div flex flex-col ">
          <form className="div flex flex-col gap-2" onSubmit={submitHandler} action="">
        <div className="form__group field">
              <input
                className=" form__field border border-slate-600 "
                onChange={handleChange}
                  value={formValues.skill}
                  name="skill"
                type="text"
                placeholder="skill"
              />
              <label htmlFor="Password" className="form__label">
                Add Skills
              </label>
            </div>
            <div className="btn flex  ml-[24.5vw] mt-[1vw]">
              <button className="bg-zinc-100 py-1 rounded px-2">
                Add Skills
              </button>
            </div>
            </form>
            </div>
    </div>
    <div className="btn flex items-end justify-end px-3 relative  -top-[11.5vw]">
      <i
        onClick={onClose}
        className="cursor-pointer text-2xl text-white ri-close-fill"
      ></i>
    </div>

   
  </div>
  )
}

export default SkillResume