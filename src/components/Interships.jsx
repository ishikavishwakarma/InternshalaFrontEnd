import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import 'remixicon/fonts/remixicon.css'
import { useDispatch, useSelector } from "react-redux";
import { asyncreadInternship } from "../store/Actions/employeActions";
import { asyncStudentintern, asyncapplyInternship } from "../store/Actions/studentActions";
import { Link, useNavigate } from "react-router-dom";
import EmployeReadInternship from "./EmployeReadInternship";
import ReadAllIntern from "./ReadAllIntern";
import Footer from "./Footer";

const Interships = () => {
  const { employe, isAuths, internships } = useSelector(
    (state) => state.employee
  );
  const { student, isAuth, intern } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const applyintern = (e, internshipId) => {
    e.preventDefault()
  
    dispatch(asyncapplyInternship(intern,internshipId));
 
    navigate("/employe/internship/read");
};

  useEffect(() => {
    // dispatch(asyncreadInternship());
    dispatch(asyncStudentintern());
    !isAuth || !isAuths  && navigate("/employe/internship/read"); 
  }, []);

  return (
    <div className=" h-[100vh]  w-[98.9vw]  ">
      <Nav />
      
    { !isAuth&& !isAuths&& <ReadAllIntern/>}
   {  isAuth &&
    <div className="center ">
        <div className="head  ">
          <div className="img h-[100vh] pt-[10vh] w-full bg-black ">
            <div className=" mt-[16vh]  flex flex-col items-center  head">
              <h1 className="  text-white pb-3 text-7xl font-[700]">
                Your Career Catalyst!
              </h1>
              <h1 className="  text-zinc-500 text-6xl font-[700]">
                Unlock Internship Success with Us!
              </h1>
              <h3 className="  text-white px-4 py-1 rounded-lg mt-[5vw] text-2xl border font-[100]">
                Your Growth Partner
              </h3>
              <h3 className="  text-white text-center w-[30vw] pt-[4vw] text-xl font-[100]">
                Embark on your professional journey by seamlessly applying for
                transformative internships with our expert guidance and curated
                resources.
              </h3>
            </div>
            <div className="image1 flex justify-between items-center px-[6vw] -mt-[10vw]">
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
          <div className="text  w-full bg-zinc-900 ">
            <div className=" ml-[8vw] pt-[3vw] flex flex-col  head">
              <h1 className=" text-white text-7xl font-[600]">INTERNSHIPS..</h1>
              <p className="text-white text-xl">
                Your gateway to internships – connecting aspiring talents with
                opportunities.
              </p>
            </div>
            <div className=" h-fit pb-[10vw] items-start pt-[10vh] pl-[10vh]  flex flex-wrap gap-10 scroll-0  ">
            {intern &&
                intern.map((internship) => (
              <div key={internship._id} className="card h-[21vw] flex flex-col px-[1.5vw] py-[1.5vw] rounded-lg w-[28vw] bg-zinc-100 ">
                <div className="head ">
                  
                  <h1 className="text-2xl font-[500]">{internship.title}</h1>
                  <h3 className="text-sm font-[400]">{internship.profile}</h3>
                </div>
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className={
                  internship.internshipType =="Work from home"?
                    " text-lg ri-home-4-line"
               :
                    "ri-building-line text-lg "
                  
                }/>
                <h3 className="text-lg font-[600]">{internship.internshipType}</h3>
                </div>
                <div className="extra pt-3 flex  flex-wrap gap-16">
                  <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className=" text-base ri-play-circle-line"/>
                <h3 className="text-base font-[600]">START DATE</h3>
                </div>
                <h3 className="px-1">{internship.from}</h3>
                  </div>
                  <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className=" text-base ri-calendar-line"/>
                <h3 className="text-base font-[600]">DURATION</h3>
                </div>
                <h3 className="px-1">{internship.duration}</h3>
                  </div>
                  
              
                </div>
                <div className="extra  flex -mt-1  flex-wrap gap-16">
                  <div className="extra2">
                <div className=" flex items-center gap-2 pt-[1vw] work">
                <i className="text-base ri-wallet-3-line"/>
                <h3 className="text-base font-[600]">STIPEND</h3>
                </div>
                <h3 className="px-1">₹{internship.amount}/month</h3>
                  </div>
                    
                </div>
                <Link  to={`/employe/internship/read/${internship._id}`} className='bg-zinc-800 w-fit h-[2vw]  px-[1vw] items-center ml-[15vw] flex rounded text-gray-50' >View Details</Link>
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
        </div>
      </div>
      }
      {isAuths && <EmployeReadInternship/>}
      <Footer/>
    </div>
  );
};

export default Interships;
