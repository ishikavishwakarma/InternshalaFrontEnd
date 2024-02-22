import React, { useEffect, useState } from "react";
import {
  asynccreateJob,
  asyncreadJob,
  asyncreadSingleJob,
} from "../store/Actions/employeActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const EmployeReadJob = () => {
  const { employe, isAuths, jobs } = useSelector((state) => state.employee);
  const [formValues, setFormValues] = useState({
    title: "",
    skill: "",
    jobType: "",
    salary: "",
    description: "",
    opening: "",
    perks: "",
    preferences: "",
    experience: "",
    organizationName: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(asynccreateJob(formValues));
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    // dispatch(student)
    // dispatch(asynccreateInternship());
    dispatch(asyncreadJob());
    !isAuths && navigate("/employe/internship/read");
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="center ">
        <div className="head  ">
          <div className="img h-[150vh] pt-[2vh] w-full bg-black ">
            <div className=" mt-[16vh]  flex flex-col items-center  head">
              <h1 className="  text-white pb-3 text-5xl font-[700]">
                Create Impactful Jobs Now
              </h1>
              <h3 className="  text-white text-center w-[50vw]  text-xl font-[100]">
                Embark on your professional journey by seamlessly applying for
                transformative jobs with our expert guidance and curated
                resources.
              </h3>
              <div className="formdiv h-full pt-[8vh] pl-[20vw] w-[40vw] ">
                <form
                  className="flex gap-2 h-full  flex-col"
                  onSubmit={submitHandler}
                >
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setprofile(e.target.value)}
                      onChange={handleChange}
                      value={formValues.title}
                      type="text"
                      name="title"
                      placeholder="title"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter title
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setskill(e.target.value)}
                      onChange={handleChange}
                      name="skill"
                      value={formValues.skill}
                      type="text"
                      placeholder="Skills"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Skills
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setskill(e.target.value)}
                      onChange={handleChange}
                      name="jobType"
                      value={formValues.jobType}
                      type="text"
                      placeholder="jobType"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter jobType
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className="  form__field border border-slate-600 "
                      // onChange={(e) => setskill(e.target.value)}
                      onChange={handleChange}
                      name="experience"
                      value={formValues.experience}
                      type="text"
                      placeholder="experience"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Experience
                    </label>
                  </div>

                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setopening(e.target.value)}
                      onChange={handleChange}
                      name="opening"
                      value={formValues.opening}
                      type="Number"
                      placeholder="Opening date"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter Opening
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setopening(e.target.value)}
                      onChange={handleChange}
                      name="organizationName"
                      value={formValues.organizationName}
                      type="text"
                      placeholder="organizationName"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter organizationName
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border  form__field border-slate-600 "
                      // onChange={(e) => setamount(e.target.value)}
                      onChange={handleChange}
                      name="salary"
                      value={formValues.salary}
                      type="Number"
                      placeholder="Opening date"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter salary
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border border-slate-600 form__field"
                      // onChange={(e) => setfrom(e.target.value)}
                      onChange={handleChange}
                      name="description"
                      value={formValues.description}
                      type="text"
                      placeholder="City"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter description
                    </label>
                  </div>
                  <div className="form__group field">
                    <input
                      className=" border border-slate-600 form__field"
                      // onChange={(e) => setresponsibility(e.target.value)}
                      onChange={handleChange}
                      name="preferences"
                      value={formValues.preferences}
                      type="text"
                      placeholder="City"
                    />
                    <label htmlFor="Password" className="form__label">
                      Enter preferences
                    </label>
                  </div>

                  {/* <input onClick={(e)=>setmale(e.target.value)} type="radio" name='gender' value="male" />male
    <input onClick={(e)=>setfemale(e.target.value)} type="radio" name='gender' value="female" />female */}

                  <div className="form__group field">
                    <input
                      className=" form__field border border-slate-600 "
                      // onChange={(e) => setduration(e.target.value)}
                      onChange={handleChange}
                      name="perks"
                      value={formValues.perks}
                      type="text"
                      placeholder="perks"
                    />
                    <label htmlFor="Email" className="form__label">
                      Enter perks
                    </label>
                  </div>

                  <div className="btn flex w-[30vw] mt-[1vw]">
                    <button className="bg-zinc-100 w-full py-1 rounded px-2">
                      Create Job
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="image1 flex justify-between items-center px-[14vw] -mt-[30vw]">
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
          </div>
          {
            <div className="text  w-full bg-zinc-900 ">
              <div className=" ml-[8vw] pt-[3vw] flex flex-col  head">
                <h1 className=" text-white text-7xl font-[600]">JOBS..</h1>
                <p className="text-white text-xl">
                  Your gateway to jobs – connecting aspiring talents with
                  opportunities.
                </p>
              </div>
              <div className=" h-fit pb-[10vw] items-start pt-[10vh] pl-[10vh]  flex flex-wrap gap-10 scroll-0  ">
                {jobs &&
                  jobs.map((internship) => (
                    <div
                      key={internship._id}
                      className="card h-[21vw] flex flex-col px-[1.5vw] py-[1.5vw] rounded-lg w-[28vw] bg-zinc-100 "
                    >
                      <div className="head ">
                        <h3 className="text-2xl font-[500]">
                          {internship.title}
                        </h3>
                        <h1 className="text-sm font-[400]">
                          {internship.skill}
                        </h1>
                      </div>
                      <div className="div pt-5 gap-[5vw] flex items-start">
                        <div className=" flex items-center gap-2 pt-[1vw] work">
                          <i
                            className={
                              internship.jobType == "Work from home"
                                ? " text-base ri-home-4-line"
                                : "ri-building-line text-lg "
                            }
                          />
                          <h3 className="text-lg font-[600]">
                            {internship.jobType}
                          </h3>
                        </div>

                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className=" text-base ri-play-circle-line" />
                            <h3 className="text-base font-[600]">START DATE</h3>
                          </div>
                          <h3 className="px-1">{internship.opening}</h3>
                        </div>
                      </div>
                      {/* <div className="extra2">
  <div className=" flex items-center gap-2 pt-[1vw] work">
  <i className=" text-base ri-calendar-line"/>
  <h3 className="text-base font-[600]">DESCRIPTION</h3>
  </div>
  <h3 className="px-1">{internship.description}</h3>
    </div> */}

                      <div className="extra  flex -mt-1  flex-wrap">
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className="text-base ri-wallet-3-line" />
                            <h3 className="text-base font-[600]">STIPEND</h3>
                          </div>
                          <h3 className="px-1">₹ {internship.salary}/month</h3>
                        </div>
                      </div>
                      <Link
                        to={`/employe/job/read/${internship._id}`}
                        className="bg-zinc-800 w-fit h-[2vw]  px-[1vw] mt-[3.5vw] items-center ml-[16vw] flex rounded text-gray-50"
                      >
                        View Details
                      </Link>
                    </div>
                  ))}
              </div>
              {/* {internships &&
  internships.map((internship) => (
    <li key={internship._id}>
      <h1>employe</h1>
      <h3>{internship.profile}</h3>
    </li>
  ))}
*/}
            </div>
          }
        </div>
      </div>
    </>
  );
};

export default EmployeReadJob;
