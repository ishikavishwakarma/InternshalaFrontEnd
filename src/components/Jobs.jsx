import React, { useEffect } from "react";
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import { asyncreadJob } from "../store/Actions/employeActions";
import { Link, useNavigate } from "react-router-dom";
import { asyncStudentjob } from "../store/Actions/studentActions";
import EmployeReadJob from "./EmployeReadJob";
import Footer from "./Footer";
import ReadAllJob from "./ReadAllJob";

const Jobs = () => {
  const { employe, isAuths, jobs } = useSelector((state) => state.employee);

  const { student, isAuth, job } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // dispatch(asyncreadInternship());
    dispatch(asyncStudentjob());
    !isAuth || (!isAuths && navigate("/employe/job/read"));
  }, []);
  return (
    <div className=" h-[100vh] w-[98.9vw] bg-neutral-300 ">
      <Nav />
      { !isAuth&& !isAuths&& <ReadAllJob/>}
      {isAuth && (
        <div className="center">
          <div className="head">
            <div className="img h-[100vh] pt-[7vh]  pl-[4vw] w-full bg-black ">
              <div className=" mt-[16vh]  flex flex-col items-start  head">
                <h1 className="  text-white pb-3 text-7xl font-[700]">
                  Discover Your Dream Job
                </h1>
                <h1 className="  text-zinc-600 text-5xl font-[600]">
                  Unlock Jobs Success with Us!
                </h1>

                <h3 className="  text-white text-start w-[30vw] pt-[3vw] text-xl font-[100]">
                  Embark on your professional journey by seamlessly applying for
                  transformative jobs with our expert guidance and curated
                  resources.
                </h3>
                <h3 className="  text-white px-4 py-1 rounded-lg mt-[4vw] text-2xl border font-[100]">
                  Your Growth Partner
                </h3>
              </div>
              <div className="image1 flex justify-end items-center px-[6vw] -mt-[15vw]">
                <div
                  data-framer-background-image-wrapper="true"
                  className="img2 h-[50vh] w-[56vh] "
                >
                  <img
                    src="https://framerusercontent.com/images/uojAWLm1FnK0nG6eUDQvr0L7SIo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="text  w-full bg-zinc-900 ">
              <div className="  pt-[3vw] flex items-center justify-center flex-col  head">
                <h1 className=" text-white text-7xl font-[600]">
                  JOBS OPPORTUNITIES..
                </h1>
                <p className="text-white text-xl">
                  Your gateway to internships – connecting aspiring talents with
                  opportunities.
                </p>
              </div>
              <div className=" h-fit pb-[10vw] items-start pt-[10vh] pl-[10vh]  flex flex-wrap gap-10 scroll-0  ">
                {job &&
                  job.map((internship) => (
                    <div
                      key={internship._id}
                      className="card h-[21vw] flex flex-col px-[1.5vw] py-[1.5vw] rounded-lg w-[28vw] bg-zinc-100 "
                    >
                      <div className="head ">
                        <h1 className="text-2xl font-[500]">
                          {internship.title}
                        </h1>
                        <h3 className="text-sm font-[400]">
                          {internship.organizationName}
                        </h3>
                      </div>
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
                      <div className="extra pt-3 flex  flex-wrap gap-10">
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className=" text-base ri-play-circle-line" />
                            <h3 className="text-base font-[600]">START DATE</h3>
                          </div>
                          <h3 className="px-1">Immediately</h3>
                        </div>
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className=" text-base ri-calendar-line" />
                            <h3 className="text-base font-[600]">PERKS</h3>
                          </div>
                          <h3 className="px-1">{internship.perks}</h3>
                        </div>
                      </div>
                      <div className="extra  flex -mt-1  flex-wrap gap-16">
                        <div className="extra2">
                          <div className=" flex items-center gap-2 pt-[1vw] work">
                            <i className="text-base ri-wallet-3-line" />
                            <h3 className="text-base font-[600]">STIPEND</h3>
                          </div>
                          <h3 className="px-1">₹{internship.salary}/month</h3>
                        </div>
                      </div>
                      <Link
                        to={`/employe/job/read/${internship._id}`}
                        className="bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center ml-[15vw] flex rounded text-gray-50"
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

            {/* <ul>
          {jobs &&
            jobs.map((jobs) => (
              <li key={jobs._id}>
                <h3>{jobs.profile}</h3>
              
              </li>
            ))}
        </ul> */}
          </div>
        </div>
      )}
      {isAuths && <EmployeReadJob />}
      <Footer/>
    </div>
  );
};

export default Jobs;
